//@ts-nocheck
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ReactMapGL, { Marker, Source, Layer, MapContext } from 'react-map-gl';
import scrollama from 'scrollama';
import { Theme } from '@/theme/Theme';
import './mapStyles.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ENV;

// var initLoad = true;
const layerTypes = {
  'fill': ['fill-opacity'],
  'line': ['line-opacity'],
  'circle': ['circle-opacity', 'circle-stroke-opacity'],
  'symbol': ['icon-opacity', 'text-opacity'],
  'raster': ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
  'heatmap': ['heatmap-opacity']
};

const alignments = {
  'left': 'lefty',
  'center': 'centered',
  'right': 'righty',
  'full': 'fully'
};

const config = {
  style: 'mapbox://styles/mattapan-mapping/cl1mtp3gy000k14mblgpwmoh8',
  accessToken: 'pk.eyJ1IjoibWF0dGFwYW4tbWFwcGluZyIsImEiOiJjbDFtdGx0ZGswNGM3M2Ntb2s3dXRjazA4In0.rNVTt3z1Fr52sjFi1BGLfg',
  showMarkers: true,
  markerColor: '#3FB1CE',
  //projection: 'equirectangular',
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
      title: 'Display Title',
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

const Header = ({title, subtitle, byline, theme}:{title: string, subtitle: string, byline: string, theme: string} ) => {

  // FIXME: Add the theme
  // if (header.innerText.length > 0) {
  //   header.classList.add(config.theme);
  // story.appendChild(header);
  // }
  
  return (
    <header id='header'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{byline}</p>
    </header>
  );
};

const Footer = ({footerText}: {footerText: string}) => {
  
  // TODO: dynamically add theme
  //    if (footer.innerText.length > 0) {
  //       footer.classList.add(config.theme);
  //       footer.setAttribute('id', 'footer');
  //       story.appendChild(footer);
  // }
  
  return (
    <footer>
      <p>
        {footerText}
      </p>
    </footer>
  );
};

const Chapter = (
  { id, content, title, image, isActive, hidden, alignment }:
  { id: string, content: string, title: string, image: string, isActive: boolean, hidden: boolean, alignment: string }
  ) => {
  return (
    <div id={id} className={`step ${isActive ? 'active' : ''} ${alignment} ${hidden ? 'hidden' : ''}`}>
      {/* FIXME: replace with theme? */}
      <div className="light">
        <h3>{title}</h3>
        <img src={image} />
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

const transformRequest = (url: string) => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery ? '&pluginName=scrollytellingV2' : '?pluginName=scrollytellingV2';
  return {
    url: url + suffix
  };
};

const StorytellingMap = (props: any) => {
  // TODO: Intitialize these markers
  const markerRef = React.useRef();

  const [viewport, setViewport] = React.useState({
    latitude: config.chapters[0].location.center[1] ?? 42.286,
    longitude: config.chapters[0].location.center[0] ?? -71.088,
    zoom: config.chapters[0].location.zoom ?? 12.1,
    bearing: config.chapters[0].location.bearing ?? 0,
    pitch: config.chapters[0].location.pitch ?? 0,
    width: '100%',
    height: '100%'
  });

  // TODO:
  // if (config.showMarkers) {
  //     var marker = new mapboxgl.Marker({ color: config.markerColor });
  //     marker.setLngLat(config.chapters[0].location.center).addTo(map);
  // }

  // TODO: Add header and footer
  return (
    <MapContext.Provider>
      <ReactMapGL
        style={{
            top:0,
            height: '100vh',
            width:'100vw',
            position: 'fixed',
          }}
          mapStyle={config.style}
          {...viewport}
          // TODO: Do we need to handle viewport chnages? 
          // onViewportChange={ (viewport: any) => setViewport(viewport) }
          interactive={false}
          transformRequest={transformRequest}
          projection={config.projection}
        mapboxApiAccessToken={config.accessToken || MAPBOX_TOKEN}
        // onLoad={onMapLoad}
        />
        <Story />
    </MapContext.Provider> 

  );

};

const Story = (props) => {
  const { map, setMap } = React.useContext(MapContext);
  const markerRef = React.useRef();

  // React.useCallback(() => {
    // instantiate the scrollama
  console.log(map);
  if (map) {
    console.log('doing map shit', map);
    const scroller = scrollama();
    // setup the instance, pass callback functions
    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        progress: true
      })
      .onStepEnter(async response => {
        console.log('enter step');
        const chapter = config.chapters.find(chap => chap.id === response.element.id);

        // TODO: Don't know if this will work
        response.element.classList.add('active');
        console.log(response.element.classList);
        map[chapter.mapAnimation || 'flyTo'](chapter.location);
        
        // if (config.showMarkers) {
        // TODO: figure out what marker ref is
        //   markerRef.current.setLngLat(chapter.location.center);
        // }

        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }

        if (chapter.callback) {
          // window[chapter.callback]();
        }

        if (chapter.rotateAnimation) {
          map.once('moveend', () => {
            const rotateNumber = map.getBearing();
            map.rotateTo(rotateNumber + 180, {
              // TODO: this was 30000
              duration: 5000, easing: function (t) {
                return t;
              }
            });
          });
        }
      })
      .onStepExit(response => {
        const chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });
        
    // }, [map]);
  }

  const chapters = config.chapters.map((record, idx) => <Chapter
    id={record.id}
    key={record.id}
    title={record.title}
    content={record.description}
    image={record.image}
    alignment={alignments[record.alignment] || 'centered'}
    hidden={record.hidden}
    isActive={idx === 0}
  />);
  
 
  function getLayerPaintType(layer: string) {
    if (map) {
      // FIXME: This sometimes throws an error figure out why 
      console.log('layer', layer);
      console.log(map);
      console.log(map.getLayer(layer));
      const layerType: keyof typeof layerTypes = map.getLayer(layer)?.type;
      
      return layerTypes[layerType];
    }
  }

  function setLayerOpacity(layer: any) {
    if (map) {
      console.log('layer opacity');
      console.log(layer);
      const paintProps = getLayerPaintType(layer.layer);
        
      paintProps?.forEach(function(prop) {
        let options = {};
        if (layer.duration) {
          const transitionProp = `${prop}-transition`;
          options = { 'duration': layer.duration };
          map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
      });
    }
  }

  return (
    <div id="story">
      <div id='features'>
        {chapters}
      </div>  
    </div>
  )
}
      

// /* Fetch data from GraphQL below before running above code */
// /* If failed, still run with original config.js */
// /* If succeed, override config.chapters with fetched values */
// const init = () => {
//     const GRAPHQL_ENDPOINT = 'https://evolved-serval-70.hasura.app/v1/graphql';

//     const chaptersListQuery = `
//         query ChaptersList {
//             chapters: storytelling_chapter(order_by: {id: asc}) {
//                 id: name
//                 alignment
//                 hidden
//                 title
//                 image
//                 description
//                 location {
//                     center
//                     zoom
//                     pitch
//                     bearing
//                     curve
//                     max_duration
//                     min_zoom
//                     screen_speed
//                     speed
//                 }
//                 mapAnimation
//                 rotateAnimation
//                 callback
//                 onChapterEnter {
//                     layer
//                     opacity
//                     duration
//                 }
//                 onChapterExit {
//                     layer
//                     opacity
//                     duration
//                 }
//             }
//         }`;

//     const options = {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ query: chaptersListQuery }),
//     };

//     return fetch(GRAPHQL_ENDPOINT, options)
//         .then(res => res.json())
//         .then(({ data }) => { config = { ...config, ...data }; })
//         .finally(() => dispatch());
// };

// init();

export default StorytellingMap;