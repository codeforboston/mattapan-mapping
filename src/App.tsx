import { ThemeProvider } from '@emotion/react';
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css';
import Header from './organisms/Header';
import StatBanner1 from './organisms/Banner';
import Map from './organisms/Map';
import Footer from './organisms/Footer';
import { SplashVideo } from './organisms/SplashVideo';
import { Theme } from './theme/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <SplashVideo />
      <StatBanner1 />
      <Map />
      {/* <StatBanner2 /> */}
      {/* <CardList /> */}
      <Footer />
    </ThemeProvider>
  );
}
