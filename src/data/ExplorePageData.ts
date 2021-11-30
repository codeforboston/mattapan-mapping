import { Theme } from '@/theme/Theme';

export const EXPLORE_PAGE_BOUNDARY_DATA: GeoJsonDetails[] = [
  {
    id: 'greaterMattapanZoning',
    file: './boundaries/greater_mattapan_zoning.json',
    color: Theme.colors.blue,
    visible: true,
  },
  // {
  //   id: 'zoningSubdistricts',
  //   file: './boundaries/1Zoning_Subdistricts.geojson',
  //   color: Theme.colors.blue,
  //   visible: false,
  // },
  {
    id: 'dotHpZoningSubdistricts',
    file: './boundaries/Dot_HP_Zoning_Subdistricts.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'greaterMattapanMergedPoly',
    file: './boundaries/Greater_Mattapan_Merged_Poly.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'greaterMattapanNeighborhoodLine',
    file: './boundaries/Greater_Mattapan_Neighborhood_Line.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'mattapanNeighborhood',
    file: './boundaries/mattapan_neighborhood.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'mattapanSquare',
    file: './boundaries/Mattapan_Square_qtr_mile.json',
    color: Theme.colors.green,
    visible: true,
  },
  // {
  //   id: 'mattapanZoningSubdistricts',
  //   file: './boundaries/Mattapan_Zoning_subdistricts.geojson',
  //   color: Theme.colors.blue,
  //   visible: true,
  // },
  {
    id: 'mattapanPlanningDistrict',
    file: './boundaries/mattapan_planning_district.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'mattapanPlanBoundary',
    file: './boundaries/PLAN_Mattapan_Poly.json',
    color: Theme.colors.blue,
    visible: false,
  },
  {
    id: 'mortonStCorridor',
    file: './boundaries/Morton_St_Corridor.json',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    id: 'riverStCorridor',
    file: './boundaries/River_St_Corridor_FeaturesTo.json',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    id: 'cummimnsHwyCorridor',
    file: './boundaries/Cummins_Hwy_Corridor.json',
    color: Theme.colors.orange,
    visible: true,
  },
  {
    id: 'blueHillAveCorridor',
    file: './boundaries/Blue_Hill_Ave_Corridor.json',
    color: Theme.colors.orange,
    visible: true,
  },
  // {
  //   id: 'subDistricts',
  //   file: './boundaries/sd.json',
  //   color: Theme.colors.blue,
  //   visible: true,
  // },
];

export const ExplorePageToggleStates: () => FeatureToggleState = () => {
  return EXPLORE_PAGE_BOUNDARY_DATA.reduce(
    (obj: any, item: any) => Object.assign(obj,{ [item.id]: item.visible }
  ), {});
};
