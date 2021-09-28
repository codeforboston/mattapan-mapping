import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 ${ props => props.theme.spacing.xxl };
  align-items: center;
  height: 250px;
  width 100%;
  background-color: grey;
  
  span {
    font-family: ${ props => props.theme.fonts.dm };
    color: ${ props => props.theme.colors.white };
  }
`;


export default function Footer() {
  return (
    <FooterContainer>
      <span>About</span>
      <span>Contact</span>
      <span>Donate</span>
    </FooterContainer>
  )
}
