import React from 'react';
import scrollama from 'scrollama';
import { MapContext } from 'react-map-gl';
import { Chapter, Header, Footer } from '@/atoms/MapStoryAtoms';


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

export function Story({onMarkerCoordsChange, chapterData, headerTitle, headerSubtitle, headerByline, footerHtml, showMarkers, toggleLayer }: StoryProps) {
  const { map: mapRef } = React.useContext(MapContext);
  const map = mapRef.current?.getMap();

  React.useEffect(() => {
    // instantiate the scrollama
    if (map) {
      function getLayerPaintType(layer: string) {
        if (map) {
          const layerType: Layer = map.getLayer(layer)?.type;
          
          return layerTypes[layerType];
        }
      }

      function setLayerOpacity({ layer, duration, opacity }: { layer: string, duration: number, opacity: number }) {
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

      const scroller = scrollama();
      // setup the instance, pass callback functions
      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true
        })
        .onStepEnter(async response => {
          const chapter = chapterData.find((chap: Chapter) => chap.id === response.element.id);

          response.element.classList.add('active');
          map[chapter.mapAnimation || 'flyTo'](chapter.location);
        
          if (showMarkers) {
            onMarkerCoordsChange(chapter.location.center);
          }

          if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach((transition: ChapterTransition) => {
              // toggleLayer(transition.layer);
              setLayerOpacity(transition)
            });
          }

          if (chapter.callback) {
            // window[chapter.callback]();
          }

          if (chapter.rotateAnimation) {
            map.once('moveend', () => {
              const rotateNumber = map.getBearing();
              map.rotateTo(rotateNumber + 180, {
                duration: 30000, easing: function (t: number) {
                  return t;
                }
              });
            });
          }
        })
        .onStepExit(response => {
          const chapter = chapterData.find((chap: Chapter) => chap.id === response.element.id);
          response.element.classList.remove('active');
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach((transition: ChapterTransition) => {
              // toggleLayer(transition.layer);
              setLayerOpacity(transition)
            });
          }
        });
    }
    }, [map, chapterData, onMarkerCoordsChange, showMarkers, toggleLayer]);

  const chapters = chapterData.map((record: Chapter, idx: number) => <Chapter
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