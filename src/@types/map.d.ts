interface MapProps {
    data: GeoJson;
    dataLayer?: MapLayer;
    startingCoordinates?: { lat: number, lng: number };
    mapStyle?: string;
    children?: React.ReactChild;
}

interface MapLayer {
    id: string;
    source?: string;
    type: 'fill' | 'line' | 'symbol' | 'circle' | 'heatmap' | 'fill-extrusion' | 'raster' | 'hillshade' | 'background' | 'sky';
    paint: { [key: string]: any };
}

interface GeoJson {
    [key: 'type']: string;
    [key: 'geometry']: GeoJsonGeometry;
    [key: 'properties']: { [key: string]: string | { [key: string]: string } }
}

interface GeoJsonGeometry {
    [key: 'type']: string;
    [key: 'coordinates']: number[] | number[][];
}

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
