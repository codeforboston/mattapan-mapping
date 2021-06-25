"use strict";
//console.clear();

/******************************************
 * GLOBAL CONSTANTS & FLAGS
 *****************************************/
// note: this matches the breakpoint in styles.css
const MOBILE_BREAKPOINT = 640;
let IS_MOBILE = document.querySelector("body").offsetWidth < MOBILE_BREAKPOINT;

const DESKTOP_BREAKPOINT = 1200;
let IS_DESKTOP =
  document.querySelector("body").offsetWidth > DESKTOP_BREAKPOINT;

/******************************************
 * DATA SOURCE
 *****************************************/
const sheetURI = "assets/csvFiles/mattapan-gentrification-indicators.csv"
const developmentsURI = "assets/csvFiles/Mattapan_BPDA_Developments.csv"

/******************************************
 * MAP SETUP & MAP CONTROLS
 *****************************************/

// options for configuring the Leaflet map
// don't add the default zoom ui and attribution as they're customized first then added layer

// global map layer styling variables
const strokeWeight = 1.5;
const pointRadius = 7;
const fillOpacity = 0.7;

// setting the initial zoom settings
let initialMapZoom = 14;
if (IS_MOBILE) {
  initialMapZoom = 12;
} else if (IS_DESKTOP) {
  initialMapZoom = 14;
}

// initial values, if not given by the url
let mapConfig = {
  lat: 42.2819229,
  lng: -71.0849532,
  z: initialMapZoom,
  indicators: true,
  oralHistories: true,
  audioMapPoints: true,
};

const mapOptions = {
  zoomControl: false,
  attributionControl: false,
  maxBounds: [
    [-85.05, -190], // lower left
    [85.05, 200] // upper right
  ]
};

// create a new map instance by referencing the appropriate html element by its "id" attribute
const map = L.map("map", mapOptions).setView(
  [mapConfig.lat, mapConfig.lng],
  mapConfig.z
);

// the collapsable <details> element below the map title
const titleDetails = document
  .getElementById("aemp-titlebox")
  .querySelector("details");

titleDetails.addEventListener("toggle", () => {
  if (titleDetails.open) {
    document.getElementById("aemp-titlebox").classList.remove("collapsed");
  } else {
    document.getElementById("aemp-titlebox").classList.add("collapsed");
  }
});

function checkIsMobile() {
  IS_MOBILE = document.querySelector("body").offsetWidth < MOBILE_BREAKPOINT;
}

function toggleTitleDetails() {
  if (titleDetails.open) {
    titleDetails.removeAttribute("open");
  } else {
    titleDetails.setAttribute("open", true);
  }
}

// used by infowindow-template
function closeInfo() {
  map.closePopup();
  map.invalidateSize();
}

let resizeWindow;
window.addEventListener("resize", function () {
  clearTimeout(resizeWindow);
  resizeWindow = setTimeout(handleWindowResize, 250);
});

function handleWindowResize() {
  checkIsMobile();
  map.invalidateSize();
}

//jQuery please save us!!
function showMore(ele) {

  const parentofSelected = ele.parentNode;

  var children = parentofSelected.childNodes;

  for (var i=0; i < children.length; i++) {

    if(children[i].tagName === 'DIV') {
      var children = children[i].childNodes;
      for (var i=0; i < children.length; i++) {
        if(children[i].tagName === 'P') {
          children[i].style.display = 'block'
        }
      }
    }
  
  }

}

// Ensures that map overlay pane layers are displayed in the correct Z-Order
function fixZOrder(dataLayers) {
  dataLayers.forEach(function (layerGroup) {
    if (map.hasLayer(layerGroup)) {
      layerGroup.bringToBack();
    }
  });
}

map.on("popupopen", function (e) {
  document.getElementById("root").classList.add("aemp-popupopen");

  if (IS_MOBILE) {
    titleDetails.open && toggleTitleDetails();
    map.invalidateSize();
  }

  map.setView(e.popup._latlng, map.getZoom(), { animate: true });
  
});

map.on("popupclose", function (e) {
  document.getElementById("root").classList.remove("aemp-popupopen");
  document.getElementById("aemp-infowindow-container").innerHTML = "";
  if (IS_MOBILE)
    setTimeout(function () {
      map.invalidateSize();
    }, 100);
});

map.on("click", function () {
  if (IS_MOBILE) {
    titleDetails.open = false;
  }
});

const attribution = L.control
  .attribution({ prefix: "Data sources by: " })
  .addAttribution(
    "<a href='https://www.openstreetmap.org' target='_blank'>Open Street Map Contributors</a>"
  )
  .addTo(map);

const zoomControl = L.control.zoom({ position: "bottomright" }).addTo(map);


// Map layers control: add the layers later after their data has been fetched
const layersControl = L.control
  .layers(null, null, { position: "topright", collapsed: false })
  .addTo(map);



// Get the popup & infowindow templates from the HTML.
// We can do this here because the template will never change.
const popupTemplate = document.querySelector(".popup-template").innerHTML;
const infowindowTemplate = document.getElementById("aemp-infowindow-small-template").innerHTML;
const infowindowTemplateLarge = document.getElementById("aemp-infowindow-large-template").innerHTML;


const oralHistoryInfowindowTemplate = document.getElementById("aemp-oralhistory-infowindow-small-template").innerHTML;
const oralHistoryInfowindowTemplateLarge = document.getElementById("aemp-oralhistory-infowindow-large-template").innerHTML;

// Add base layer
L.tileLayer(
  'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  {
    minZoom: 13,
    maxZoom: 18
  }
).addTo(map);

function constructGeoJson(inputJson){
   const outputGeoJSON = {
    type: "FeatureCollection",
    features: inputJson.map(({ Longitude, Latitude, ...rest }, index) => ({
      type: "Feature",
      id: index,
      properties: rest,
      geometry: {
        type: "Point",
        coordinates: [Longitude, Latitude]
      }
    }))
  };
  return outputGeoJSON
}

const oralHistories = handleOralHistoriesLayer(audio_map_points);

function addBoudaryLayers() {

  // add boundaries layer
  const zoningBoundary = L.geoJson(zoning_boundary,{
    style: function (feature){
        return {
          fillOpacity: 0.0,
          color: "#0d3b66"
        }
    }
  });
  // was #ee964b
  const neighbBoundary = L.geoJson(neighb_boundary,{
    style: function (feature){
        return {
          fillOpacity: 0.0,
          color: "#7fb8ec"
        }
    }
  });
  
  // was #f95738
  const planningBoundary = L.geoJson(planning_boundary,{
    style: function (feature){
        return {
          fillOpacity: 0.0,
          color: "#0c70ce"
        }
    }
  });

  // Was #00FF00
  const mortonBoundary = L.geoJson(morton_boundary,{
    style: function (feature){
        return {
          fillOpacity: 0.0,
          color: "#ED5D31"
        }
    }
  });

  // Was #05757C
  const riverStreetBoundary = L.geoJson(river_st_boundary,{
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#ED5D31"
      }
    }
  });

  // Was #ED5D31
  const blueHillAveBoundary = L.geoJson(blue_hill_ave_corridor, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#ED5D31"
      }
    }
  });

  // was #00D822
  const cumminsHwyBoundary = L.geoJson(cummins_hwy_corridor, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#ED5D31"
      }
    }
  });
  
  const dotHPBoundary = L.geoJson(dot_hp_zoning_subdistricts, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#220088"
      }
    }
  });
  
  // Was #444488
  const greaterMattapanMergedBoundary = L.geoJson(greater_mattapan_merged, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#0d3b66"
      }
    }
  });
  
  // Was #4400EE
  const mattapanSqBoundary = L.geoJson(mattapan_sq_qtr_mile, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#0d3b66"
      }
    }
  });
  
  // Was #0000EE
  const PLANBoundary = L.geoJson(plan_mattapan, {
    style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#0d3b66"
      }
    }
  });
  
  layersControl
  .addOverlay(zoningBoundary, "<span><span class='legend-icon legend-icon-boundary'></span>Greater Mattapan Zoning Boundary</span>")
  .addOverlay(planningBoundary, "<span><span class='legend-icon legend-icon-boundary medium'></span>BPDA Planning District Boundary</span>")
  .addOverlay(neighbBoundary, "<span><span class='legend-icon legend-icon-boundary light'></span>BPDA Unofficial Neighborhood Boundary</span>")
  .addOverlay(PLANBoundary, "<span><span class='legend-icon legend-icon-boundary'></span>PLAN Mattapan Boundary</span>")
  .addOverlay(greaterMattapanMergedBoundary, "<span><span class='legend-icon legend-icon-boundary'></span>Greater Mattapan Merged Boundary</span>")
  .addOverlay(mattapanSqBoundary, "<span><span class='legend-icon legend-icon-boundary'></span>Mattapan Square Boundary</span>")
  .addOverlay(blueHillAveBoundary, "<span><span class='legend-icon legend-icon-corridor'></span>Blue Hill Ave Corridor</span>")
  .addOverlay(cumminsHwyBoundary, "<span><span class='legend-icon legend-icon-corridor'></span>Cummins Highway Corridor</span>")
  .addOverlay(mortonBoundary, "<span><span class='legend-icon legend-icon-corridor'></span>Morton Street Corridor</span>")
  .addOverlay(riverStreetBoundary, "<span><span class='legend-icon legend-icon-corridor'></span>River Street Corridor</span>")

  //Show the Greater Mattapan Zoning Boundary by default
  zoningBoundary.addTo(map);

  const htmlLegend = document.querySelector(".leaflet-control-container > .leaflet-top.leaflet-right")
  
  let legendDiv = document.createElement("div");
  let legendP = document.createElement("p");
  let span = document.createElement("span");
  legendP.innerHTML = "<img src='assets/images/mattapan-legend-temp.png' height='154' width='241'/>"
  legendDiv.append(legendP);
  legendDiv.prepend(span);
  legendDiv.className = "leaflet-control-layers legend-header leaflet-control-layers-expanded leaflet-control"
  htmlLegend.prepend(legendDiv)


}

function buildGeoJsonLayers(inputRows, layersTitle){

  const innerGeoJSON = constructGeoJson(inputRows)

  // add the states, cities, counties, and rentstrikes layers to the map
  // and save the layers output
  const layersInputInfo = handleLayers(innerGeoJSON);
    
  layersControl
    .addOverlay(layersInputInfo, layersTitle)

  // Apply correct relative order of layers when adding from control.
  map.on("overlayadd", function () {
    // Top of list is top layer
    fixZOrder([layersInputInfo]);
  });

  // if any layers in the map config are set to false,
  // remove them from the map
  if (!mapConfig.rs) {
    map.removeLayer(layersInputInfo);
  }
  
}

function addPoints(pointsData, type) {

  const points = d3
  .csvParse(pointsData, d3.autoType)

if (type === 'indicators') {

  const indicatorPoints  = points.filter(
    row => row["Submission Type"] === "Indicator"
    );

    buildGeoJsonLayers(indicatorPoints, "<span><span class='legend-icon legend-icon-developments'></span>Gentrification Indicators</span>")
}

if (type === 'developments') {

  const developmentsPoints  = points

  buildGeoJsonLayers(developmentsPoints, "<span><span class='legend-icon legend-icon-developments'></span>Developments</span>")

}
  
}
 
/******************************************
 * HANDLE ADDING MAP LAYERS
 *****************************************/

 function handleLayers(geojson) {
  // styling for the indicators layer: style indicators conditionally according to a presence of an indicator
  const pointToLayer = (_,latlng) => {
    // style indicators
    return L.circleMarker(latlng, {
      color: "#ffa281",
      fillColor: "#fec0aa",
      fillOpacity: 1,
      radius: pointRadius,
      weight: .5
    });
  };

  // Create the Leaflet layer for the cities data
  const layer = L.geoJson(geojson, {
    pointToLayer: pointToLayer
  });

  //add markers to cluster with options
  const layerMarkers = L.markerClusterGroup({
    maxClusterRadius: 20,
    spiderfyOnMaxZoom: false
  }).on("clusterclick", function () {
    if (IS_MOBILE) {
      titleDetails.open = false;
    }
  });

  // Add popups to the layer
  layerMarkers.addLayer(layer).bindPopup(function (layer) {

    // This function is called whenever a feature on the layer is clicked

    // Render the template with all of the properties. Mustache ignores properties
    // that aren't used in the template, so this is fine.
    const renderedInfo = Mustache.render(
      infowindowTemplate,
      layer.feature.properties
    );

    // large overlay
     /*document.getElementById(
      "aemp-infowindow-container"
    ).innerHTML = renderedInfo;*/

    return renderedInfo;

  }, {
    maxWidth: 300,
    className: 'aemp-infowindow-container'
  });

  // Add layer data to the map
  map.addLayer(layerMarkers);

  return layerMarkers;

}


function handleOralHistoriesLayer(geoJson) {
  // custom icons & icon settings for rent strikes markers
  const iconAnchor = [12, 12];
  const iconSize = 20;
  const micIcon = new L.Icon({
    iconUrl: "assets/mapIcons/mic-fill.svg",
    iconSize: iconSize,
    nAnchor: iconAnchor
 });

  // add custom marker icons
  const oralHistoryLayer = L.geoJson(geoJson, {
    pointToLayer: function (_,latlng) {
      return L.marker(latlng, {
        icon: micIcon
      });
    }
  });

  //add markers to cluster with options
  const oralHistoryLayerMarkers = L.markerClusterGroup({
    spiderfyOnMaxZoom: false,
    maxClusterRadius: 40
  }).on("clusterclick", function () {
    if (IS_MOBILE) {
      titleDetails.open = false;
    }
  });

  oralHistoryLayerMarkers.addLayer(oralHistoryLayer).bindPopup(function (layer) {
    const renderedInfo = Mustache.render(
      oralHistoryInfowindowTemplate,
      layer.feature.properties
    );

    // large overlay
    /*document.getElementById(
      "aemp-infowindow-container"
    ).innerHTML = renderedInfo;*/

    return renderedInfo;
  }, {
    maxWidth: 400,
    className: 'aemp-infowindow-container'
  });

  map.addLayer(oralHistoryLayerMarkers);

  return oralHistoryLayerMarkers;

}


/******************************************
 * FETCH DATA SOURCES
 *****************************************/
 async function initMapData() {

  //The following statements determine the order in which the elements
  // appear within the map key
  layersControl.addOverlay(oralHistories, "<span><span class='legend-icon legend-icon-oralhistory'></span>Oral Histories</span>")

  await fetch(sheetURI)
  .then(response => response.text())
  .then(data => addPoints(data, 'indicators'))
  .catch(err => console.log("Error fetching data: ", err))

  await fetch(developmentsURI)
  .then(response => response.text())
  .then(data => addPoints(data, 'developments'))
  .catch(err => console.log("Error fetching data: ", err))

  addBoudaryLayers()

}

//Add all data to map
initMapData()
