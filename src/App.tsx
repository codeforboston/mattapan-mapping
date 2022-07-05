import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import 'mapbox-gl/dist/mapbox-gl.css'
import client from './graphql/apolloClient'
import { Theme } from './theme/Theme'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MapPage from './pages/MapPage'
import ActPage from './pages/ActPage'
import MeetPage from './pages/MeetPage'
import LandingPage from './pages/LandingPage'
import SharePage from './pages/SharePage'
import GlobalStyle from './GlobalStyle'
import StorytellingMap from './pages/MapStoryPage'

const NotFound = () => <h1>Path Not Recognized</h1>

const MattapanMappingRoutes = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/explore' element={<MapPage />} />
    <Route path='/story/*' element={<StorytellingMap />}>
      <Route path=":narrativeStr" element={<StorytellingMap/>}/>
    </Route>
    <Route path='/meet' element={<MeetPage />} />
    <Route path='/share' element={<SharePage />} />
    <Route path='/act' element={<ActPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <MattapanMappingRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}
