import styled from '@emotion/styled';

const Card = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: transform ease 0.2s;
`;

const PersonaImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all ease 0.5s;
  z-index: 2;

  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: 3;
    transition: all ease 0.5s;
  }

  &:hover::before {
    opacity: 0.8;
  }

  > span {
    color: ${ props => props.theme.colors.white };
    font-family: ${ props => props.theme.fonts.body };
    font-size: ${ props => props.theme.fonts.fontSize.title };
    text-align: center;
    z-index: 5;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LongTermResidentCard = styled(PersonaImage)`
  background-image: url('https://tinyurl.com/3bc3dt9k');
  background-position: right;

  &::before {
    background-color: ${ props => props.theme.colors.peach };
  }
`;

const PolicyMakerCard = styled(PersonaImage)`
  background-image: url('https://tinyurl.com/vra4p6bs');
  background-position-x: 22%;
  
  &::before {
    background-color: ${ props => props.theme.colors.brown };
  }
`;

const StudentResearcherCard = styled(PersonaImage)`
  background-image: url('https://tinyurl.com/348m25rt');
  background-position-x: 35%;

  &::before {
    background-color: ${ props => props.theme.colors.blue };
  }
`;


export const PersonaCard = ({ persona }: { persona: string }) => {
  if (persona === 'longTermResident') {
    return (
      <Card href='#longtermresident'>
        <LongTermResidentCard> 
          <span>Longterm Residents</span>
        </LongTermResidentCard>
      </Card>
    )
  };

  if (persona === 'policyMaker') {
    return (
      <Card href='#policymaker'>
        <PolicyMakerCard>
          <span>Policy Makers</span>
        </PolicyMakerCard>
      </Card>
    );
  }

  if (persona === 'studentResearcher') {
    return (
      <Card href='#studentresearcher'>
        <StudentResearcherCard>
          <span>Student Researchers</span>
        </StudentResearcherCard>
      </Card>
    )
  }

  return null
}
