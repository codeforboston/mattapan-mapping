import styled from '@emotion/styled';
import { Theme } from '@/theme/Theme';

const LandingGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: ${ props => props.theme.spacing.m };
  row-gap: ${ props => props.theme.spacing.m };
  max-width: 80%;
  margin: 24px auto;

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
  font-family: ${ props => props.theme.fonts.badscript };
  z-index: 4;
  text-shadow: 0 0 2px black;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    font-size: 60px;
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
      <LandingCard title='About' color={ Theme.colors.blue } src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Mattapan_M_Line_Trolley_3254.jpg'>More info on About</LandingCard>
      <LandingCard title='Explore' color={ Theme.colors.peach } src='https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/12/mattapan1.jpg'>More info on Explore</LandingCard>
      <LandingCard title='Meet' color={ Theme.colors.teal } src='https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_748,q_65,w_640,x_836,y_394/v1/clients/boston/Mattapan_KyleKlein_KKP11885_6575163c-84da-4e45-a1a0-e7b1f4724191.jpg'>Meet</LandingCard>
      <LandingCard title='Share' color={ Theme.colors.orange } src='https://i.pinimg.com/originals/b7/20/98/b720983ab02bbdf91e643427d17470cb.jpg'>More info on Share</LandingCard>
      <LandingCard title='Get Invovled' color={ Theme.colors.red } src='https://images1.apartments.com/i2/C-nvX3YH0OZYtCUKBXUSgYr9XOvRY4U8cKwa-F2isvg/111/78-mattapan-st-unit-1-boston-ma-exterior.jpg'>More info on Get Invovled</LandingCard>
      <LandingCard title='Contact Us?' color={ Theme.colors.brown } src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/p960x960/120760232_3847173248643441_4683888836416691032_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=36a2c1&_nc_ohc=CFsgtqppGvcAX_ZnzNE&_nc_ht=scontent-bos3-1.xx&oh=dc1f7a638e4cc2fcf5150610c79d1c42&oe=618D5C99'>More info on Contact Us?</LandingCard>
    </LandingGridContainer>
  )
}
