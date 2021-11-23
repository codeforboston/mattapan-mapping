import styled from '@emotion/styled';

const GeneralIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${ props => props.theme.spacing.l };
`;

const GeneralIntroTitle = styled.span`
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  font-size: ${ props => props.theme.fonts.fontSize.title };
`;

const GeneralIntroSubtitle = styled.span`
  font-family: ${ props => props.theme.fonts.fontFamily.body };
  font-size: ${ props => props.theme.fonts.fontSize.subtitle };
`;

export const GeneralIntro = () => {
  return (
    <GeneralIntroContainer>
      <GeneralIntroTitle>Mattapan Mapping Project</GeneralIntroTitle>
      <GeneralIntroSubtitle>The Mattapan mapping project is where we can fill in the rest of the content here to help people better understand what the goals of this site are, how to use it, and who the community it is serving</GeneralIntroSubtitle>
    </GeneralIntroContainer>
  )
}
