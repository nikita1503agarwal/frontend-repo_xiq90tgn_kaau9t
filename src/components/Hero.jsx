import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
        >
          Skill-Building Dashboard for LDI & SD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-blue-100 text-lg max-w-2xl"
        >
          Upload your picture cards, voice notes and threads. Track attendance, pitches and week-to-week improvement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link to="/upload" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">Upload your work</Link>
          <Link to="/progress" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">My Progress</Link>
          <Link to="/community" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">Community Wall</Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
    </section>
  )
}
