import * as React from 'react';
import styled from '@emotion/styled';
import { Headline, BodySmall, SubHeadline, Title } from '@/atoms/Tokens';
import { Theme } from '@/theme/Theme';
import { NARRATIVES } from '@/data/ExplorePageData';
import { TogglePanel } from '@/molecules/TogglePanel';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NarrativeButton = styled.button`
  background: ${ props => props.theme.colors.white };
  border: none;
  border-radius: 4px;
  margin: ${ props => props.theme.spacing.s } 0;
  padding: ${ props => props.theme.spacing.m };
  transition: all ease 0.2s;

  &:hover {
    background: silver;
    color: white;
  }
`;

const NarrativeSelection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NarrativeContainer = styled.div<{ color: string, width: string }>`
  background: ${ props => props.color };
  height: 100vh;
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${ props => props.theme.spacing.l };
  transition: background ease 0.5s;
`;

const NarrativeHeadline = styled(Headline)`
  color: ${ props => props.theme.colors.white };
  text-align: center;
`;

const NarrativeSubHeadline = styled(SubHeadline)`
  padding: ${ props => props.theme.spacing.m } 0;
  color: ${ props => props.theme.colors.white };
  text-align: center;
`;

const SelectedNarrativeTitle = styled(Title)`
  padding: ${ props => props.theme.spacing.m } 0;
  color: ${ props => props.theme.colors.white };
  text-align: center;
`

const Narratives = ({ onNarrativeChange }: { onNarrativeChange: (color: string, name: string) => void }) => {
  let { narrativeStr } = useParams();
  useEffect(() =>{
    const found = NARRATIVES.find(({name, color, visible},i,ar) =>{
      return {color, name};
    })

    // onNarrativeChange(found?.color??'', found?.name??'');
    console.log('found color', found?.color??'')
  },[narrativeStr] );
  return (
    <>
      <NarrativeSubHeadline>Choose a narrative</NarrativeSubHeadline>
      <NarrativeSelection>
        { NARRATIVES.map((narrative: NarrativeType) => (
          <NarrativeButton key={ narrative.name } onClick={ () => onNarrativeChange(narrative.color, narrative.name) }>
            <BodySmall>{ narrative.name }</BodySmall>
          </NarrativeButton>
        )) }
      </NarrativeSelection>
    </>
  );
}

const NarrativePanel = ({ narrativeStr, data, toggleState, toggleHandler, onNarrativeChange }: NarrativePanelType) => {
  if (narrativeStr) {
    return (
      <>
        <SelectedNarrativeTitle>{ narrativeStr }</SelectedNarrativeTitle>
        <NarrativeButton onClick={ () => onNarrativeChange(Theme.colors.peach, '') }>Choose another Narrative</NarrativeButton>
        <TogglePanel data={ data } toggleState={ toggleState } toggleHandler={ toggleHandler } />
      </>
    );
  }

  return (
    <Narratives onNarrativeChange={ onNarrativeChange }/>
  );
}

const NarrativeTopMenuPanel = ({ narrativeStr, data, toggleState, toggleHandler, onNarrativeChange }: NarrativePanelType) => {
  if (narrativeStr) {
    return (
      <>
        <SelectedNarrativeTitle>{ narrativeStr }</SelectedNarrativeTitle>
        <NarrativeButton onClick={ () => onNarrativeChange(Theme.colors.peach, '') }>Choose another Narrative</NarrativeButton>
      </>
    );
  }

  return (
    <Narratives onNarrativeChange={ onNarrativeChange }/>
  );
}

export const ExplorePageNarratives = ({ narrativeStr, data, toggleState, toggleHandler, setNarrative }: ExplorePageSidePanelType) => {
  const [narrativeColor, setNarrativeColor] = React.useState(Theme.colors.peach);
  
  const onNarrativeChange = (selectedNarrativeColor: string, selectedNarrative: string) => {
    setNarrativeColor(selectedNarrativeColor);debugger
    setNarrative(selectedNarrative)
  };
  
  return (
    <NarrativeContainer color={ narrativeColor } width={ '550px' }>
      <NarrativeHeadline color={ Theme.colors.white }>EXPLORE</NarrativeHeadline>
      <NarrativePanel narrativeStr={ narrativeStr } data={ data } toggleState={ toggleState } toggleHandler={ toggleHandler } onNarrativeChange={ onNarrativeChange }/>
    </NarrativeContainer>
  )
};

export const NarrativeTopPanel = ({ narrativeStr, data, toggleState, toggleHandler, setNarrative }: ExplorePageSidePanelType) => {
  const [narrativeColor, setNarrativeColor] = React.useState(Theme.colors.peach);
  
  const onNarrativeChange = (selectedNarrativeColor: string, selectedNarrative: string) => {
    setNarrativeColor(selectedNarrativeColor);
    setNarrative(selectedNarrative)
  };

  return (
    <NarrativeContainer color={ narrativeColor } width={ '100%' }>
      <NarrativeHeadline color={ Theme.colors.white }>EXPLORE</NarrativeHeadline>
      <NarrativeTopMenuPanel narrativeStr={ narrativeStr } data={ data } toggleState={ toggleState } toggleHandler={ toggleHandler } onNarrativeChange={ onNarrativeChange }/>
    </NarrativeContainer>
  )
};
