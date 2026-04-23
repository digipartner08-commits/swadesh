import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LaunchSection from './components/LaunchSection'
import ProjectDetails from './pages/ProjectDetails'
import FAQ from './components/FAQ'

function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <Stats />
      <LaunchSection />
      <Projects />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  )
}