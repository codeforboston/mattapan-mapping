//@ts-nocheck
import React from 'react';
import scrollama from 'scrollama';
import { MapContext } from 'react-map-gl';
import { Chapter, Header, Footer } from '@/atoms/StoryMapAtoms';


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

export function Story({onMarkerCoordsChange, chapterData, headerTitle, headerSubtitle, headerByline, footerHtml, showMarkers }) {
  const { map } = React.useContext(MapContext);

  function getLayerPaintType(layer: string) {
    if (map) {
      // FIXME: This sometimes throws an error figure out why 
      const layerType: keyof typeof layerTypes = map.getLayer(layer)?.type;
      
      return layerTypes[layerType];
    }
  }
  
  function setLayerOpacity({layer, duration, opacity}) {
    if (map) {
      const paintProps = getLayerPaintType(layer);
        
      paintProps?.forEach(function(prop) {
        let options = {};
        if (duration) {
          const transitionProp = `${prop}-transition`;
          options = { 'duration': duration };
          map.setPaintProperty(layer, transitionProp, options);
        }
        map.setPaintProperty(layer, prop, opacity, options);
      });
    }
  }
  
  React.useEffect(() => {
    // instantiate the scrollama
    if (map) {
      const scroller = scrollama();
      // setup the instance, pass callback functions
      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true
        })
        .onStepEnter(async response => {
          const chapter = chapterData.find(chap => chap.id === response.element.id);

          response.element.classList.add('active');
          map[chapter.mapAnimation || 'flyTo'](chapter.location);
        
          if (showMarkers) {
            onMarkerCoordsChange(chapter.location.center);
          }

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
                duration: 30000, easing: function (t) {
                  return t;
                }
              });
            });
          }
        })
        .onStepExit(response => {
          const chapter = chapterData.find(chap => chap.id === response.element.id);
          response.element.classList.remove('active');
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
          }
        });
    }
    }, [map]);

  const chapters = chapterData.map((record, idx) => <Chapter
    id={record.id}
    key={record.id}
    title={record.title}
    content={record.description}
    image={record.image}
    alignment={alignments[record.alignment] || 'centered'}
    hidden={record.hidden}
    isActive={idx === 0}
  />);

  return (
    <div id="story">
      <Header title={headerTitle} subtitle={headerSubtitle} byline={headerByline} />
      <div id='features' style={{paddingTop: '10vh', paddingBottom: '10vh'}}>
        {chapters}
      </div>  
      <Footer footerHtml={footerHtml} />
    </div>
  )
}