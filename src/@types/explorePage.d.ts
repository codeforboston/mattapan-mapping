interface ExplorePageSidePanelType extends TogglePanel {
  narrativeStr: string;
  setNarrative: React.Dispatch<React.SetStateAction<any>>;
}

type NarrativePanelType = Omit<ExplorePageSidePanelType, 'setNarrative'> & { onNarrativeChange: (selectedNarrativeColor: string, selectedNarrative: string ) => void};

interface NarrativeType {
  name: string;
  color: string;
  visible: string[];
}

interface NarrativeTopPanelType extends TogglePanel{
  narrative: string;
  setNarrative: React.Dispatch<React.SetStateAction<any>>;
}

type NarrativePanelType = Omit<ExplorePageSidePanelType, 'setNarrative'> & { onNarrativeChange: (selectedNarrativeColor: string, selectedNarrative: string ) => void};
