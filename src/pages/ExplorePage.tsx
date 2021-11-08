import { Map, MapSource, MapContainer } from '@/atoms/MapAtoms';
import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor } from '@/data/BlueHillAveCorridor';

const GreaterMattapanZoningData = GreaterMattapanZoning as MapData;
const GreaterMattapanZoningLayer = {
  id: 'greaterMattapanZoning',
  type: 'line',
  paint: {
    'line-color': 'yellow',
  }
} as MapLayer;

const BlueHillAveCorridorData = BlueHillAveCorridor as MapData
const BlueHillAveCorridorLayer = {
  id: 'blueHillAveCorridor',
  type: 'line',
  paint: {
    'line-color': 'orange',
  }
} as MapLayer;

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
