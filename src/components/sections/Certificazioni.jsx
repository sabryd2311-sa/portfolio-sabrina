import { certificazioni } from '../../data/certificazioni'

const categoryColors = {
  'AI & Automation': 'border-cyan-electric/30 bg-cyan-electric/5',
  'AI & Marketing': 'border-purple-400/30 bg-purple-400/5',
  'Docenza': 'border-yellow-400/40 bg-yellow-400/8',
  'AI': 'border-cyan-electric/25 bg-cyan-electric/5',
  'Sviluppo': 'border-green-400/30 bg-green-400/5',
  'Soft Skills': 'border-pink-400/30 bg-pink-400/5',
  'Data': 'border-blue-400/30 bg-blue-400/5',
}

const categoryIconColors = {
  'AI & Automation': 'text-cyan-electric',
  'AI & Marketing': 'text-purple-400',
  'Docenza': 'text-yellow-400',
  'AI': 'text-cyan-electric',
  'Sviluppo': 'text-green-400',
  'Soft Skills': 'text-pink-400',
  'Data': 'text-blue-400',
}

export default function Certificazioni() {
  return (
    <section id="certificazioni" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider" />
        <h2 className="section-title">Certificazioni</h2>
        <p className="section-subtitle">
          Percorso formativo continuo in AI, automazione, sviluppo e comunicazione.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificazioni.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-electric/5 ${
                categoryColors[cert.categoria] || 'border-white/10 bg-white/3'
              } ${cert.highlight ? 'ring-1 ring-yellow-400/40' : ''}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  cert.highlight ? 'bg-yellow-400/15' : 'bg-white/5'
                }`}>
                  {cert.highlight ? (
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ) : (
                    <svg className={`w-4 h-4 ${categoryIconColors[cert.categoria] || 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-slate-500 text-right leading-tight">{cert.data}</span>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                {cert.titolo}
                {cert.highlight && <span className="ml-2 text-yellow-400 text-xs">★ Docente</span>}
              </h3>
              <p className="text-slate-500 text-xs">{cert.ente}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
