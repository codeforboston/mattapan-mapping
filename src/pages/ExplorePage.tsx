import { Map, MapSource, MapContainer } from '@/atoms/MapAtoms';
import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor } from '@/data/BlueHillAveCorridor';

const GreaterMattapanZoningData = GreaterMattapanZoning;
const GreaterMattapanZoningLayer: MapLayer = {
  id: 'greaterMattapanZoning',
  type: 'line',
  paint: {
    'line-color': 'yellow',
  }
};

const BlueHillAveCorridorData = BlueHillAveCorridor;
const BlueHillAveCorridorLayer: MapLayer = {
  id: 'blueHillAveCorridor',
  type: 'line',
  paint: {
    'line-color': 'orange',
  }
};

export default function ExplorePage() {
  return (
    <MapContainer>
      <Map mapStyle={ Theme.map.dark }>
        <>
          <MapSource data={ GreaterMattapanZoningData } layer={ GreaterMattapanZoningLayer } />
          <MapSource data={ BlueHillAveCorridorData } layer={ BlueHillAveCorridorLayer} />
        </>
      </Map>
    </MapContainer>
  )
}
