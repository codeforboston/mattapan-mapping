import React from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { MapContext } from 'react-map-gl';
import { Chapter, Footer} from '@/atoms/MapStoryAtoms';
import { NarrativeMenu } from '@/organisms/NarrativeMenu';
import styled from '@emotion/styled';

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

export function Story({ onMarkerCoordsChange, chapterData, headerTitle, headerSubtitle, headerByline, footerHtml, showMarkers, toggleLayer }: StoryProps) {
  const [activeStep, setActiveStep] = React.useState('');

  const { map } = React.useContext(MapContext);
  const [mapRef, setMapRef]: [any, React.Dispatch<React.SetStateAction<any>>] = React.useState(map.current);

  const StyledHeader = styled.header`
  margin: auto;
  width: 100%;
  position: relative;
  z-index: 5;
  `

  React.useEffect(() => {
    setMapRef(map?.current?.getMap());
  }, [map])

  function getLayerPaintType(layer: string) {
    if (mapRef) {
      const layerType: Layer = mapRef.getLayer(layer)?.type;
      
      return layerTypes[layerType];
    }
  }

  function setLayerOpacity({ layer, duration, opacity }: { layer: string, duration: number, opacity: number }) {
    if (mapRef) {
      const paintProps = getLayerPaintType(layer);
      paintProps?.forEach(function(prop) {
        let options = {};
        if (duration) {
          const transitionProp = `${prop}-transition`;
          options = { 'duration': duration };
          mapRef.setPaintProperty(layer, transitionProp, options);
        }
        mapRef.setPaintProperty(layer, prop, opacity, options);
      });
    }
  }

  const onStepEnter = ({ data }: { data: string }) => {
    setActiveStep(data);
    const chapter = chapterData.find((chap: Chapter) => chap.id === data);
    
    if (mapRef) {
      mapRef[chapter.mapAnimation || 'flyTo'](chapter.location);
    }
      
    if (showMarkers) {
      onMarkerCoordsChange(chapter.location.center);
    }

    if (chapter.onChapterEnter.length > 0) {
      chapter.onChapterEnter.forEach((transition: ChapterTransition) => {
        toggleLayer(transition.layer);
        setLayerOpacity(transition)
      });
    }
  
    if (chapter.callback) {
      // window[chapter.callback]();
    }
  
    if (chapter.rotateAnimation && mapRef) {
      mapRef.once('moveend', () => {
        const rotateNumber = mapRef.getBearing();
        mapRef.rotateTo(rotateNumber + 180, {
          duration: 30000, easing: function (t: number) {
            return t;
          }
        });
      });
    }
  }

  const onStepExit = ({ data }: { data: string }) => {
    const chapter = chapterData.find((chap: Chapter) => chap.id === data);
    if (chapter.onChapterExit.length > 0) {
      chapter.onChapterExit.forEach((transition: ChapterTransition) => {
        toggleLayer(transition.layer);
        setLayerOpacity(transition)
      });
    }
  };


  const chapters = chapterData.map((record: Chapter, idx: number) => (
    <Step data={record.id} key={record.id}>
      {/* Need to wrap React components in div to use as children */}
      <div> 
        <Chapter
          id={record.id}
          key={record.id}
          title={record.title}
          content={record.description}
          image={record.image}
          alignment={alignments[record.alignment] || 'centered'}
          hidden={record.hidden}
          isActive={record.id === activeStep}
          />
      </div>
    </Step>
  ));

  return (
    <div id="story">
      {/* <Header title={headerTitle} subtitle={headerSubtitle} byline={headerByline} /> */}
      <div id="menu">
        <StyledHeader>
          <NarrativeMenu style={{width: "100%", height: "50%"}}></NarrativeMenu>
        </StyledHeader>
      </div>
      <div id='features' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        offset={0.5}
        >
        {chapters}
      </Scrollama>
      </div>  
      <Footer footerHtml={footerHtml} />
    </div>
  )
}