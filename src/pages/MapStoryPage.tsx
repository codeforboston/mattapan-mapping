import React from 'react';
import ReactMapGL, { Marker, MapContext, MapRef } from 'react-map-gl';

import { ExplorePageToggleStates, EXPLORE_PAGE_BOUNDARY_DATA } from '@/data/ExplorePageData';
import { Pin } from '@/atoms/MapAtoms';
import { Story } from '@/molecules/MapStory';
import { MapLayers } from '@/molecules/MapLayers';
// import { Theme } from '@/theme/Theme';

import './mapStoryStyles.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ENV;
const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

const urls = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.file);
const boundaryIds = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.id);
const boundaryDataFileLocations = urls.map(url => fetch(url).then(res => res.json()));

const chaptersListQuery = `
    query ChaptersList {
        chapters: storytelling_chapter(order_by: {id: asc}) {
            id: name
            alignment
            hidden
            title
            image
            description
            location {
                center
                zoom
                pitch
                bearing
                curve
                max_duration
                min_zoom
                screen_speed
                speed
            }
            mapAnimation
            rotateAnimation
            callback
            onChapterEnter {
                layer
                opacity
                duration
            }
            onChapterExit {
                layer
                opacity
                duration
            }
        }
    }`;

const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: chaptersListQuery }),
};

const DEFAULT_CONFIG = {
  style: 'mapbox://styles/mattapan-mapping/cl1mtp3gy000k14mblgpwmoh8',
  accessToken: MAPBOX_TOKEN,
  showMarkers: true,
  markerColor: '#3FB1CE',
  // projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: 'dark',
  use3dTerrain: false, //set true for enabling 3D maps.
  title: 'The Title Text of this Story',
  subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  byline: 'By a Digital Storyteller',
  footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: 'slug-style-id',
      alignment: 'left',
      hidden: false,
      title: 'Base Title',
      image: './path/to/image/source.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [-71.0869, 42.27],
        zoom: 12,
        pitch: 60,
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'river-st-corridor',
          opacity: 1,
          duration: 5000
        },
        {
          layer: 'transportLayer',
          opacity: 1,
          duration: 5000
        },
        {
          layer: 'cummimnsHwyCorridor',
          opacity: 1,
          duration: 5000
        },
      ],
      onChapterExit: [
        {
          layer: 'river-st-corridor',
          opacity: 0
        },
        {
          layer: 'transportLayer',
          opacity: 0,
          duration: 5000
        },
          {
          layer: 'cummimnsHwyCorridor',
          opacity: 0,
          duration: 5000
        }       
      ]
    },
    {
      id: 'second-identifier',
      alignment: 'right',
      hidden: false,
      title: 'Second Title',
      image: './path/to/image/source.png',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [-71.0869, 42.27],
        zoom: 12,
        pitch: 60,
        bearing: 0
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [
        {
          layer: 'zoning-subdistricts',
          opacity: 1,
          duration: 5000
        },
        {
          layer: 'mattapanPlanBoundary',
          opacity: 1,
          duration: 5000
        }
      ],
      onChapterExit: [
        {
          layer: 'zoning-subdistricts',
          opacity: 0
        },
        {
          layer: 'mattapanPlanBoundary',
          opacity: 0,
          duration: 5000
        }
      ]
    }
       
  ]
};

const transformRequest = (url?: string) => {
  const hasQuery = url?.indexOf('?') !== -1;
  const suffix = hasQuery ? '&pluginName=scrollytellingV2' : '?pluginName=scrollytellingV2';
  return {
    url: url + suffix
  };
};

const StorytellingMap = (props: any) => {
  const [config, setConfig] = React.useState(DEFAULT_CONFIG);
  const [markerCoords, setMarkerCoords] = React.useState(DEFAULT_CONFIG.chapters[0].location.center);
  const [data, setData]: [MapGeoJsonData[], React.Dispatch<React.SetStateAction<any>>] = React.useState([]);
  
  const layerToggle = React.useRef<FeatureToggleState>({});
  
  const [viewport] = React.useState({
    longitude: DEFAULT_CONFIG.chapters[0].location.center[0] ?? -71.088,
    latitude: DEFAULT_CONFIG.chapters[0].location.center[1] ?? 42.286,
    zoom: DEFAULT_CONFIG.chapters[0].location.zoom ?? 12.1,
    bearing: DEFAULT_CONFIG.chapters[0].location.bearing ?? 0,
    pitch: DEFAULT_CONFIG.chapters[0].location.pitch ?? 0,
    width: '100%',
    height: '100%'
  });


  const mapRef = React.createRef<MapRef>();

  const onMarkerCoordsChange = (coords: [number, number]) => {
    if (coords[0] !== markerCoords[0] || coords[1] !== markerCoords[1]) {
      setMarkerCoords(coords);
    }
  };

  // FIXME: This isn't controlling the layers. Only layers referenced in the intial chapter are painted
  const toggleLayer = (id: string) => {
    console.log(id, layerToggle.current[id]);
    layerToggle.current[id] = !layerToggle.current[id];
    // layerToggle.current = { ...layerToggle.current, [id]: true };
  };
  
  React.useEffect(() => {
    /* Fetch data from GraphQL on intial render or fall back to default config*/
    const fetchConfig = async () => {
      try {
        const { data } = await fetch(GRAPHQL_ENDPOINT, options).then(res => res.json());
        const newConfig = { ...DEFAULT_CONFIG, ...data };
        setConfig(newConfig)
      } catch (error) {
        console.error('Story map page failed to fetch config data from graphql', error);
      }
    }
    
    // Fetch layer data
    const fetchAll = async () => {
      try {
        const rawData = await Promise.all(boundaryDataFileLocations);
        const ExplorePageData = boundaryIds.map((id: string, idx) => {
          return {
            data: rawData[idx],
            name: rawData[idx]['name'] ?? 'Name missing from data',
            id: id,
            type: 'line',
            color: EXPLORE_PAGE_BOUNDARY_DATA[idx].color,
            visible: EXPLORE_PAGE_BOUNDARY_DATA[idx].visible,
          };
        });

        setData(ExplorePageData)
        // layerToggle.current = ExplorePageToggleStates(ExplorePageData);
      } catch (error) {
          console.log('Map Story data fetch failed: ' + error);
      }
    }

    fetchAll();
    fetchConfig();
  }, [])
  
  return (
    <MapContext.Provider value={{
      map: mapRef,
      container: null,
      isDragging: false,
      eventManager: undefined,
    }}>
      <ReactMapGL
        style={{
          top:0,
            height: '100vh',
            width:'100vw',
            position: 'fixed',
        }}
        mapStyle={config.style}
        {...viewport}
        // interactive={false} react-map-gl v7 only
        // projection={config.projection} react-map-gl v7 only
        // Uncomment to enable user interction
        // onViewportChange={ (viewport: any) => {setViewport(viewport)} }
        transformRequest={transformRequest}
        mapboxApiAccessToken={config.accessToken || MAPBOX_TOKEN}
        ref={mapRef}
      >
        {/* FIXME: Marker doesn't adjust on screen resize */}
        <Marker longitude={markerCoords[0]} latitude={markerCoords[1]} offsetLeft={-32} offsetTop={-32}>
          <Pin size={32} color={config.markerColor} />
        </Marker>
        <MapLayers geoJsonData={ data } toggleState={ layerToggle.current } /> 
      </ReactMapGL>
      <Story
        onMarkerCoordsChange={onMarkerCoordsChange}
        chapterData={config.chapters}
        headerTitle={config.title}
        headerSubtitle={config.subtitle}
        headerByline={config.byline}
        footerHtml={config.footer}
        showMarkers={config.showMarkers}
        toggleLayer={toggleLayer}
      />
    </MapContext.Provider> 

  );

};
    
export default StorytellingMap;
