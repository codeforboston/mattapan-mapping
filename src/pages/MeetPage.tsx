import StandardLayout from "@/templates/StandardLayout"
import styled from "@emotion/styled";
import { CommunityVideoComponent } from "@/organisms/CommunityVideo" 
import { CommunityVideos, CommunityVideo } from "@/data/CommunityVideos"
import { useState } from "react";;

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
    <StandardLayout>
      <CommunityVideoContainer>
      {
        [...CommunityVideos].map((video: CommunityVideo, index: number) => {
          return <CommunityVideoComponent
            key={index}
            id={index}
            loop={selectedVideo === -1 || selectedVideo === index} 
            src={video.src}
            speakerName={video.name}
            transcript={video.transcript}
            autoplay={selectedVideo === -1 || selectedVideo === index}
            muted={selectedVideo !== index}
            onVideoClickHander={onVideoClickPauseVideos}
          ></CommunityVideoComponent>
        })
      }
      </CommunityVideoContainer>
    </StandardLayout>
  )
}
