import { LandingGrid } from '@/organisms/LandingGrid';
import { SplashVideo, SplashVideoContainer } from '@/organisms/SplashVideo'

export default function LandingPage() {
  return (
    <>
      <SplashVideoContainer>
        <SplashVideo />
      </SplashVideoContainer>
      <LandingGrid />
    </>
  )
}
