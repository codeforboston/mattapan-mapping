interface MapStoryProps {
    startingCoordinates?: { lat: number, lng: number };
    mapStyle?: string;
    interactive?: booolean;
    children?: React.ReactChild | React.ReactChild[];
    mapRef?: MapRef
}
interface ChapterProps {
  id: string,
  content: string,
  title: string,
  image: string,
  isActive: boolean,
  hidden: boolean,
  alignment: string
}

interface HeaderProps {
  title: string,
  subtitle: string,
  byline: string,
}

interface StoryProps {
  onMarkerCoordsChange: any, // FIXME: function
  toggleLayer: any, // FIXME: function
  chapterData: any
  headerTitle: string
  headerSubtitle: string
  headerByline: string
  footerHtml: string
  showMarkers: boolean
}

type Alignment = 'left' | 'right' | 'center' | 'full';

type Layer = 'fill' | 'line' | 'circle' | 'symbol' | 'raster' | 'fill-extrusion' | 'heatmap';

interface ChapterTransition {
  layer: string,
  opacity: number
  duration: number
}

interface Chapter {
  id: string,
      alignment: Alignment,
      hidden: false,
      title: string,
      image: string,
      description: string,
      location: {
        center: [longitude: number, latitude: number],
        zoom: number,
        pitch: number,
        bearing: number,
      },
      mapAnimation: string, // TODO: enum?
      rotateAnimation: boolean,
      callback: string, // TODO: function?
      onChapterEnter: ChapterTransition[],
      onChapterExit: ChapterTransition[]
}


interface Config {
  style: string
  accessToken: string
  showMarkers: boolean
  markerColor: string
  projection: string
  inset: boolean
  theme: string
  use3dTerrain: boolean
  title: string
  subtitle: string
  byline: string
  footer: string
  chapters: Chapter[]
}