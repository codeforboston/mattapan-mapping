import * as React from 'react';
import styled from '@emotion/styled';
import { EXPLORE_PAGE_BOUNDARY_DATA, NARRATIVES, ExplorePageToggleStates } from '@/data/ExplorePageData';
import { ExplorePageNarratives } from '@/organisms/Narrative';
import { Theme } from '@/theme/Theme';
import { Map } from '@/atoms/MapAtoms';
import { MapLayers } from '@/molecules/MapLayers';
import { Layout, StyledHeader, StyledFooter } from '@/templates/StandardLayout'

const MapContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
`

const ExplorePageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const urls = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.file);
const boundaryIds = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.id);
const boundaryDataFileLocations = urls.map(url => fetch(url).then(res => res.json()));

export default function MapPage() {
  const [data, setData]: [MapGeoJsonData[], React.Dispatch<React.SetStateAction<any>>] = React.useState([]);
  const [narrativeData, setNarrativeData]: [MapGeoJsonData[], React.Dispatch<React.SetStateAction<any>>] = React.useState([]);
  const [featureToggle, setFeatureToggle]: [FeatureToggleState, React.Dispatch<React.SetStateAction<any>>] = React.useState({});
  const [narrative, setNarrative] = React.useState('');

  const onToggleChange = (id: string) => {
    setFeatureToggle({ ...featureToggle, [id]: !featureToggle[id] });
  };

  React.useEffect(() => {
    const fetchAll = async () => {
      try {
        const rawData = await Promise.all(boundaryDataFileLocations);
        const ExplorePageData = boundaryIds.map((id: string, idx) => {
          return {
            data: rawData[idx],
            name: rawData[idx]['name'] ?? 'Name missing from data',
            id: id,
            type: 'line',
            color: EXPLORE_PAGE_BOUNDARY_DATA[idx].color,
            visible: EXPLORE_PAGE_BOUNDARY_DATA[idx].visible,
          }
        });

        setData(ExplorePageData)
      } catch (error) {
          console.log('Explore page data fetch failed: ' + error);
      }
    }

    fetchAll();
  }, []); // loads raw data in only once on the first completed component lifecycle

  // Whenever narrative changes, the data to show also changes which is marked by the visible values in NARRATIVES
  // This adjusted data is also fed into the featureToggleState function
  React.useEffect(() => {
    if (narrative) {
      const selectedNarrative = NARRATIVES.filter(narr => narr.name === narrative)[0];
      const dataWithNarrative: MapGeoJsonData[] = JSON.parse(JSON.stringify(data)); 
  
      selectedNarrative.visible.forEach(landmarkId => {
        const idx = dataWithNarrative.findIndex(landmark => landmark.id === landmarkId);
        dataWithNarrative[idx].visible = true;
      });

      setNarrativeData(dataWithNarrative);
      setFeatureToggle(ExplorePageToggleStates(dataWithNarrative));
    } else {
      setNarrativeData(data);
      setFeatureToggle([]);
    }
  }, [narrative, data]);

  return (
    <Layout>
      <StyledHeader />
      <ExplorePageContainer>
        <ExplorePageNarratives narrative={ narrative } data={ narrativeData } toggleState={ featureToggle } toggleHandler={ onToggleChange } setNarrative={ setNarrative } />
        <MapContainer>
          <Map mapStyle={ Theme.map.dark }>
            <MapLayers geoJsonData={ narrativeData } toggleState={ featureToggle } />
          </Map>
        </MapContainer>
      </ExplorePageContainer>
      <StyledFooter />
    </Layout>
  )
}
