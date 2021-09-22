import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styled from '@emotion/styled';
mapboxgl.accessToken = 'pk.eyJ1IjoibGF1ZGlja3NvbiIsImEiOiJja3RrYXpiajIwbXo1MnZxem94Z2toMjQzIn0.5WitslZwklYGvH8Rh7FuEw';

const MapContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: ${props => props.theme.spacing.l} 0;
	height: 50vh;
	width: 80vw;

	> .map {
		height: 100%;
		overflow: visible;
		width: 70%;
	}
`;

export default function Map() {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<mapboxgl.Map | null>(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		if (map && !map.current && mapContainer && mapContainer.current) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [lng, lat],
				zoom: zoom
			});
		}
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		if (map && map.current) {
			map.current.on('move', () => {
				if (map.current) {
					setLng(Number(map.current.getCenter().lng.toFixed(4)));
					setLat(Number(map.current.getCenter().lat.toFixed(4)));
					setZoom(Number(map.current.getZoom().toFixed(2)));
				}
			});
		}
	});

	return (
		<MapContainer>
			<div ref={mapContainer} className="map" />
		</MapContainer>
	);
}
