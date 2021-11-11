import StandardLayout from '@/templates/StandardLayout';
import { LandingGrid } from '@/organisms/LandingGrid';
import { SplashVideo, SplashVideoContainer } from '@/organisms/SplashVideo'

export default function LandingPage() {
  return (
    <StandardLayout>
      <SplashVideoContainer>
        <SplashVideo />
      </SplashVideoContainer>
      <LandingGrid />
    </StandardLayout>
  )
}
