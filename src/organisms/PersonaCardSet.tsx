import styled from '@emotion/styled';
import { PersonaCard } from '../molecules/PersonaCard';

const PersonaCardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const PersonaCardSet = () => (
  <PersonaCardContainer>
    <PersonaCard persona='longTermResident' />
    <PersonaCard persona='policyMaker' />
    <PersonaCard persona='studentResearcher' />
  </PersonaCardContainer>
);
