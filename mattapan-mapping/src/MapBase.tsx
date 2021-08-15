import React from 'react';
import ReactMapboxGl, { Layer, Feature, Source } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from 'jquery';


export default class MapBase extends React.Component<{}, {geojson:any}>{
  constructor(props: any){
    super(props);
    this.state = {
      geojson: {
      'type': 'FeatureCollection',
      'features': [{
          'type': 'Feature',
          'geometry': {
              'type': 'LineString',
              'coordinates': [
                  [0, 0]
              ]
          }
        }]
      } 
    }
  }
  render(){
    const Map = ReactMapboxGl({
      accessToken:
        'pk.eyJ1Ijoic2hheW1tY2Rvbm91Z2giLCJhIjoiY2txbGg1aGVyMDNwdDJ1bzh6NmswMGJqMSJ9.PdmrnSjNMzm37teQx7bAOw'
    });

    let mapContainer: any;
    debugger;
    const map = (
        <Map
            ref = {el => {mapContainer = el}}
            //// eslint-disable-next-line
            style={`mapbox://styles/mapbox/streets-v9`}
            containerStyle={{
            height: '100vh',
            width: '100vw'
            }}
        >
        <Layer type="symbol" id="sm-marker" layout={{ 'icon-image': 'amusement-park-15' }}>
            <Feature coordinates={[-71.0995187, 42.277739]} />
            <Source id='animation-source' source={this.state.geojson} type='geojson'>
              <Layer id='geo-json-line' type='line'></Layer>
            </Source>
        </Layer>
      </Map>
    );
    return map;
  }
}
