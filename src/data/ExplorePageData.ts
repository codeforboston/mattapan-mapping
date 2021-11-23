import { Theme } from '@/theme/Theme';

export const EXPLORE_PAGE_BOUNDARY_DATA: GeoJsonMeta[] = [
  {
    id: 'greaterMattapanZoning',
    file: './boundaries/greater_mattapan_zoning.json',
    color: Theme.colors.peach,
    visible: false,
  },
  {
    id: 'zoningSubdistricts',
    file: './boundaries/1Zoning_Subdistricts.geojson',
    color: Theme.colors.peach,
    visible: false,
  },
  {
    id: 'dotHpZoningSubdistricts',
    file: './boundaries/Dot_HP_Zoning_Subdistricts.json',
    color: Theme.colors.peach,
    visible: false,
  },
  {
    id: 'greaterMattapanMergedPoly',
    file: './boundaries/Greater_Mattapan_Merged_Poly.json',
    color: Theme.colors.peach,
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
    color: Theme.colors.teal,
    visible: false,
  },
  {
    id: 'mattapanZoningSubdistricts',
    file: './boundaries/Mattapan_Zoning_subdistricts.geojson',
    color: Theme.colors.blue,
    visible: false,
  },
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
    visible: false,
  },
  {
    id: 'blueHillAveCorridor',
    file: './boundaries/Blue_Hill_Ave_Corridor.json',
    color: Theme.colors.orange,
    visible: false,
  },
  {
    id: 'subDistricts',
    file: './boundaries/sd.json',
    color: Theme.colors.blue,
    visible: false,
  },
];

export const ExplorePageToggleStates: (data: MapGeoJsonData[]) => FeatureToggleState = (data) => {
  return data.reduce(
    (obj: any, item: any) => Object.assign(obj,{ [item.id]: item.visible }
  ), {});
};

export const NARRATIVES = [
  { name: 'Informed Researcher', color: Theme.colors.orange, visible: ['greaterMattapanZoning', 'dotHpZoningSubdistricts', 'mattapanSquare']},
  { name: 'Longtime Resident', color: Theme.colors.green, visible: ['cummimnsHwyCorridor', 'mattapanPlanBoundary', 'mattapanSquare'] },
  { name: 'New to Mattapan', color: Theme.colors.blue, visible: ['blueHillAveCorridor', 'greaterMattapanMergedPoly', 'zoningSubdistricts'] },
  { name: 'Public Servent', color: Theme.colors.brown, visible: ['subDistricts', 'riverStCorridor', 'mattapanZoningSubdistricts']},
];
