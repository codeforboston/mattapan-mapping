import styled from '@emotion/styled';

import { BannerTitle, BannerStat, BannerSubtitle } from '../atoms/BannerAtoms'

const BannerPartContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${ props => props.theme.spacing.m };
`

export const BannerContainer = styled.span`
    display: flex;
    justify-content: space-around;
    margin: 0 ${ props => props.theme.spacing.m };
`;

export const BannerPart = ({ title, stat, statColor='black', children }: { title?: boolean, stat?: string; statColor?: string; children: string }) => {
    if (title) {
        return(<BannerTitle>{ children }</BannerTitle>);
    }

    return (
        <BannerPartContainer>
            <BannerStat color={ statColor }>{ stat }</BannerStat>
            <BannerSubtitle>{ children }</BannerSubtitle>
        </BannerPartContainer>
    );
}
