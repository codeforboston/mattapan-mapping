import { ExplorePageToggleStates } from "@/data/ExplorePageData";
import { useMapPageQuery } from "@/graphql/generated";
import React from "react";
import { NarrativeTopPanel } from "./Narrative";
import { useNavigate, useParams  } from 'react-router-dom';
//import { useSearchParams } from 'react-router-dom';

export const NarrativeMenu = (props: any) => {
    const { data: mapData } = useMapPageQuery();
    const [data] = React.useState<Array<MapGeoJsonData>>([]);
    const [narrativeData, setNarrativeData] = React.useState<Array<MapGeoJsonData>>([]);
    const [featureToggle, setFeatureToggle]= React.useState<FeatureToggleState>({});
    //const [narrative, setNarrative] = React.useState('');
    const { Narratives: gqlNarrative, Boundaries: gqlBoundaries } = mapData || {};
    const onToggleChange = (id: string) => {
        setFeatureToggle({ ...featureToggle, [id]: !featureToggle[id] });
      };
    // let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    let { narrativeStr } = useParams();

    React.useEffect(() => {
    if (gqlNarrative !== undefined && gqlBoundaries !== undefined) {
        const filteredNarratives = gqlNarrative.filter(({ name }) => name === narrativeStr);
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
    }, [narrativeStr, data, gqlNarrative, gqlBoundaries]);

    return(
        <>
        <NarrativeTopPanel
            narrativeStr={narrativeStr??''}
            data={narrativeData}
            toggleState={featureToggle}
            toggleHandler={onToggleChange}
            setNarrative={navigate}/></>
    )
}