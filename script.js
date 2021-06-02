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
// unique id of the sheet that imports desired columns from the form responses sheet
const sheetId = "1pXnLHplYQdidWe00tyMPqLPA09bf7t9i2ET7JVL2jdw";

// the URI that grabs the sheet text formatted as a CSV
const sheetURI = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&id=${sheetId}`;



/******************************************
 * MAP SETUP & MAP CONTROLS
 *****************************************/

// options for configuring the Leaflet map
// don't add the default zoom ui and attribution as they're customized first then added layer
const mapOptions = {
  zoomControl: false,
  attributionControl: false,
  maxBounds: [
    [-85.05, -190], // lower left
    [85.05, 200] // upper right
  ]
};

// global map layer styling variables
const strokeWeight = 1.5;
const pointRadius = 5;
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

let resizeWindow;
window.addEventListener("resize", function () {
  clearTimeout(resizeWindow);
  resizeWindow = setTimeout(handleWindowResize, 250);
});

function handleWindowResize() {
  checkIsMobile();
  map.invalidateSize();
}

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
const infowindowTemplate = document.getElementById("aemp-infowindow-template")
  .innerHTML;

const oralHistoryPopupTemplate = document.querySelector(
  ".oralhistory-popup-template"
).innerHTML;
const oralHistoryInfowindowTemplate = document.getElementById(
  "aemp-oralhistory-infowindow-template"
).innerHTML;

// Add base layer
L.tileLayer(
  'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  {
    minZoom: 13,
    maxZoom: 18
  }
).addTo(map);

// add boundaries layer
const zoningBoundary = L.geoJson(zoning_boundary,{
  style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#0d3b66"
      }
  }
});
zoningBoundary.addTo(map);

const neighbBoundary = L.geoJson(neighb_boundary,{
  style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#ee964b"
      }
  }
});

const planningBoundary = L.geoJson(planning_boundary,{
  style: function (feature){
      return {
        fillOpacity: 0.0,
        color: "#f95738"
      }
  }
});

const riverStreetBoundary = L.geoJson(river_st_boundary,{
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#05757C"
    }
  }
});

const blueHillAveBoundary = L.geoJson(blue_hill_ave_corridor, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#0C0044"
    }
  }
});

const cumminsHwyBoundary = L.geoJson(cummins_hwy_corridor, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#00D822"
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

const greaterMattapanMergedBoundary = L.geoJson(greater_mattapan_merged, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#444488"
    }
  }
});

const mattapanSqBoundary = L.geoJson(mattapan_sq_qtr_mile, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#4400EE"
    }
  }
});

const PLANBoundary = L.geoJson(plan_mattapan, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#0000EE"
    }
  }
});

const mattapanLineBoundary = L.geoJson(greater_mattapan_neighborhood_line, {
  style: function (feature){
    return {
      fillOpacity: 0.0,
      color: "#EE0011"
    }
  }
});




/******************************************
 * FETCH DATA SOURCES
 *****************************************/

Promise.all([
  fetch(sheetURI).then(res => {
    if (!res.ok) throw Error("Unable to fetch  sheet data");
    return res.text();
  })
])
  .then(handleData)
  .catch(error => console.log(error));

/******************************************
 * TODO: HANDLE DATA ASYNC RESPONSES
 *****************************************/

function handleData([
  sheetsText
]) {
  const indicatorRows = d3
    .csvParse(sheetsText, d3.autoType)
    .map(({img_link, ...rest}) =>({
      img_link: img_link === null ? null : "https://drive.google.com/uc?id=".concat(img_link.slice(33)),
      ...rest
    }))
    .filter(
      row => row.submission_type === "Indicator"
    );

  const oralHistoryRows = d3
    .csvParse(sheetsText, d3.autoType)
    .map(({img_link, ...rest}) =>({
      img_link: img_link === null ? null : "https://drive.google.com/uc?id=".concat(img_link.slice(33)),
      ...rest
    }))
    .filter(
      row => row.submission_type === "Oral History"
    );

  // convert the regular cities moratorium JSON into valid GeoJSON
  const indicatorGeoJSON = {
    type: "FeatureCollection",
    features: indicatorRows.map(({ lon, lat, ...rest }, index) => ({
      type: "Feature",
      id: index,
      properties: rest,
      geometry: {
        type: "Point",
        coordinates: [lon, lat]
      }
    }))
  };

  const oralHistoryGeoJSON = {
    type: "FeatureCollection",
    features: oralHistoryRows.map(({ lon, lat, ...rest }, index) => ({
      type: "Feature",
      id: index,
      properties: rest,
      geometry: {
        type: "Point",
        coordinates: [lon, lat]
      }
    }))
  };


  // add the states, cities, counties, and rentstrikes layers to the map
  // and save the layers output
  const indicators = handleIndicatorsLayer(indicatorGeoJSON);
  const oralHistories = handleOralHistoriesLayer(oralHistoryGeoJSON);

  //console.log(riverStreetBoundary)
  //console.log(z1[50])
  // add layers to map layers control UI
  layersControl
    .addOverlay(indicators, "Indicators")
    .addOverlay(oralHistories, "Oral Histories")
    .addOverlay(zoningBoundary, "Greater Mattapan Zoning Boundary")
    .addOverlay(planningBoundary, "BPDA Planning District Boundary")
    .addOverlay(neighbBoundary, "BDPA Unofficial Neighborhood Boundary")
    .addOverlay(neighbBoundary, "Morton Street Corridor")
    .addOverlay(riverStreetBoundary, "River Street Boundary")
    .addOverlay(PLANBoundary, "PLAN Mattapan Boundary")
    .addOverlay(mattapanLineBoundary, "Mattapan Line Boundary")
    .addOverlay(blueHillAveBoundary, "Blue Hill Ave Boundary")
    .addOverlay(mattapanSqBoundary, "Mattapan Square Boundary")
    .addOverlay(cumminsHwyBoundary, "Cummins Highway Boundary")
    .addOverlay(greaterMattapanMergedBoundary, "Greater Mattapan Merged Boundary")

  // Apply correct relative order of layers when adding from control.
  map.on("overlayadd", function () {
    // Top of list is top layer
    fixZOrder([indicators, oralHistories]);
  });

  // if any layers in the map config are set to false,
  // remove them from the map
  if (!mapConfig.indicators) {
    map.removeLayer(indicators);
  }

  if (!mapConfig.oralHistories) {
    map.removeLayer(oralHistories);
  }
}

/******************************************
 * HANDLE ADDING MAP LAYERS
 *****************************************/

function handleIndicatorsLayer(geojson) {
  // styling for the indicators layer: style indicators conditionally according to a presence of an indicator
  const pointToLayer = (_,latlng) => {
    // style indicators
    return L.circleMarker(latlng, {
      color: "#d01c8b",
      fillColor: "#d01c8b",
      fillOpacity: 1,
      radius: pointRadius
    });
  };

  // Create the Leaflet layer for the cities data
  const indicatorsLayer = L.geoJson(geojson, {
    pointToLayer: pointToLayer
  });

  //add markers to cluster with options
  const indicatorsLayerMarkers = L.markerClusterGroup({
    maxClusterRadius: 20,
    spiderfyOnMaxZoom: false
  }).on("clusterclick", function () {
    if (IS_MOBILE) {
      titleDetails.open = false;
    }
  });

  // Add popups to the layer
  indicatorsLayerMarkers.addLayer(indicatorsLayer).bindPopup(function (layer) {
    // This function is called whenever a feature on the layer is clicked

    // Render the template with all of the properties. Mustache ignores properties
    // that aren't used in the template, so this is fine.
    const renderedInfo = Mustache.render(
      infowindowTemplate,
      layer.feature.properties
    );
    document.getElementById(
      "aemp-infowindow-container"
    ).innerHTML = renderedInfo;
    return Mustache.render(popupTemplate, layer.feature.properties);
  });

  // Add data to the map
  map.addLayer(indicatorsLayerMarkers);

  return indicatorsLayerMarkers;
}

function handleOralHistoriesLayer(geoJson) {
  // custom icons & icon settings for rent strikes markers
  const iconSize = [25, 25];
  const iconAnchor = [12, 12];
  const micIcon = new L.Icon({
    iconUrl: "./assets/mapIcons/mic-fill.svg",
    iconSize: iconSize,
    iconAnchor: iconAnchor
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
    document.getElementById(
      "aemp-infowindow-container"
    ).innerHTML = renderedInfo;
    return Mustache.render(oralHistoryPopupTemplate, layer.feature.properties);
  });

  map.addLayer(oralHistoryLayerMarkers);


  return oralHistoryLayerMarkers;
}

// Ensures that map overlay pane layers are displayed in the correct Z-Order
function fixZOrder(dataLayers) {
  dataLayers.forEach(function (layerGroup) {
    if (map.hasLayer(layerGroup)) {
      layerGroup.bringToBack();
    }
  });
}

