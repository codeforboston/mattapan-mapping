import * as React from 'react';
import { ExplorePageMap } from '@/organisms/PageMap';
import { EXPLORE_PAGE_BOUNDARY_DATA } from '@/data/ExplorePageData';

export default function ExplorePage() {
  const urls = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.file);
  const boundaryIds = EXPLORE_PAGE_BOUNDARY_DATA.map(boundary => boundary.id)
  const boundaryDataFileLocations = urls.map(url => fetch(url).then(res => res.json()));
  const [data, setData]: [MapGeoJsonData[], React.Dispatch<React.SetStateAction<any>>] = React.useState([]);

  React.useEffect(() => {
    const fetchAll = async () => {
      try {
        const rawData = await Promise.all(boundaryDataFileLocations);
        const ExplorePageData = boundaryIds.map((id: string, idx) => {
          return {
            data: rawData[idx],
            name: rawData[idx]['name'],
            id: id,
            type: 'line',
            color: EXPLORE_PAGE_BOUNDARY_DATA[idx].color,
            visible: EXPLORE_PAGE_BOUNDARY_DATA[idx].visible,
          }
        })
        setData(ExplorePageData)
      } catch (error) {
          console.log('Explore page data fetch failed: ' + error)
      }
    }

    fetchAll();
  }, [boundaryIds, boundaryDataFileLocations]);

  return (
    <ExplorePageMap data={ data } />
  )
}
