import { Theme } from "../theme/Theme";
import styled from "@emotion/styled";
import { CommunityVideoComponent } from "@/organisms/CommunityVideo" 
import { CommunityVideos } from "@/data/CommunityVideos"
import { useState } from "react";

// pull in the set of videos at the beginning so webpack 
// can figure out the pathing
const videos = [...CommunityVideos].map((video: any) => {
  let vidModule = undefined;
  try{
     vidModule = require(`../data/videos/${video.src}`);
  }catch(e){ /* do nothing. vidModule is undefined */ }

  return {
    src: vidModule,
    name: video.name,
    transcript: video.transcript
  };
});

// styled video container
const CommunityVideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`

/**
 * 
 * @returns Renders the meet the community page
 */
export default function MeetPage() {
  const [selectedVideo, onSelectedVideo] = useState(-1);
  
  function onVideoClickPauseVideos(id: number) {
    onSelectedVideo(id);
  }

  return (
    <CommunityVideoContainer>
    {
      [...videos].map((video: any, index: number) => {
        return <CommunityVideoComponent
          key={index}
          id={index}
          loop={selectedVideo === -1 || selectedVideo === index} 
          src={video.src?.default}
          speakerName={video.name}
          transcript={video.transcript}
          autoplay={selectedVideo === -1 || selectedVideo === index}
          muted={selectedVideo !== index}
          onVideoClickHander={onVideoClickPauseVideos}
        ></CommunityVideoComponent>
      })
    }
    </CommunityVideoContainer>
  )
}
