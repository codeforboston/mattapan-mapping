import * as React from 'react';
import styled from '@emotion/styled';
import { EXPLORE_PAGE_BOUNDARY_DATA, ExplorePageToggleStates } from '@/data/ExplorePageData';
import { ExplorePageNarratives } from '@/organisms/Narrative';
import { Theme } from '@/theme/Theme';
import { Map } from '@/atoms/MapAtoms';
import { MapLayers } from '@/molecules/MapLayers';
import { Layout, StyledHeader, StyledFooter } from '@/templates/StandardLayout'
import { useMapPageQuery } from '@/graphql/generated';

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
  const { data: mapData } = useMapPageQuery();
  const [data, setData] = React.useState<Array<MapGeoJsonData>>([]);
  const [narrativeData, setNarrativeData] = React.useState<Array<MapGeoJsonData>>([]);
  const [featureToggle, setFeatureToggle]= React.useState<FeatureToggleState>({});
  const [narrative, setNarrative] = React.useState('');

  const { Narratives: gqlNarrative, Boundaries: gqlBoundaries } = mapData || {};

  console.log({ gqlNarrative, gqlBoundaries });

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
    if (gqlNarrative !== undefined && gqlBoundaries !== undefined) {
      const filteredNarratives = gqlNarrative.filter(({ name }) => name === narrative);
      if (filteredNarratives.length === 0) {
        return;
      }
      const selectedNarrative = filteredNarratives[0];
      const dataWithNarrative: MapGeoJsonData[] = JSON.parse(JSON.stringify(data));

      selectedNarrative.boundaries.forEach(({ id }) => {
        if (id === undefined || id === null) {
          return;
        }
        const boundaryIndex = gqlBoundaries.findIndex(({ id: bid }) => bid === id);
        const boundaryName = gqlBoundaries[boundaryIndex].name;
        const idx = dataWithNarrative.findIndex(landmark => landmark.id === boundaryName);
        dataWithNarrative[idx].visible = true;
      });

      setNarrativeData(dataWithNarrative);
      setFeatureToggle(ExplorePageToggleStates(dataWithNarrative));
    } else {
      setNarrativeData(data);
      setFeatureToggle({});
    }
  }, [narrative, data, gqlNarrative, gqlBoundaries]);

  return (
    <Layout>
      <StyledHeader />
      <ExplorePageContainer>
        <ExplorePageNarratives
          narrative={ narrative }
          data={ narrativeData }
          toggleState={ featureToggle }
          toggleHandler={ onToggleChange }
          setNarrative={ setNarrative }
        />
        <MapContainer>
          <Map mapStyle={ Theme.map.dark }>
            <MapLayers
              geoJsonData={ narrativeData }
              toggleState={ featureToggle }
            />
          </Map>
        </MapContainer>
      </ExplorePageContainer>
      <StyledFooter />
    </Layout>
  )
}
