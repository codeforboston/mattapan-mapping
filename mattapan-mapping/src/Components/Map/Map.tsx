import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "./Map.module.css";

import AudioMapPoints from "../../assets/audio/audio_map_points.json";
import Mic from "../../assets/mapIcons/mic-fill.svg";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 42.2819229,
    longitude: -71.0849532,
    zoom: 13,
    width: "50vw",
    height: "80vh",
  });

  return (
    <div className={styles.Map}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/smithwebtek/ckqk5ktyu15no17o62u1pjb8n"
      >
        {AudioMapPoints.features.map((audio) => (
          <Marker
            key={audio.properties.id}
            latitude={audio.geometry.coordinates[1]}
            longitude={audio.geometry.coordinates[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img className={styles.markerImg} src={Mic} alt="microphone" />
          </Marker>
        ))}
        )
      </ReactMapGL>
    </div>
  );
}
