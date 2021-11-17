import styled from '@emotion/styled';
import { TogglePanelContainer, CircleIcon, ToggleItemContainer } from '@/atoms/TogglePanelAtoms';

export const TogglePanel = ({ data, toggleState, toggleHandler }: TogglePanel) => {
  const toggleList = data.map((item: any) => { return { id: item.id, name: item.name, color: item.color } });

  return (
    <TogglePanelContainer>
      { toggleList.map((toggleFeature: any) => (
        <ToggleItemContainer key={ toggleFeature.id }>
          <input
            checked={ toggleState[toggleFeature.id] }
            type='checkbox'
            onChange={ () => toggleHandler(toggleFeature.id) }
          />
          <CircleIcon color={ toggleFeature.color } />
          <span>{ toggleFeature.name }</span>
        </ToggleItemContainer>
      ))}
    </TogglePanelContainer>
  );
};


const ToggleContainer = styled.div`
  flex: 3;
`;

const ExplorePageToggleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ExplorePageToggleHeader = styled.span`
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 100px;
  color: ${ props => props.theme.colors.orange };
  text-align: center;
  display; flex;
  align-items: center;
  align-self: center;
`;

const ExplorePageToggleSubtitle = styled.span`
  font-family: ${ props => props.theme.fonts.secondary };
  font-size: ${ props => props.theme.fonts.fontSize.subtitle };
  color: ${ props => props.theme.colors.orange };
`;

const LosBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-around;
  margin: 24px 0;
`;

const Box = styled.button`
  border: solid black 1px;
  background: none;
  text-align: center;
`;

const LosBoxes = () => {
  return (
    <div>
      <ExplorePageToggleSubtitle> Explore... </ExplorePageToggleSubtitle>
      <LosBoxesContainer>
        <Box>What's happening with housing</Box>
        <Box>How is the land used?</Box>
        <Box>Who Lives in Mattapan?</Box>
        <Box>Mattapan loves stories</Box>
      </LosBoxesContainer>
    </div>
  );
};

export const ExplorePageTogglePanel = ({ data, toggleState, toggleHandler }: TogglePanel) => {
  const toggleList = data.map((item: any) => { return { id: item.id, name: item.name, color: item.color } });

  return (
    <ExplorePageToggleContainer>
      <ExplorePageToggleHeader>Subtitle</ExplorePageToggleHeader>
      <LosBoxes />
      <ToggleContainer>
        { toggleList.map((toggleFeature: any) => (
          <ToggleItemContainer key={ toggleFeature.id }>
            <input
              checked={ toggleState[toggleFeature.id] }
              type='checkbox'
              onChange={ () => toggleHandler(toggleFeature.id) }
            />
            <CircleIcon color={ toggleFeature.color } />
            <span>{ toggleFeature.name }</span>
          </ToggleItemContainer>
        ))}
      </ToggleContainer>
    </ExplorePageToggleContainer>
  );
};
