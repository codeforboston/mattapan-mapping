import styled from '@emotion/styled';

const TogglePanelContainer = styled.div`
  font-size: ${ props => props.theme.fonts.fontSize.regular };
  background: #fff;
  box-shadow: 0 0 4px ${ props => props.theme.colors.black };
  margin: 24px;
  padding: ${ props => props.theme.spacing.m } ${ props => props.theme.spacing.l };
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  cursor: auto;
`;

export const TogglePanel = ({ data, toggleState, toggleHandler }: TogglePanel) => {
  const toggleList = data.map((item: any) => { return { id: item.id, name: item.name } });

  return (
    <TogglePanelContainer>
      { toggleList.map((toggleFeature: any) => (
        <div key={ toggleFeature.id }>
          <input
            checked={ toggleState[toggleFeature.id] }
            type='checkbox'
            onChange={ () => toggleHandler(toggleFeature.id) }
          />
          <span>{ toggleFeature.name }</span>
        </div>
      ))}
    </TogglePanelContainer>
  );
}