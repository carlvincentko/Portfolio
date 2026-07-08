import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorksCybersec from './pages/WorksCybersec'
import WorksSofteng from './pages/WorksSofteng'
import ActivitiesELC from './pages/ActivitiesELC'
import ActivitiesLSCS from './pages/ActivitiesLSCS'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/cybersec" element={<WorksCybersec />} />
          <Route path="/works/softeng" element={<WorksSofteng />} />
          <Route path="/activities/elc" element={<ActivitiesELC />} />
          <Route path="/activities/lscs" element={<ActivitiesLSCS />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
