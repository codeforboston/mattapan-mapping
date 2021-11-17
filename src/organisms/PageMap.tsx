import * as React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@/theme/Theme';
import { Map, MapContainer } from '@/atoms/MapAtoms';
import { MapLayers } from '@/molecules/MapLayers';
import { ExplorePageTogglePanel } from '@/molecules/TogglePanel';

const ExplorePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ExplorePageMap = ({ data, featureToggleStates }: { data: MapGeoJsonData[], featureToggleStates: FeatureToggleState }) => {
  const [featureToggle, setFeatureToggle]: [FeatureToggleState, React.Dispatch<React.SetStateAction<any>>] = React.useState(featureToggleStates);

  const onToggleChange = (id: string) => {
    setFeatureToggle({ ...featureToggle, [id]: !featureToggle[id] });
  };

  return(
    <ExplorePageContainer>
      <ExplorePageTogglePanel data={ data } toggleState={ featureToggle } toggleHandler={ onToggleChange }/>
      <MapContainer>
        <Map mapStyle={ Theme.map.dark }>
          <MapLayers geoJsonData={ data } toggleState={ featureToggle } />
        </Map>
      </MapContainer>
    </ExplorePageContainer>
  );
};
