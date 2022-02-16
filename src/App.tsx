import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'mapbox-gl/dist/mapbox-gl.css'

import { Theme } from './theme/Theme'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MapPage from './pages/MapPage'
import ExplorePage from './pages/ExplorePage'
import ActPage from './pages/ActPage'
import ExplorePage from './pages/ExplorePage'
import GetInvolvedPage from './pages/GetInvolvedPage'

import MeetPage from './pages/MeetPage'
import LandingPage from './pages/LandingPage'
import SharePage from './pages/SharePage'
import GlobalStyle from './GlobalStyle'

const NotFound = () => <h1>Path Not Recognized</h1>

const MattapanMappingRoutes = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/explore' element={<ExplorePage />} />
    <Route path='/map' element={<MapPage />} />
    <Route path='/meet' element={<MeetPage />} />
    <Route path='/share' element={<SharePage />} />
    <Route path='/act' element={<ActPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <MattapanMappingRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
