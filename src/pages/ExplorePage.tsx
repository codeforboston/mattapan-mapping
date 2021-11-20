import { ExplorePageMap } from '@/organisms/PageMap';
import { ExplorePageData, ExplorePageToggleStates } from '@/data/ExplorePageData';

export default function ExplorePage() {
  return (
    <ExplorePageMap data={ ExplorePageData } featureToggleStates={ ExplorePageToggleStates() }/>
  )
}
