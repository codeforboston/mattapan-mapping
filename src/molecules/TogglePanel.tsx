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

const CircleIcon = styled.div<{color: string}>`
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  margin: 0 ${ props => props.theme.spacing.xs };
  border: 1px solid ${ props => props.color};
  background-color: ${ props => props.color };
  width: ${ props => props.theme.spacing.s };
  height: ${ props => props.theme.spacing.s };
`

const ToggleItem = styled.div`
  display: flex;
  align-items: center;
`

export const TogglePanel = ({ data, toggleState, toggleHandler }: TogglePanel) => {
  const toggleList = data.map((item: any) => { return { id: item.id, name: item.name, color: item.color } });

  return (
    <TogglePanelContainer>
      { toggleList.map((toggleFeature: any) => (
        <ToggleItem key={ toggleFeature.id }>
          <input
            checked={ toggleState[toggleFeature.id] }
            type='checkbox'
            onChange={ () => toggleHandler(toggleFeature.id) }
          />
          <CircleIcon color={ toggleFeature.color } />
          <span>{ toggleFeature.name }</span>
        </ToggleItem>
      ))}
    </TogglePanelContainer>
  );
}
