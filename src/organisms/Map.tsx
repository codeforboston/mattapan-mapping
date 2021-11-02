import { useRef, useEffect } from 'react';
// @ts-expect-error
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styled from '@emotion/styled';

import MattapanZoningSubdistrictsData from '@/data/MattapanZoningSubdistricts';
import BtdData from '@/data/BTD';
// var mattapanDistricts = require('../data/MattapanZoningSubdistricts.geojson');
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ENV

const MapContainer = styled.div`
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

const MapTitle = styled.p`
	font-family: ${ props => props.theme.fonts.dm };
	font-size: ${ props => props.theme.fonts.fontSize.subtitle };
	text-align: center;
	margin: 24px auto;
`;

const generateColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

const paintGenerator = () => {
	const paintArray: (string|number|string[])[] = [...Array(54).keys()];
	const arrayWithColor = paintArray.map(x => [x, generateColor()])
	const flattened = arrayWithColor.flat();
	flattened.unshift('match', ['get', 'FID']);
	flattened.push('blue');

	return flattened
}

const btdPaint = () => {
	const paintArray: (string|number|string[])[] = [...Array(61).keys()];
	const arrayWithColor = paintArray.map(x => [x, generateColor()])
	const flattened = arrayWithColor.flat();
	flattened.unshift('match', ['get', 'OBJECTID_1']);
	flattened.push('blue');

	return flattened
}

export const Map = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<mapboxgl.Map | null>(null);
	const lng = -71.08;
	const lat = 42.3;
	const zoom = 12;
	const data = BtdData();

	// When adding stuff into the map consider using useState (from mapbox tutorial):
	// const [lng, setLng] = useState(-71.08);
	// const [lat, setLat] = useState(42.271);
	// const [zoom, setZoom] = useState(13);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		if (map && !map.current && mapContainer && mapContainer.current) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/dark-v10',
				center: [lng, lat],
				zoom: zoom
			});

			map.current.addControl(new mapboxgl.NavigationControl());

			map.current.once('load', function () {
				map.current.addSource('mattapan-zones', {
					'type': 'geojson',
					'data': data,
				})

				map.current.addLayer({
					'id': 'district-layer',
					'type': 'line',
					'source': 'mattapan-zones',
					'layout': {},
					'paint': {
							'line-color': btdPaint(),
							'line-opacity': [
									'case',
									['boolean', ['feature-state', 'hover'], false],
									.8,
									0.5
							]
					}
				});
			});
		}
	});

	return (
		<>
			<MapTitle>BTD data</MapTitle>
			<MapContainer>
				<div className='map' ref={mapContainer} />
			</MapContainer>
		</>
	);
}

export const Map2 = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<mapboxgl.Map | null>(null);
	const lng = -71.08;
	const lat = 42.288;
	const zoom = 13;
	const data = MattapanZoningSubdistrictsData();

	// When adding stuff into the map consider using useState (from mapbox tutorial):
	// const [lng, setLng] = useState(-71.08);
	// const [lat, setLat] = useState(42.271);
	// const [zoom, setZoom] = useState(13);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		if (map && !map.current && mapContainer && mapContainer.current) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/light-v10',
				center: [lng, lat],
				zoom: zoom
			});

			map.current.addControl(new mapboxgl.NavigationControl());

			map.current.once('load', function () {
				map.current.addSource('mattapan-zones', {
					'type': 'geojson',
					'data': data,
				})

				map.current.addLayer({
					'id': 'district-layer',
					'type': 'fill',
					'source': 'mattapan-zones',
					'layout': {},
					'paint': {
							'fill-color': paintGenerator(),
							'fill-opacity': [
									'case',
									['boolean', ['feature-state', 'hover'], false],
									.8,
									0.5
							]
					}
				});
			});
		}
	});

	return (
		<>
			<MapTitle>Mattapan districts</MapTitle>
			<MapContainer>
				<div className='map' ref={mapContainer} />
			</MapContainer>
		</>
	);
}
