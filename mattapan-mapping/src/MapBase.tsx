import { FeatureCollection, GeoJsonProperties, Geometry, LineString } from 'geojson';
import * as React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import ReactMapGL, {Source, Layer, LayerProps} from 'react-map-gl';
import { inflateRawSync } from 'zlib';
import { blue_hill_ave_corridor, larger_area } from './blueHillCorridor';

const getCoordinates = (jsonAlias: any) : number[][] => {
  return jsonAlias.features[0].geometry.coordinates[0];
}

const getStartCoordinates = (jsonAlias: any) : number[] => {
  return getCoordinates(jsonAlias)[0];
}

const smallLat : number = getStartCoordinates(blue_hill_ave_corridor)[0];
const smallLong : number = getStartCoordinates(blue_hill_ave_corridor)[1];

const geojsonInit : FeatureCollection<Geometry, GeoJsonProperties>= {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature', 
      geometry: {
        type: 'LineString', 
        coordinates: []
      }
    }
  ]
};

const geojsonLargeInit : FeatureCollection<Geometry, GeoJsonProperties>= {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature', 
      geometry: {
        type: 'LineString', 
        coordinates: []
      }
    }
  ]
};

const layerStyle : LayerProps = {
  id: 'line-animation',
  type: 'line',
  layout: {
    'line-cap': 'round',
    'line-join': 'round'
  },
  paint: {
    'line-color': '#ED5D31',
    'line-width': 5
  }
};

const largeLayerStyle : LayerProps = {
  id: 'large-line-animation',
  type: 'line',
  layout: {
    'line-cap': 'round',
    'line-join': 'round'
  },
  paint: {
    'line-color': '#FEC0AA',
    'line-width': 5
  }
};

function MapBase(props: any) {
  const [viewport, setViewport] = React.useState({
    longitude: -71.092281,
    latitude: 42.291346,
    zoom: 11
  });
  
  const [geojson, setGeoJson] = React.useState(geojsonInit);
  const [geojsonLarge, setLargeGeoJson] = React.useState(geojsonLargeInit);
  const countRef = useRef(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(countRef.current <= 4) {
        setGeoJson(geo => geo = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature', 
              geometry: {
                type: 'LineString', 
                coordinates: [...(geo.features[0].geometry as any).coordinates,
                [getCoordinates(blue_hill_ave_corridor)[countRef.current][0], getCoordinates(blue_hill_ave_corridor)[countRef.current][1]]]
              }
            }
          ]
        });

        setLargeGeoJson(geo => geo = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature', 
              geometry: {
                type: 'LineString', 
                coordinates: [...(geo.features[0].geometry as any).coordinates,
                [getCoordinates(larger_area)[countRef.current][0], getCoordinates(larger_area)[countRef.current][1]]]
              }
            }
          ]
        });

        countRef.current++;
      } else {
        setGeoJson(geo => geo = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature', 
              geometry: {
                type: 'LineString', 
                coordinates: []
              }
            }
          ]
        });

        setLargeGeoJson(geo => geo = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature', 
              geometry: {
                type: 'LineString', 
                coordinates: []
              }
            }
          ]
        });

        countRef.current = 0;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
      <Source id="animatedSource" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      <Source id="largeAnimatedSource" type="geojson" data={geojsonLarge}>
        <Layer {...largeLayerStyle} />
      </Source>
    </ReactMapGL>
  );
}

export default MapBase;