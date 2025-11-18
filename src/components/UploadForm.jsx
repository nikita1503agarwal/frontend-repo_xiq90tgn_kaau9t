import { useState } from 'react'
import { api } from '../lib/api'

export default function UploadForm() {
  const [userId, setUserId] = useState('user@example.com')
  const [topic, setTopic] = useState('This Week Topic')
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [audioUrl, setAudioUrl] = useState('')
  const [transcript, setTranscript] = useState('')
  const [threadContent, setThreadContent] = useState('')
  const [status, setStatus] = useState('')

  const submitPicture = async (e) => {
    e.preventDefault()
    setStatus('Uploading picture card...')
    try {
      await api.post('/api/picture-cards', { user_id: userId, topic, image_url: imageUrl, caption, session_date: new Date(date) })
      setStatus('✅ Picture card uploaded')
    } catch (e) {
      setStatus('❌ ' + e.message)
    }
  }

  const submitVoice = async (e) => {
    e.preventDefault()
    setStatus('Uploading voice note...')
    try {
      await api.post('/api/voice-notes', { user_id: userId, topic, audio_url: audioUrl, transcript, session_date: new Date(date) })
      setStatus('✅ Voice note uploaded')
    } catch (e) {
      setStatus('❌ ' + e.message)
    }
  }

  const submitThread = async (e) => {
    e.preventDefault()
    setStatus('Creating thread...')
    try {
      await api.post('/api/threads', { user_id: userId, topic, content: threadContent, session_date: new Date(date) })
      setStatus('✅ Thread created')
    } catch (e) {
      setStatus('❌ ' + e.message)
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Upload</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Picture Card</h3>
          <form onSubmit={submitPicture} className="space-y-3">
            <input className="w-full px-3 py-2 rounded bg-white/10" value={userId} onChange={e=>setUserId(e.target.value)} placeholder="your email" />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="topic" />
            <input type="date" className="w-full px-3 py-2 rounded bg-white/10" value={date} onChange={e=>setDate(e.target.value)} />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="image url" />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={caption} onChange={e=>setCaption(e.target.value)} placeholder="caption" />
            <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Upload</button>
          </form>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Voice Note</h3>
          <form onSubmit={submitVoice} className="space-y-3">
            <input className="w-full px-3 py-2 rounded bg-white/10" value={userId} onChange={e=>setUserId(e.target.value)} placeholder="your email" />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="topic" />
            <input type="date" className="w-full px-3 py-2 rounded bg-white/10" value={date} onChange={e=>setDate(e.target.value)} />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={audioUrl} onChange={e=>setAudioUrl(e.target.value)} placeholder="audio url" />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={transcript} onChange={e=>setTranscript(e.target.value)} placeholder="transcript (optional)" />
            <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Upload</button>
          </form>
        </div>

        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-3">Build Thread</h3>
          <form onSubmit={submitThread} className="space-y-3">
            <input className="w-full px-3 py-2 rounded bg-white/10" value={userId} onChange={e=>setUserId(e.target.value)} placeholder="your email" />
            <input className="w-full px-3 py-2 rounded bg-white/10" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="topic" />
            <input type="date" className="w-full px-3 py-2 rounded bg-white/10" value={date} onChange={e=>setDate(e.target.value)} />
            <textarea className="w-full px-3 py-2 rounded bg-white/10 min-h-[120px]" value={threadContent} onChange={e=>setThreadContent(e.target.value)} placeholder="Your learnings, framework version, key takeaways..." />
            <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Create Thread</button>
          </form>
        </div>
      </div>
      {status && <p className="mt-4 text-blue-200">{status}</p>}
    </section>
  )
}
