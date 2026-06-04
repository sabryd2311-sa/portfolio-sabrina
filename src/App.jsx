import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AutomazioniPage from './pages/AutomazioniPage'
import AutomazioneDetail from './pages/AutomazioneDetail'
import ProgettiPage from './pages/ProgettiPage'
import ProgettoSostiqa from './pages/ProgettoSostiqa'
import ProgettoSpot from './pages/ProgettoSpot'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automazioni" element={<AutomazioniPage />} />
          <Route path="/automazioni/:id" element={<AutomazioneDetail />} />
          <Route path="/progetti" element={<ProgettiPage />} />
          <Route path="/progetti/sostiqa" element={<ProgettoSostiqa />} />
          <Route path="/progetti/spot" element={<ProgettoSpot />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
