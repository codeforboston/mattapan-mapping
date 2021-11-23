import styled from '@emotion/styled';

const Text = styled.span<{ color?: string }>`
  color: ${ props => props.color };
`;

export const Headline = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.headline };
`;

export const SubHeadline = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.subHeadline };
`;

export const TitleLarge = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.title };
  font-weight: ${ props => props.theme.fonts.fontWeight.bold };
`;

export const Title = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.title };
`;

export const SubTitle = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.subtitle };
`;

export const BodyLarge = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.body };
  font-size: ${ props => props.theme.fonts.fontSize.large };
`;

export const BodyRegular = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.body };
  font-size: ${ props => props.theme.fonts.fontSize.regular};
`;

export const BodySmall = styled(Text)`
  font-family: ${ props => props.theme.fonts.fontFamily.body };
  font-size: ${ props => props.theme.fonts.fontSize.small };
`;
