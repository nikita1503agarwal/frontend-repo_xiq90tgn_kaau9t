import Hero from './components/Hero'
import HomeSections from './components/HomeSections'
import UploadForm from './components/UploadForm'
import ProgressDashboard from './components/ProgressDashboard'
import CommunityWall from './components/CommunityWall'
import { Routes, Route, Link } from 'react-router-dom'

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="text-white font-bold">LDI/SD</Link>
          <nav className="flex items-center gap-4 text-blue-100 text-sm">
            <Link to="/upload" className="hover:text-white">Upload</Link>
            <Link to="/progress" className="hover:text-white">My Progress</Link>
            <Link to="/community" className="hover:text-white">Community</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="py-10 text-center text-blue-300/70 text-sm">Made for LDI & SD — Track. Improve. Showcase.</footer>
    </div>
  )
}

function Home() {
  return (
    <Shell>
      <Hero />
      <HomeSections />
    </Shell>
  )
}

function UploadPage() {
  return (
    <Shell>
      <UploadForm />
    </Shell>
  )
}

function ProgressPage() {
  return (
    <Shell>
      <ProgressDashboard />
    </Shell>
  )
}

function CommunityPage() {
  return (
    <Shell>
      <CommunityWall />
    </Shell>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  )
}

export default App
