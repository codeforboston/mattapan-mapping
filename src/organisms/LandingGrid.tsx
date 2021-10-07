import styled from '@emotion/styled';
import { Theme } from '../theme/Theme';

const LandingGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: ${ props => props.theme.spacing.l };
  row-gap: ${ props => props.theme.spacing.l };
  max-width: 80%;
  margin: 24px auto;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const CardContainer = styled.div<{ color: string }>`
  width: 100%;
  height: 500px;
  position: relative;

  &:hover {
    .card-image {
      transform: scale(1);
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
`;

const CardTitle = styled.span`
  position: absolute;
  color: white;
  transform: translateY(-50%);
  top: 50%;
  font-size: 60px;
  font-family: ${ props => props.theme.fonts.badscript };
  z-index: 4;
  text-shadow: 0 0 2px black;
`;

const LandingCard = ( { children, color, src } : { children: string; color: string; src: string }) => {
  return (
    <CardContainer color={ color }>
      <CardTitle>{ children }</CardTitle> 
      <CardImage className='card-image' src={ src } />
    </CardContainer>
  )
}

export const LandingGrid = () => {
  return (
    <LandingGridContainer>
      <LandingCard color={ Theme.colors.blue } src='https://miro.medium.com/max/1838/1*BC6WfcrUboUP3MK_fP_0uw.jpeg'>About</LandingCard>
      <LandingCard color={ Theme.colors.peach } src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg'>Explore</LandingCard>
      <LandingCard color={ Theme.colors.teal } src='https://media.wired.com/photos/5cdefb92b86e041493d389df/191:100/w_1280,c_limit/Culture-Grumpy-Cat-487386121.jpg'>Meet</LandingCard>
      <LandingCard color={ Theme.colors.orange } src='https://tinyurl.com/uvc9yter'>Share</LandingCard>
      <LandingCard color={ Theme.colors.red } src='http://cdn.cnn.com/cnnnext/dam/assets/210715140819-05-modernist-pizza-travel-restricted.jpg'>Get Invovled</LandingCard>
      <LandingCard color={ Theme.colors.brown } src='https://nickpassey.com/wp-content/uploads/2016/10/Featured.jpg'>Contact Us?</LandingCard>
    </LandingGridContainer>
  )
}
