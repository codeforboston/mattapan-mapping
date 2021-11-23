import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning as GreaterMattapanZoningData } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor as BlueHillAveCorridorData } from '@/data/BlueHillAveCorridor';

export const EXPLORE_PAGE_DATA_ENUM: InterimData = {
  blueHillAveCorridor: {
    data: './boundaries/Blue_Hill_Ave_Corridor.json',
    color: Theme.colors.blue,
    visible: true,
  },
  greaterMattapanZoning: {
    data: './boundaries/greater_mattapan_zoning.json',
    color: Theme.colors.orange,
    visible: true,
  }
}

export const ExplorePageData: MapGeoJsonData[] = [
  {
    data: BlueHillAveCorridorData,
    id: 'blueHillAveCorridor',
    name: 'Blue Hill Ave Corridor',
    type: 'line',
    color: Theme.colors.blue,
    visible: true,
  },
  {
    data: GreaterMattapanZoningData,
    id: 'greaterMattapanZoning',
    name: 'Greater Mattapan Zoning',
    type: 'line',
    color: Theme.colors.orange,
    visible: true,
  },
];


export const ExplorePageToggleStates: () => FeatureToggleState = () => {
  return ExplorePageData.reduce(
    (obj: any, item: any) => Object.assign(obj,{ [item.id]: item.visible }
  ), {});
};
