import { Map, MapGeoJsonSource, MapContainer } from "@/atoms/MapAtoms";
import { Theme } from "@/theme/Theme";
import  BPDA from "@/data/BPDA";
import { Marker } from "react-map-gl";

const BPDADevelopmentLayer = () => (
  <MapGeoJsonSource
    data={BPDA}
    id="BPDA"
    type="circle"
    color={Theme.colors.blue}
  />
);

export default function GetInvolvedPage() {
  return (
    <MapContainer>
      <Map mapStyle={Theme.map.dark}>
        <>
          <BPDADevelopmentLayer />
          {BPDA.map((data:any) => (
            <Marker
              latitude={data.features.type.coordinates[0]}
              longitude={data.features.type.coordinates[1]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div>You are here</div>
            </Marker>
          ))}
          ;
        </>
      </Map>
    </MapContainer>
  );
}
