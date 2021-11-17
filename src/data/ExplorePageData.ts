import { Theme } from '@/theme/Theme';
import { GreaterMattapanZoning as GreaterMattapanZoningData } from '@/data/GreaterMattapanZoning';
import { BlueHillAveCorridor as BlueHillAveCorridorData } from '@/data/BlueHillAveCorridor';
import { MattapanPlanningBoundary } from './MattapanPlanningBoundary';
import { MattapanNeighborhoodBoundary } from './MattapanNeighborhoodBoundary';
import { MattapanPlanBoundary } from './MattapanPlanBoundary';
import { GreaterMattapanMergedBoundary } from './GreaterMattapanMergedBoundary';
import { MattapanSquareBoundary } from './MattapanSquareBoundary';
import { CumminsHighwayCorridor } from './CumminsHighwayCorridor';
import { MortonStreetCorridor } from './MortonStreetCorridor';
import { RiverStreetCorridor } from './RiverStreetCorridor';


export const ExplorePageData: MapGeoJsonData[] = [
  {
    data: BlueHillAveCorridorData,
    id: 'blueHillAveCorridor',
    name: 'Blue Hill Ave Corridor',
    type: 'line',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    data: CumminsHighwayCorridor,
    id: 'cumminsHighwayCorridor',
    name: 'Cummins Highway Corridor',
    type: 'line',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    data: MortonStreetCorridor,
    id: 'mortonStreetCorridor',
    name: 'Morton Street Corridor',
    type: 'line',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    data: RiverStreetCorridor,
    id: 'riverStreetCorridor',
    name: 'River Street Corridor',
    type: 'line',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    data: GreaterMattapanZoningData,
    id: 'greaterMattapanZoning',
    name: 'Greater Mattapan Zoning',
    type: 'line',
    color: Theme.colors.blue,
    visible: true,
  },
  {
    data: MattapanPlanningBoundary,
    id: 'mattapanPlanningBoundary',
    name: 'BPDA Planning District Boundary',
    type: 'line',
    color: Theme.colors.green,
    visible: false,
  },
  {
    data: MattapanNeighborhoodBoundary,
    id: 'mattapanNeighborhoodBoundary',
    name: 'BPDA Unofficial Neighborhood Boundary',
    type: 'line',
    color: 'skyblue',
    visible: false,
  },
  {
    data: MattapanPlanBoundary,
    id: 'mattapanPlanBoundary',
    name: 'PLAN Mattapan Boundary',
    type: 'line',
    color: 'darkblue',
    visible: false,
  },
  {
    data: GreaterMattapanMergedBoundary,
    id: 'greaterMattapanMergedBoundary',
    name: 'Greater Mattapan Merged Boundary',
    type: 'line',
    color: 'PaleTurquoise',
    visible: false,
  },
  {
    data: MattapanSquareBoundary,
    id: 'mattapanSquareBoundary',
    name: 'Mattapan Square Boundary',
    type: 'line',
    color: 'fuchsia',
    visible: false,
  },
];


export const ExplorePageToggleStates: () => FeatureToggleState = () => {
  return ExplorePageData.reduce(
    (obj: any, item: any) => Object.assign(obj,{ [item.id]: item.visible }
  ), {});
};
