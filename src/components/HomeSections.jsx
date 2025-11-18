import { Calendar, UploadCloud, Mic, Images, LineChart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeSections() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-5 h-5 text-blue-300" />
          <h3 className="font-semibold">Upcoming LDI topic</h3>
        </div>
        <p className="text-blue-100 text-sm mb-4">Next: Compelling Openings — Sat 10:30am</p>
        <div className="flex items-center gap-2 text-blue-200 text-sm">
          <span className="px-2 py-1 rounded bg-white/10">Saturday SD list</span>
          <span className="px-2 py-1 rounded bg-white/10">Pitch practice</span>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <UploadCloud className="w-5 h-5 text-blue-300" />
          <h3 className="font-semibold">Upload your work</h3>
        </div>
        <p className="text-blue-100 text-sm mb-4">Add picture cards, voice notes or a thread for this week's topic.</p>
        <Link to="/upload" className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">Go to Upload</Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <LineChart className="w-5 h-5 text-blue-300" />
          <h3 className="font-semibold">Your dashboard</h3>
        </div>
        <p className="text-blue-100 text-sm mb-4">See attendance, pitches, selections and week-to-week improvement.</p>
        <Link to="/progress" className="inline-block px-4 py-2 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">Open Progress</Link>
      </div>
    </section>
  )
}
