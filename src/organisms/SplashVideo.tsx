import styled from '@emotion/styled';

const VideoContainer = styled.video`
    height: 100%;
    width: 100%;
    z-index: 1;
`;


export const SplashVideo = () => (
    <VideoContainer
        autoPlay
        muted
        loop
        preload='auto'
        playsInline
        src='https://assets.mixkit.co/videos/preview/mixkit-daytime-city-traffic-aerial-view-56-large.mp4'
    />
)
