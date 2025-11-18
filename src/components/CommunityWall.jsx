import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function CommunityWall() {
  const [cards, setCards] = useState([])
  const [threads, setThreads] = useState([])
  const [voices, setVoices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [c, t, v] = await Promise.all([
          api.get('/api/picture-cards'),
          api.get('/api/threads'),
          api.get('/api/voice-notes'),
        ])
        setCards(c)
        setThreads(t)
        setVoices(v)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Community Wall</h2>
      {loading && <p className="text-blue-200">Loading...</p>}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Picture Cards</h3>
          <div className="grid grid-cols-2 gap-3">
            {cards.map((c,i)=> (
              <div key={i} className="bg-white/10 rounded overflow-hidden">
                <img src={c.image_url} alt={c.caption || 'Picture'} className="w-full h-28 object-cover" />
                <div className="p-2 text-xs text-blue-100 truncate">{c.caption || c.topic}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Best Threads</h3>
          <div className="space-y-3">
            {threads.slice(0,8).map((t,i)=> (
              <div key={i} className="bg-white/10 rounded p-3 text-sm line-clamp-4">
                <div className="text-blue-200 text-xs mb-1">{t.topic}</div>
                {t.content}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Best Voice Notes</h3>
          <div className="space-y-2">
            {voices.slice(0,8).map((v,i)=> (
              <a key={i} href={v.audio_url} target="_blank" className="block bg-white/10 rounded p-3 text-sm text-blue-100 truncate hover:bg-white/20">
                {v.topic} — open audio
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
