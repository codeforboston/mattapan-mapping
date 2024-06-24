import styled from '@emotion/styled';
import { Theme } from '@/theme/Theme';
import { StyledLink } from '@/atoms/HeaderAtoms';

const LandingGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: ${ props => props.theme.spacing.m };
  row-gap: ${ props => props.theme.spacing.m };
  background: radial-gradient(silver, transparent 60%);

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: ${ props => props.theme.spacing.l };
    row-gap: ${ props => props.theme.spacing.l };
  }
`

const CardContainer = styled.div<{ color: string }>`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;

  &:hover {
    .card-image {
      transform: scale(1);
    }
    .card-info {
      transform: translateY(-100%);
    }
  }
`;

const CardImage = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  transform: scale(0.8);
  transition: transform 0.2s ease-in;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 24px 0 black;
`;

const CardTitle = styled.span`
  position: absolute;
  color: white;
  transform: translateY(-50%);
  top: 50%;
  left: 8px;
  font-size: 48px;
  font-family: ${ props => props.theme.fonts.fontFamily.header };
  z-index: 4;
  text-shadow: 0 0 2px black;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    font-size: 48px;
  }
`;

// const CardInfo = styled.div`
//   height: 50%;
//   width: 100%;
//   transform: translateY(150%);
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #F2F2F2;
//   transition: transform ease-out 0.6s;
// `;

// const InfoText = styled.div`
//   color: black;
//   font-family: ${ props => props.theme.fonts.primary };
//   font-size: ${ props => props.theme.fonts.fontSize.regular };
// `;

const LandingCard = ( { children, color, src, title } : { children: string; color: string; src: string; title: string }) => {
  return (
    <CardContainer color={ color }>
      <CardTitle>{ title }</CardTitle> 
      <CardImage className='card-image' src={ src } />
      {/* <CardInfo className='card-info'><InfoText>{ children }</InfoText></CardInfo> */}
    </CardContainer>
  )
}

const LandingCardLink = ({ href, color, src, title, children }: { href: string; color: string; src: string; title: string; children: string; }) => {
  return (
    <StyledLink to={href}><LandingCard title={title} color={color} src={src} children={children} ></LandingCard></StyledLink>
  )
}

export const LandingGrid = () => {
  return (
    <LandingGridContainer>
      <LandingCardLink href="/about" title='About' color={Theme.colors.blue} src={process.env.PUBLIC_URL + 'assets/about.jpg'}>More info on About</LandingCardLink>
      <LandingCardLink href="/explore" title='Explore' color={Theme.colors.peach} src={process.env.PUBLIC_URL + 'assets/explore.jpg'}>More info on Explore</LandingCardLink>
      <LandingCardLink href="/meet" title='Meet' color={Theme.colors.teal} src={process.env.PUBLIC_URL + 'assets/meet.jpg'}>Meet</LandingCardLink>
      <LandingCardLink href="/share" title='Share' color={Theme.colors.orange} src={process.env.PUBLIC_URL + 'assets/share.jpg'}>More info on Share</LandingCardLink>
      <LandingCardLink href="/getInvolved" title='Get Involved' color={Theme.colors.red} src={process.env.PUBLIC_URL + 'assets/Harvest_River_Bridge.jpg'}>More info on Get Involved</LandingCardLink>
      <LandingCardLink href="/contact" title='Contact Us?' color={Theme.colors.brown} src={process.env.PUBLIC_URL + 'assets/unibank.jpg'}>More info on Contact Us?</LandingCardLink>
    </LandingGridContainer>
  )
}
