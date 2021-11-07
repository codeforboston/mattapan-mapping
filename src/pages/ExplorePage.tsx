import { MapContainer } from '@/atoms/MapAtoms';
import { Map } from '@/organisms/Map';
import { Theme } from '@/theme/Theme';
// import MattapanZoningSubdistrictsData from '@/data/MattapanZoningSubdistricts';
import { GreaterMattapanZoning } from '@/data/GreaterMattapanZoning';

const paintGenerator = () => {
	const paintArray: (string|number|string[])[] = [...Array(54).keys()];
	const arrayWithColor = paintArray.map(x => [x, generateColor()])
	const flattened = arrayWithColor.flat();
	flattened.unshift('match', ['get', 'FID']);
	flattened.push('blue');

	return flattened
}

const generateColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

export const dataLayer: MapLayer = {
  id: 'data',
  type: 'line',
  paint: {
    'fill-color': paintGenerator(),
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      .8,
      0.5
  ]
  }
};

// const mapData= MattapanZoningSubdistrictsData()

export default function ExplorePage() {
  return (
    <MapContainer>
      <Map data={ GreaterMattapanZoning } dataLayer={ dataLayer } mapStyle={ Theme.map.dark } />
    </MapContainer>
  )
}
