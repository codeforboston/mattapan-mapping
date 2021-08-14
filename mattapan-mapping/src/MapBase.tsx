import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2hheW1tY2Rvbm91Z2giLCJhIjoiY2txbGg1aGVyMDNwdDJ1bzh6NmswMGJqMSJ9.PdmrnSjNMzm37teQx7bAOw'
  });
  
  function MapBase() {
    return (  
        <Map
            //// eslint-disable-next-line
            style={`mapbox://styles/mapbox/streets-v9`}
            containerStyle={{
            height: '100vh',
            width: '100vw'
            }}
        >
        <Layer type="symbol" id="sm-marker" layout={{ 'icon-image': 'amusement-park-15' }}>
            <Feature coordinates={[-71.0995187, 42.277739]} />
        </Layer>
      </Map>
    );
  }

  export default MapBase;
