import { LandingGrid } from '../organisms/LandingGrid';
import { SplashVideo } from '../organisms/SplashVideo'
import { Footer } from '../organisms/Footer';

export default function LandingPage() {
  return (
    <>
      <SplashVideo />
      <LandingGrid />
      <Footer />
    </>
  )
}