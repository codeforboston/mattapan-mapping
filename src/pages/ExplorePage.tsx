import StandardLayout from '@/templates/StandardLayout';
import { ExplorePageMap } from '@/organisms/PageMap';
import { ExplorePageData, ExplorePageToggleStates } from '@/data/ExplorePageData';

export default function ExplorePage() {
  return (
    <StandardLayout>
      <ExplorePageMap data={ ExplorePageData } featureToggleStates={ ExplorePageToggleStates() }/>
    </StandardLayout>
  )
}
