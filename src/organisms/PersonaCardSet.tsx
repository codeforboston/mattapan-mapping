import styled from '@emotion/styled';
import { PersonaCard } from '@/molecules/PersonaCard';

const PersonaCardContainer = styled.div`
  display: flex;
  padding-top: 100px;
  height: calc(100vh - 100px);
`;

export const PersonaCardSet = () => (
  <PersonaCardContainer>
    <PersonaCard persona='longTermResident' />
    <PersonaCard persona='policyMaker' />
    <PersonaCard persona='studentResearcher' />
  </PersonaCardContainer>
);
