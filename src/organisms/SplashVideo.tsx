import styled from '@emotion/styled';

const VideoContainer = styled.video`
    width: 100%;
    box-shadow: 0 0 24px 0 black;
    border-radius: 4px;
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
);