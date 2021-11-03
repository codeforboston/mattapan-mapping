import styled from '@emotion/styled';
import { HeaderTitle, ExternalLink } from '@/atoms/HeaderAtoms';
import { PowerfulPathwaysLogo, CFBLogo, LogoContainer } from '@/atoms/Logos';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 100%;
  align-items: center;
  width 100%;
  background-color: #4c4141;
  
  .footer {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		max-width: 1600px;
  }

  span {
    font-family: ${ props => props.theme.fonts.primary };
    color: ${ props => props.theme.colors.white };
  }
`;

const FooterSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer'>
        <HeaderTitle>Mattapan Boston</HeaderTitle>
        <FooterSubContainer>
            <LogoContainer>
                <ExternalLink href='https://powerfulpathways.org/' ><PowerfulPathwaysLogo /></ExternalLink> |
                <ExternalLink href='https://www.codeforboston.org/' ><CFBLogo /></ExternalLink>
            </LogoContainer>
        </FooterSubContainer>
        <FooterSubContainer>
          <span>About</span>
          <span>Contact</span>
          <span>Donate</span>
        </FooterSubContainer>
        <FooterSubContainer>
          <span>For Media</span>
          <span>Careers</span>
          <span>Newsletter</span>
        </FooterSubContainer>
      </div>
    </FooterContainer>
  )
}
