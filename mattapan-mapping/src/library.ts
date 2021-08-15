import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

export const onLoad = (map: any) => {
    // Create a GeoJSON source with an empty lineString.
    const geojson = {
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
    };
        
    const load = () => {
        const speedFactor = 30; // number of frames per longitude degree
        let animation; // to store and cancel the animation
        let startTime = 0;
        let progress = 0; // progress = timestamp - startTime
        let resetTime = false; // indicator of whether time reset is needed for the animation
        const animateLine = (timestamp?: any) => {
            if (resetTime) {
                // resume previous progress
                startTime = performance.now() - progress;
                resetTime = false;
            } else {
                progress = timestamp - startTime;
            }

            // restart if it finishes a loop
            if (progress > speedFactor * 360) {
                startTime = timestamp;
                geojson.features[0].geometry.coordinates = [];
            } else {
                const x = progress / speedFactor;
                // draw a sine wave with some math.
                const y = Math.sin((x * Math.PI) / 90) * 40;
                // append new coordinates to the lineString
                geojson.features[0].geometry.coordinates.push([x, y]);
                // then update the map
                map.getSource('line').setData(geojson);
            }
            // Request the next frame of the animation.
            // eslint-disable-next-line
            animation = requestAnimationFrame(animateLine);
        }

        map.addSource('line', {
            'type': 'geojson',
            'data': geojson
        });

        // add the line which will be modified in the animation
        map.addLayer({
            'id': 'line-animation',
            'type': 'line',
            'source': 'line',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-color': '#ed6498',
                'line-width': 5,
                'line-opacity': 0.8
            }
        });

        startTime = performance.now();

        animateLine();
    };

    load();
}