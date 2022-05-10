import React from 'react';
import ReactMapGL, { Marker, MapContext, MapRef } from 'react-map-gl';

import { Pin } from '@/atoms/MapAtoms';
import { Story } from '@/molecules/MapStory';
// import { Theme } from '@/theme/Theme';

import './mapStoryStyles.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ENV;
const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

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
        }
      ],
      onChapterExit: [
        {
          layer: 'river-st-corridor',
          opacity: 0
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
        }
      ],
      onChapterExit: [
        {
          layer: 'zoning-subdistricts',
          opacity: 0
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

  const [viewport] = React.useState({
    longitude: config.chapters[0].location.center[0] ?? -71.088,
    latitude: config.chapters[0].location.center[1] ?? 42.286,
    zoom: config.chapters[0].location.zoom ?? 12.1,
    bearing: config.chapters[0].location.bearing ?? 0,
    pitch: config.chapters[0].location.pitch ?? 0,
    width: '100%',
    height: '100%'
  });

  const [markerCoords, setMarkerCoords] = React.useState([-71.0869, 42.27]);

  const mapRef = React.createRef<MapRef>();

  const onMarkerCoordsChange = (coords: [number, number]) => {
    if (coords[0] != markerCoords[0] || coords[1] != markerCoords[1]) {
      setMarkerCoords(coords);
    }
  };
  
  /* Fetch data from GraphQL below before running above code */
  /* If failed, still run with original config.js */
  /* If succeed, override config.chapters with fetched values */
  React.useEffect(() => {
    fetch(GRAPHQL_ENDPOINT, options)
      .then(res => res.json())
      .then(({ data }) => {
        const newConfig = { ...DEFAULT_CONFIG, ...data };
        setConfig(newConfig)
      }).catch((err) => console.error(err));
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
        onLoad={() => {
          setMarkerCoords(config.chapters[0].location.center);
        }}
      >
        <Marker longitude={markerCoords[0]} latitude={markerCoords[1]} offsetLeft={-32} offsetTop={-32}>
          <Pin size={32} color={config.markerColor} />
        </Marker>
      </ReactMapGL>
      <Story
        onMarkerCoordsChange={onMarkerCoordsChange}
        chapterData={config.chapters}
        headerTitle={config.title}
        headerSubtitle={config.subtitle}
        headerByline={config.byline}
        footerHtml={config.footer}
        showMarkers={config.showMarkers}
      />
    </MapContext.Provider> 

  );

};
    
export default StorytellingMap;
