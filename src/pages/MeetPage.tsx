import StandardLayout from "@/templates/StandardLayout"
import styled from "@emotion/styled";
import { CommunityVideoComponent } from "@/organisms/CommunityVideo" 
import { useState } from "react"
import { useCommunityVideosQuery } from "@/graphql/generated"


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
  const { data, loading, error } = useCommunityVideosQuery();
  const [selectedVideo, onSelectedVideo] = useState(-1);
  
  function onVideoClickPauseVideos(id: number) {
    onSelectedVideo(id);
  }

  return (
    <StandardLayout>
      <CommunityVideoContainer>
      {
        loading ? <span>Loading</span> :
        error ? <span>Error</span> :
        data === undefined ? <span>There's no video...</span> :
        data.Videos.map(({ id: index, name, src, transcript }) => {
          return <CommunityVideoComponent
            key={index}
            id={index}
            loop={selectedVideo === -1 || selectedVideo === index} 
            src={src}
            speakerName={name}
            transcript={transcript || "No description."}
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
