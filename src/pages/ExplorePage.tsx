import StandardLayout from '@/templates/StandardLayout';
import { Map, Map2 } from '@/organisms/Map';

export default function ExplorePage() {
  return (
    <StandardLayout>
      <Map />
      <Map2 />
    </StandardLayout>
  )
}
