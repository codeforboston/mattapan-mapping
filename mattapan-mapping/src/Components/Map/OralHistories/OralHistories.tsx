import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import AudioMapPoints from "../../../assets/audio/audio_map_points.json";
import Mic from "../../../assets/mapIcons/mic-fill.svg";
import styles from "./OralHistories.module.css";

const OralHistories = () => {
  const [selectedOralHistory, setSelectedOralHistory] = useState(null);

  const audioPoints = AudioMapPoints.features.map((audio, index) => {
    return (
      <div key={audio.properties.id}>
        <Marker
          latitude={audio.geometry.coordinates[1]}
          longitude={audio.geometry.coordinates[0]}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <button
            className={styles.markerBtn}
            onClick={(e) => {
              e.preventDefault();
              setSelectedOralHistory(audio);
            }}
          >
            <img className={styles.markerImg} src={Mic} alt="microphone" />
          </button>
        </Marker>
      </div>
    );
  });

  const popups = () => {
    if (selectedOralHistory) {
      return (
        <Popup
          latitude={selectedOralHistory.geometry.coordinates[1]}
          longitude={selectedOralHistory.geometry.coordinates[0]}
          onClose={() => {
            setSelectedOralHistory(null);
          }}
        >
          <figure>
            <figcaption className={styles.FigCaption}>
              {selectedOralHistory.properties.headline.toString()}
              <p>{selectedOralHistory.properties.interviewee.toString()}</p>
              <p>{selectedOralHistory.properties.location.toString()}</p>
            </figcaption>
            <audio controls src={selectedOralHistory.properties.cloudinary_url}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </Popup>
      );
    }
  };

  return (
    <>
      {audioPoints}
      {popups()}
    </>
  );
};

export default OralHistories;
