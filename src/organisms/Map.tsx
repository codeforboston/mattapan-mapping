import * as React from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import { Theme } from '@/theme/Theme';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ENV;

export const Map = ({ data, dataLayer, startingCoordinates, mapStyle }: MapProps) => {
  const [viewport, setViewport] = React.useState({
    latitude: startingCoordinates?.lat ?? 42.28,
    longitude: startingCoordinates?.lng ?? -71.088,
    zoom: 13,
    width: '100%',
    height: '100%'
  });

  return (
    <ReactMapGL
      { ...viewport }
      mapboxApiAccessToken={ MAPBOX_TOKEN }
      onViewportChange={ (viewport: any) => {
        setViewport(viewport);
      } }
      mapStyle={ mapStyle ?? Theme.map.light }
    >
      <Source type='geojson' data={ data }>
        <Layer { ...dataLayer }/>
      </Source>
    </ReactMapGL>
  )
};
