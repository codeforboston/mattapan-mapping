import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width 100%;
  background-color: lightgrey;
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
