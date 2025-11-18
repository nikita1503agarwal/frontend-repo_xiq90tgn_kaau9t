import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function ProgressDashboard() {
  const [userId, setUserId] = useState('user@example.com')
  const [metrics, setMetrics] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await api.get(`/api/metrics/${encodeURIComponent(userId)}`)
      setMetrics(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">My Progress</h2>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <input className="px-3 py-2 rounded bg-white/10" value={userId} onChange={e=>setUserId(e.target.value)} placeholder="your email" />
          <button onClick={load} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Refresh</button>
          <span className="text-blue-200">Backend: {api.baseUrl}</span>
        </div>
      </div>

      {error && <p className="text-red-300 mb-4">{error}</p>}

      {loading && <p className="text-blue-200">Loading...</p>}

      {metrics && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Attendance</h3>
            <p className="text-3xl font-bold">{metrics.sessions_attended}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Pitches</h3>
            <p className="text-3xl font-bold">{metrics.pitches_attempted}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">SD Selections</h3>
            <p className="text-3xl font-bold">{metrics.sd_selected}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Picture Cards</h3>
            <p className="text-3xl font-bold">{metrics.picture_cards}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Voice Notes</h3>
            <p className="text-3xl font-bold">{metrics.voice_notes}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Thread Contributions</h3>
            <p className="text-3xl font-bold">{metrics.thread_contributions}</p>
          </div>
        </div>
      )}

      {metrics?.weekly_progress?.length > 0 && (
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Week-to-week improvement</h3>
          <div className="grid grid-cols-12 gap-2 items-end h-40">
            {metrics.weekly_progress.map((w) => (
              <div key={w.week} className="text-center">
                <div className="mx-auto w-4 bg-blue-500 rounded" style={{ height: `${Math.min(w.count*20, 140)}px` }} />
                <div className="text-[10px] text-blue-200 mt-1">{w.week}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
