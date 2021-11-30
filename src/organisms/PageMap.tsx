import * as React from 'react';
import { Theme } from '@/theme/Theme';
import { Map, MapContainer } from '@/atoms/MapAtoms';
import { MapLayers } from '@/molecules/MapLayers';
import { TogglePanel } from '@/molecules/TogglePanel';

export const ExplorePageMap = ({ data, initialToggleStates }: { data: MapGeoJsonData[], initialToggleStates: any }) => {
  const [featureToggle, setFeatureToggle]: [FeatureToggleState, React.Dispatch<React.SetStateAction<any>>] = React.useState(initialToggleStates);

  const onToggleChange = (id: string) => {
    setFeatureToggle({ ...featureToggle, [id]: !featureToggle[id] });
  };

  return(
    <MapContainer>
    <Map mapStyle={ Theme.map.dark }>
      <MapLayers geoJsonData={ data } toggleState={ featureToggle } />
    </Map>
    <TogglePanel data={ data } toggleState={ featureToggle } toggleHandler={ onToggleChange }/>
  </MapContainer>
  );
};
