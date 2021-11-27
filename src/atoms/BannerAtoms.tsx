import styled from '@emotion/styled';

export const BannerTitle = styled.span`
    font-family: ${ props => props.theme.fonts.header };
    font-size: ${ props => props.theme.fonts.fontSize.title}
`;

export const BannerStat = styled.span<{ color: string }>`
    font-family: ${ props => props.theme.fonts.body };
    font-size: ${ props => props.theme.fonts.fontSize.title };
    color: ${ props => props.color };
`;

export const BannerSubtitle = styled.span`
    font-family: ${ props => props.theme.fonts.body };
    font-size: ${ props => props.theme.fonts.fontSize.subtitle };
`;
