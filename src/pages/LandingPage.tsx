import StandardLayout from '@/templates/StandardLayout';
import { LandingGrid } from '@/organisms/LandingGrid';
import { SplashVideo } from '@/organisms/SplashVideo'

export default function LandingPage() {
  return (
    <StandardLayout>
      <SplashVideo />
      <LandingGrid />
    </StandardLayout>
  )
}
