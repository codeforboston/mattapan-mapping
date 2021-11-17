import StandardLayout from '@/templates/StandardLayout';
import { Map, MapGeoJsonSource, MapContainer } from '@/atoms/MapAtoms';
import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning as GreaterMattapanZoningData } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor as BlueHillAveCorridorData } from '@/data/BlueHillAveCorridor';

const GreaterMattapanZoningLayer = () => (
  <MapGeoJsonSource
    data={ GreaterMattapanZoningData }
    id='blueHillAveCorridor'
    type='line'
    color={ Theme.colors.blue }
  />
);

const BlueHillAveCorridorLayer = () => (
  <MapGeoJsonSource
    data={ BlueHillAveCorridorData }
    id='greaterMattapanZoning'
    type='line'
    color={ Theme.colors.orange }
  />
)

export default function ExplorePage() {
  return (
    <StandardLayout>
      <MapContainer>
        <Map mapStyle={ Theme.map.dark }>
          <>
            <GreaterMattapanZoningLayer />
            <BlueHillAveCorridorLayer />
          </>
        </Map>
      </MapContainer>
    </StandardLayout>
  )
}
