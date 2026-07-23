import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsCybersec from './pages/ProjectsCybersec'
import ProjectsSofteng from './pages/ProjectsSofteng'
import ActivitiesELC from './pages/ActivitiesELC'
import ActivitiesLSCS from './pages/ActivitiesLSCS'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/cybersec" element={<ProjectsCybersec />} />
          <Route path="/projects/softeng" element={<ProjectsSofteng />} />
          <Route path="/activities/elc" element={<ActivitiesELC />} />
          <Route path="/activities/lscs" element={<ActivitiesLSCS />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
