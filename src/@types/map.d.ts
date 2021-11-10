interface MapProps {
    startingCoordinates?: { lat: number, lng: number };
    mapStyle?: string;
    children?: React.ReactChild;
}

type MapLayer = LayerProps;
type MapGeoJsonData = Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;

interface MapGeoJson {
    data: MapGeoJsonData;
    id: string;
    type: string;
    color: string;
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
