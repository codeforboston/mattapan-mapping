import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
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
import { Footer } from '@/organisms/Footer';

const NotFound = () => <h1>Path Not Recognized</h1>

const MattapanMappingRoutes = () => (
  <Switch>
    <Route exact path='/'><LandingPage /></Route>
    <Route path='/about'><AboutPage /></Route>
    <Route path='/explore'><ExplorePage /></Route>
    <Route path='/meet'><MeetPage /></Route>
    <Route path='/share'><SharePage /></Route>
    <Route path='/getInvolved'><GetInvolvedPage /></Route>
    <Route path='/contact'><ContactPage /></Route>
    <Route path='*'><NotFound /></Route>
  </Switch>
)

const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .layout-content {
    flex-grow: 1;

    /* TODO: temporary */
    width: 100%;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Layout>
          <Header />
          <div className="layout-content">
            <MattapanMappingRoutes />
          </div>
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
