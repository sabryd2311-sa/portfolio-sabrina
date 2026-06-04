import { useNavigate } from 'react-router-dom'
import { automazioni } from '../../data/automazioni'

export default function AutomazioniTeaser() {
  const navigate = useNavigate()
  const preview = automazioni.slice(0, 3)

  return (
    <section id="automazioni" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-2">
          <div>
            <div className="section-divider" />
            <h2 className="section-title">Automazioni n8n</h2>
          </div>
          <button
            onClick={() => navigate('/automazioni')}
            className="hidden md:flex items-center gap-2 text-cyan-electric hover:text-white transition-colors text-sm font-medium mb-1"
          >
            Vedi tutti i 7 workflow
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <p className="section-subtitle">
          7 workflow completi con n8n, AI agents, integrazioni API e automazioni real-world.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {preview.map((a) => (
            <div
              key={a.id}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => navigate(`/automazioni/${a.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={a.immagine}
                  alt={a.titolo}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {a.titolo}
                  <span className="text-cyan-electric block text-xs mt-0.5">{a.sottotitolo}</span>
                </h3>
                <div className="flex flex-wrap gap-1 mt-3">
                  {a.stack.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-cyan-electric/8 border border-cyan-electric/15 text-cyan-electric/70">
                      {t}
                    </span>
                  ))}
                  {a.stack.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-500">
                      +{a.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => navigate('/automazioni')} className="btn-outline">
            Vedi tutti i 7 workflow
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
