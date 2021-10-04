import { ThemeProvider } from '@emotion/react';
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css';
import Header from './organisms/Header';
import { GeneralIntro } from './organisms/GeneralIntro';
import { Map, Map2 } from './organisms/Map';
import Footer from './organisms/Footer';
import { PersonaCardSet } from './organisms/PersonaCardSet';
import { Theme } from './theme/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <PersonaCardSet />
      <GeneralIntro />
      <Map />
      <Map2 />
      {/* <StatBanner2 /> */}
      {/* <CardList /> */}
      <Footer />
    </ThemeProvider>
  );
}
