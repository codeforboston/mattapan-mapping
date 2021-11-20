import { MapGeoJsonSource } from "@/atoms/MapAtoms"

export const MapLayers = ({ geoJsonData, toggleState }: { geoJsonData: MapGeoJsonData[], toggleState: FeatureToggleState }) => {
  return (
    <>
      { geoJsonData.map((data) =>
        <MapGeoJsonSource
          key={ data.id }
          data= { data.data }
          id={ data.id }
          type={ data.type }
          color={ data.color }
          visible={ toggleState[data.id] }
        />
      )}
    </>
  );
};