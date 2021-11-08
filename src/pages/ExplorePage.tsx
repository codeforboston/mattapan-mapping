import { MapContainer } from '@/atoms/MapAtoms';
import { Map } from '@/organisms/Map';
import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning } from '@/data/GreaterMattapanZoning';

export const dataLayer = {
  id: 'data',
  type: 'line',
  paint: {
    'line-color': 'yellow',
  }
};

// const mapData= MattapanZoningSubdistrictsData()
// each data source needs a data layer
// you can just add multiple <Source><Layer/></Source> as children nodes in the map element
// honestly having an inhouse generic map component doesn't really make sense

export default function ExplorePage() {
  return (
    <MapContainer>
      <Map data={ GreaterMattapanZoning } dataLayer={ dataLayer } mapStyle={ Theme.map.dark } />
    </MapContainer>
  )
}
