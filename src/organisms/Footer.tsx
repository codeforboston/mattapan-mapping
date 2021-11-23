import styled from '@emotion/styled';
import { HeaderTitle, ExternalLink } from '@/atoms/HeaderAtoms';
import { PowerfulPathwaysLogo, CFBLogo, LogoContainer } from '@/atoms/Logos';

const FooterContainer = styled.div`
  height: 250px;
  background-color: #4c4141;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* FIXME: also styles HeaderTitle */
  span {
    font-family: ${ props => props.theme.fonts.fontFamily.body };
    color: ${ props => props.theme.colors.white };
  }
`;

const FooterSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer: React.FC<{className?: string}> = function FooterComponent({className}) {
  return (
    <FooterContainer className={className}>
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
    </FooterContainer>
  )
}

export default Footer;
