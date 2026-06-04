import { useNavigate } from 'react-router-dom'

const kpi = [
  { label: 'Budget campagna', value: '€ 149.887' },
  { label: 'Lead generati', value: '2.571' },
  { label: 'Contratti chiusi', value: '14' },
  { label: 'Ricavi attribuiti', value: '€ 325.000' },
  { label: 'ROAS', value: '2.17x' },
]

const stackSostiqa = ['LinkedIn Ads', 'Facebook Ads', 'AI', 'B2B Marketing', 'ChatGPT', 'Gemini', 'Lovable', 'Canva']
const stackSpot = ['Google Flow Labs', 'Eleven Labs', 'ChatGPT', 'Gemini', 'Canva']

export default function ProgettiPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-navy pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider" />
        <h1 className="section-title text-4xl mb-2">Altri Progetti</h1>
        <p className="section-subtitle">
          Progetti reali che combinano strategia di marketing, AI generativa e produzione di contenuti.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Sostiqa */}
          <div className="glass-card overflow-hidden flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/sostiqa-cover.png"
                alt="Progetto Sostiqa — campagna marketing e-bike B2B"
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-electric text-navy text-xs font-bold px-3 py-1 rounded-full">
                  Progetto Master
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-white font-bold text-xl mb-2">Sostiqa — Campagna Marketing e-Bike AI</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Campagna B2B completa per e-bike sharing a ricarica autonoma: strategia, contenuti AI, landing page e gestione ads su LinkedIn e Facebook.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {kpi.map((k) => (
                  <div key={k.label} className="bg-white/4 rounded-lg p-3 text-center">
                    <div className="text-cyan-electric font-bold text-sm">{k.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5 leading-tight">{k.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {stackSostiqa.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan-electric/8 border border-cyan-electric/20 text-cyan-electric/80">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <button onClick={() => navigate('/progetti/sostiqa')} className="btn-outline text-sm flex-1 justify-center">
                  Scopri di più
                </button>
                <a href="https://sostiqa-landingpage.lovable.app/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex-1 justify-center">
                  Landing Page
                </a>
              </div>
            </div>
          </div>

          {/* Spot */}
          <div className="glass-card overflow-hidden flex flex-col">
            <div className="relative overflow-hidden h-60">
              <img
                src="/assets/images/spot-cover.jpg"
                alt="Spot pubblicitario AI-Generated"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                  Progetto Formativo
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-white font-bold text-xl mb-2">Spot Pubblicitario AI-Generated</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Spot pubblicitario creato interamente con strumenti AI durante il corso Academy Rapido. Generazione video con Google Flow Labs, voiceover e colonna sonora con Eleven Labs.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {stackSpot.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan-electric/8 border border-cyan-electric/20 text-cyan-electric/80">{t}</span>
                ))}
              </div>
              <div className="mt-auto">
                <button onClick={() => navigate('/progetti/spot')} className="btn-outline text-sm w-full justify-center">
                  Guarda lo spot
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
