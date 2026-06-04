import { useNavigate } from 'react-router-dom'

export default function ProgettiTeaser() {
  const navigate = useNavigate()

  return (
    <section id="progetti" className="py-24 bg-navy-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-2">
          <div>
            <div className="section-divider" />
            <h2 className="section-title">Altri Progetti</h2>
          </div>
          <button
            onClick={() => navigate('/progetti')}
            className="hidden md:flex items-center gap-2 text-cyan-electric hover:text-white transition-colors text-sm font-medium mb-1"
          >
            Vedi tutti
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <p className="section-subtitle">
          Campagne marketing AI-driven e produzione di contenuti con strumenti generativi.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Sostiqa card compatta */}
          <div
            className="glass-card overflow-hidden cursor-pointer group"
            onClick={() => navigate('/progetti/sostiqa')}
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/sostiqa-cover.png"
                alt="Progetto Sostiqa"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-cyan-electric text-navy text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Progetto Master
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold mb-1">Sostiqa — Campagna Marketing e-Bike AI</h3>
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">Campagna B2B con AI: €325k ricavi attribuiti, ROAS 2.17x, 2.571 lead.</p>
              <div className="flex items-center gap-2 text-cyan-electric text-xs font-medium group-hover:gap-3 transition-all">
                Scopri il case study
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Spot card compatta */}
          <div
            className="glass-card overflow-hidden cursor-pointer group"
            onClick={() => navigate('/progetti/spot')}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src="/assets/images/spot-cover.jpg"
                alt="Spot pubblicitario AI-Generated"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors" />
              <div className="absolute top-3 left-3">
                <span className="bg-white/10 text-white text-xs font-medium px-2.5 py-0.5 rounded-full border border-white/20">
                  Progetto Formativo
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold mb-1">Spot Pubblicitario AI-Generated</h3>
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">Produzione video 100% AI: script, immagini, voiceover e montaggio.</p>
              <div className="flex items-center gap-2 text-cyan-electric text-xs font-medium group-hover:gap-3 transition-all">
                Guarda lo spot
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => navigate('/progetti')} className="btn-outline">
            Vedi tutti i progetti
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
