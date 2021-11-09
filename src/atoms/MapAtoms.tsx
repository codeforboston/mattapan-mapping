import styled from '@emotion/styled';
import * as React from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import { Theme } from '@/theme/Theme';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ENV;

export const Map = ({ startingCoordinates, children, mapStyle }: MapProps) => {
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
      { children }
    </ReactMapGL>
  )
};

export const MapContainer = styled.div`
	position: relative;
  height: 90vh;
	width: 80vw;
	box-shadow: 0 0 2px 2px black;
	margin: 0 auto;
	margin-bottom: 24px;

	.map {
		height: 100%;
		width: 100%;
		overflow: visible;
	}
`;

export const MapTitle = styled.p`
	font-family: ${ props => props.theme.fonts.primary };
	font-size: ${ props => props.theme.fonts.fontSize.subtitle };
	text-align: center;
	margin: 24px auto;
`;

export const MapGeoJsonSource = ({ data, layer }: { data: MapData, layer: MapLayer}) => {
  return (
    <Source type='geojson' data={ data }>
      <Layer { ...layer }/>
    </Source>
  );
}
