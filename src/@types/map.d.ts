interface MapProps {
    // data: string | Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties> | undefined;
    // dataLayer?: LayerProps;
    startingCoordinates?: { lat: number, lng: number };
    mapStyle?: string;
    children?: React.ReactChild;
}

type MapLayer = LayerProps;
type MapData = Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;

interface MapStyles {
    street: 'mapbox://styles/mapbox/streets-v11';
    outdoor: 'mapbox://styles/mapbox/outdoors-v11';
    light: 'mapbox://styles/mapbox/light-v10';
    dark: 'mapbox://styles/mapbox/dark-v10';
    satellite: 'mapbox://styles/mapbox/satellite-v9';
    satelliteStreet: 'mapbox://styles/mapbox/satellite-streets-v11';
    navigationDay: 'mapbox://styles/mapbox/navigation-day-v1';
    navigationNight: 'mapbox://styles/mapbox/navigation-night-v1';
}
