import styled from "@emotion/styled";

export interface CommunityVideo {
    // The location of the video
    src: string;
    // Determines whether the video should loop
    loop: boolean;
    // The name of the speak in the video
    speakerName: string;
    // The textual content the speaker is sharing in the video
    transcript: string;
    // Determines whether videos should play automatically when the video renders
    autoplay: boolean;
    // Determines whether the video should be muted
    muted: boolean;
    // The unique identifier assigned to the video
    id: number;
    // The call back fired when a video is clicked
    onVideoClickHander: (id: number) => void;
}

// styled container
const CommunityVideoContainer = styled.div`
    width: 100%;

    @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
        flex-grow: 1;
        width: 25%;
        padding: 20px;
        position: relative;
    }`

// styled video player
const CommunityVideoPlayer = styled.video`
    width: 100%;
`

// The callback handler fired when a video is clicked
export const CommunityVideoComponent = (props: CommunityVideo) => {
    /**
     * Manages calling the parent callback when a video is clicked
     */
    function onClickPlayVideo() {
        props.onVideoClickHander(props.id);
    }

    /**
     * Manage resetting the current time of the video when its selected
     * @param video - the video element the user selected
     */
    function handleVideoPlayback(video: HTMLVideoElement){
        if(video != null){
            video.currentTime = 0;
        }
    }

    // the video fragement if there is a src avaliable
    const videoFragment = <>
    <CommunityVideoPlayer onClick={onClickPlayVideo}
        autoPlay={props.autoplay}
        loop={props.loop}
        muted={props.muted}
        ref={handleVideoPlayback}>
            <source src={props.src} type="video/mp4"></source>
        </CommunityVideoPlayer>
        <div className="video-meta">
            <div className="speaker-name">{props.speakerName}</div>
            <div className="transcript">{props.transcript}</div>
        </div>
    </>;
    
    // error state if the src is missing
    const errorState = <div> error </div>; 
    
    return (
        <CommunityVideoContainer>
            {props.src ? videoFragment : errorState}
        </CommunityVideoContainer>
    );
}