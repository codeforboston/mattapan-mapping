import { LandingGrid } from '@/organisms/LandingGrid';
import { SplashVideo, SplashVideoContainer } from '@/organisms/SplashVideo'
import { Footer } from '@/organisms/Footer';

export default function LandingPage() {
  return (
    <>
      <SplashVideoContainer>
        <SplashVideo />
      </SplashVideoContainer>
      <LandingGrid />
      <Footer />
    </>
  )
}
