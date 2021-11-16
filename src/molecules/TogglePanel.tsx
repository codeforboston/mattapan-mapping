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
}
