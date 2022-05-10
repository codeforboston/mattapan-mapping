interface MapProps {
    startingCoordinates?: { lat: number, lng: number };
    mapStyle?: string;
    interactive?: booolean;
    children?: React.ReactChild | React.ReactChild[];
    ref?: MapRef
}

interface MapBaseStyles {
    street: 'mapbox://styles/mapbox/streets-v11';
    outdoor: 'mapbox://styles/mapbox/outdoors-v11';
    light: 'mapbox://styles/mapbox/light-v10';
    dark: 'mapbox://styles/mapbox/dark-v10';
    satellite: 'mapbox://styles/mapbox/satellite-v9';
    satelliteStreet: 'mapbox://styles/mapbox/satellite-streets-v11';
    navigationDay: 'mapbox://styles/mapbox/navigation-day-v1';
    navigationNight: 'mapbox://styles/mapbox/navigation-night-v1';
}

type MapLayer = LayerProps;
type GeoJson = Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;

interface GeoJsonMeta {
    id: string
    file: string;
    color: Omit<Colors>;
    visible: boolean;
}

interface MapGeoJsonData {
    data: GeoJson;
    id: string;
    type: string;
    name: string;
    color: Omit<Colors>;
    visible: boolean;
}

interface FeatureToggleState {
    [index: string]: boolean;
}

interface ToggleList {
    [index: id]: string;
    [index: name]: string;
}

interface TogglePanel {
    data: MapGeoJsonData[];
    toggleState: FeatureToggleState;
    toggleHandler: (id: string) => void
}
