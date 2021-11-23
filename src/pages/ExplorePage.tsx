import * as React from 'react';
// import fetchAll from '@/utils/fetchAll';
import { ExplorePageMap } from '@/organisms/PageMap';
import { EXPLORE_PAGE_DATA_ENUM } from '@/data/ExplorePageData';

// const getExplorePageData = async () => {
//   const boundaryDataFiles = Object.values(EXPLORE_PAGE_DATA_ENUM).map(boundary => boundary.data);
//   const boundaryIds = Object.keys(EXPLORE_PAGE_DATA_ENUM);
//   const data: GeoJson[] = await fetchAll(boundaryDataFiles);

//   const ExplorePageData = boundaryIds.map((id: string, idx) => {
//     return {
//       data: data[idx],
//       name: data[idx]['name'],
//       id: id,
//       type: 'line',
//       color: EXPLORE_PAGE_DATA_ENUM[id].color,
//       visible: EXPLORE_PAGE_DATA_ENUM[id].visible,
//     }
//   });

//   return ExplorePageData
// }

export default function ExplorePage() {
  const urls = Object.values(EXPLORE_PAGE_DATA_ENUM).map(boundary => boundary.data);
  const boundaryIds = Object.keys(EXPLORE_PAGE_DATA_ENUM);
  const [data, setData]: [MapGeoJsonData[], React.Dispatch<React.SetStateAction<any>>] = React.useState([]);

  React.useEffect(() => {
    const boundaryData = urls.map(url => 
      fetch(url).then(res => res.json())  
    );
    Promise.all(boundaryData).then(data => {
      const ExplorePageData = boundaryIds.map((id: string, idx) => {
        return {
          data: data[idx],
          name: data[idx]['name'],
          id: id,
          type: 'line',
          color: EXPLORE_PAGE_DATA_ENUM[id].color,
          visible: EXPLORE_PAGE_DATA_ENUM[id].visible,
        }
      });
      
      setData(ExplorePageData)
    })
  }, [boundaryIds, urls]);

  return (
    <ExplorePageMap data={ data } />
  )
}
