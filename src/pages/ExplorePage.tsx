import { Map, MapSource, MapContainer } from '@/atoms/MapAtoms';
import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning as GreaterMattapanZoningData } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor as BlueHillAveCorridorData } from '@/data/BlueHillAveCorridor';

const GreaterMattapanZoningLayer: MapLayer = {
  id: 'greaterMattapanZoning',
  type: 'line',
  paint: {
    'line-color': 'yellow',
  }
};

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
