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
`;

const CardTitle = styled.span`
  position: absolute;
  color: white;
  transform: translateY(-50%);
  top: 50%;
  left: 8px;
  font-size: 60px;
  font-family: ${ props => props.theme.fonts.badscript };
  z-index: 4;
  text-shadow: 0 0 2px black;
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
//   font-family: ${ props => props.theme.fonts.dm };
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

export const LandingGrid = () => {
  return (
    <LandingGridContainer>
      <LandingCard title='About' color={ Theme.colors.blue } src='https://miro.medium.com/max/1838/1*BC6WfcrUboUP3MK_fP_0uw.jpeg'>More info on About</LandingCard>
      <LandingCard title='Explore' color={ Theme.colors.peach } src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Frog_on_palm_frond.jpg'>More info on Explore</LandingCard>
      <LandingCard title='Meet' color={ Theme.colors.teal } src='https://media.wired.com/photos/5cdefb92b86e041493d389df/191:100/w_1280,c_limit/Culture-Grumpy-Cat-487386121.jpg'>Meet</LandingCard>
      <LandingCard title='Share' color={ Theme.colors.orange } src='https://tinyurl.com/uvc9yter'>More info on Share</LandingCard>
      <LandingCard title='Get Invovled' color={ Theme.colors.red } src='http://cdn.cnn.com/cnnnext/dam/assets/210715140819-05-modernist-pizza-travel-restricted.jpg'>More info on Get Invovled</LandingCard>
      <LandingCard title='Contact Us?' color={ Theme.colors.brown } src='https://nickpassey.com/wp-content/uploads/2016/10/Featured.jpg'>More info on Contact Us?</LandingCard>
    </LandingGridContainer>
  )
}
