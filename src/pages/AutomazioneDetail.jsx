import { useParams, useNavigate } from 'react-router-dom'
import { automazioni } from '../data/automazioni'

export default function AutomazioneDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const a = automazioni.find((x) => x.id === id)

  if (!a) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Progetto non trovato.</p>
          <button onClick={() => navigate('/')} className="btn-primary">Torna alla home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-electric transition-colors text-sm mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Torna alle automazioni
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="section-divider" />
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-1">
            {a.titolo}
          </h1>
          <p className="text-cyan-electric text-xl font-semibold mb-4">{a.sottotitolo}</p>
          <div className="flex flex-wrap gap-2">
            {a.stack.map((t) => (
              <span key={t} className="skill-badge text-xs">{t}</span>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div className="glass-card overflow-hidden mb-10">
          <img
            src={a.immagine}
            alt={`Workflow ${a.titolo}`}
            className="w-full rounded-xl"
          />
        </div>

        {/* Obiettivo */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Obiettivo
          </h2>
          <p className="text-slate-300 leading-relaxed">{a.obiettivo}</p>
        </div>

        {/* Architettura */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Architettura della soluzione
          </h2>
          <div className="space-y-6">
            {a.architettura.map((fase, i) => (
              <div key={i}>
                <h3 className="text-cyan-electric font-semibold text-sm mb-3">{fase.nome}</h3>
                <ol className="space-y-2">
                  {fase.passi.map((passo, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="w-5 h-5 rounded-full bg-cyan-electric/15 text-cyan-electric text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        {j + 1}
                      </span>
                      {passo}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Extra */}
        {a.extra && (
          <div className="glass-card p-6 mb-6 border-yellow-400/20 bg-yellow-400/3">
            <h2 className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-2">Extra</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{a.extra}</p>
          </div>
        )}

        {/* Problemi & Soluzioni */}
        {a.problemi.length > 0 && (
          <div className="glass-card p-6 mb-6">
            <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-orange-400 rounded-full inline-block" />
              Problemi & Soluzioni
            </h2>
            <div className="space-y-5">
              {a.problemi.map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-orange-400/15 text-orange-400 rounded border border-orange-400/20 flex-shrink-0">
                      Problema
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.problema}</p>
                  </div>
                  <div className="flex items-start gap-3 ml-4">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-400/15 text-green-400 rounded border border-green-400/20 flex-shrink-0">
                      Soluzione
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.soluzione}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competenze */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Competenze dimostrate
          </h2>
          <div className="flex flex-wrap gap-2">
            {a.competenze.map((c) => (
              <span key={c} className="skill-badge">{c}</span>
            ))}
          </div>
        </div>

        {/* Risultato */}
        <div className="rounded-xl border border-cyan-electric/20 bg-gradient-to-br from-cyan-electric/5 to-blue-500/5 p-6">
          <h2 className="text-cyan-electric font-bold text-sm uppercase tracking-wide mb-3">Risultato</h2>
          <p className="text-white leading-relaxed">{a.risultato}</p>
        </div>

      </div>
    </div>
  )
}
