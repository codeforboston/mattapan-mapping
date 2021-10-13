import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Theme } from './theme/Theme';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExplorePage from './pages/ExplorePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import MeetPage from './pages/MeetPage';
import LandingPage from './pages/LandingPage';
import SharePage from './pages/SharePage';
import Header from './organisms/Header';

const NotFound = () => <h1>Path Not Recognized</h1>

const MattapanMappingRoutes = () => (
  <Switch>
    <Route exact path='/'><LandingPage /></Route>
    <Route path='/about'><AboutPage /></Route>
    <Route path='/explore'><ExplorePage /></Route>
    <Route path='/meet'><MeetPage /></Route>
    <Route path='/share'><SharePage /></Route>
    <Route path='/getInvovled'><GetInvolvedPage /></Route>
    <Route path='/contact'><ContactPage /></Route>
    <Route path='*'><NotFound /></Route>
  </Switch>
)
export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <MattapanMappingRoutes />
      </Router>
    </ThemeProvider>
  );
}
