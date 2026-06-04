import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { automazioni } from '../data/automazioni'

function AutomazioneCard({ automazione }) {
  const [imgOpen, setImgOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="glass-card overflow-hidden flex flex-col">
        <div
          className="relative overflow-hidden cursor-zoom-in group"
          onClick={() => setImgOpen(true)}
        >
          <img
            src={automazione.immagine}
            alt={`Screenshot workflow ${automazione.titolo}`}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              Ingrandisci
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-white font-bold text-lg leading-tight">
            {automazione.titolo}
            <span className="text-cyan-electric block text-base font-semibold">{automazione.sottotitolo}</span>
          </h3>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-1">
            {automazione.descrizione}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {automazione.stack.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan-electric/8 border border-cyan-electric/20 text-cyan-electric/80">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => navigate(`/automazioni/${automazione.id}`)}
            className="mt-5 btn-outline text-sm justify-center"
          >
            Scopri di più
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {imgOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setImgOpen(false)}
        >
          <img
            src={automazione.immagine}
            alt={`Workflow ${automazione.titolo}`}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setImgOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default function AutomazioniPage() {
  return (
    <div className="min-h-screen bg-navy pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider" />
        <h1 className="section-title text-4xl mb-2">Automazioni n8n</h1>
        <p className="section-subtitle">
          7 workflow completi che dimostrano competenze reali in automazione, integrazione API e intelligenza artificiale applicata.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automazioni.map((a) => (
            <AutomazioneCard key={a.id} automazione={a} />
          ))}
        </div>
      </div>
    </div>
  )
}
