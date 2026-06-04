import { useNavigate } from 'react-router-dom'

const kpi = [
  { label: 'Budget campagna', value: '€ 149.887' },
  { label: 'Lead generati', value: '2.571' },
  { label: 'Contratti chiusi', value: '14' },
  { label: 'Ricavi attribuiti', value: '€ 325.000' },
  { label: 'ROAS', value: '2.17x' },
]

const tools = [
  { name: 'ChatGPT / Gemini', desc: 'Prompt, contenuti, report ed Excel' },
  { name: 'Google Flow Labs', desc: 'Generazione clip video' },
  { name: 'Eleven Labs', desc: 'Voiceover e colonna sonora' },
  { name: 'Lovable', desc: 'Landing page e portfolio progetto' },
  { name: 'Canva', desc: 'Modifiche immagini e grafiche' },
  { name: 'LinkedIn Ads + Facebook Ads', desc: 'Distribuzione campagna B2B' },
]

export default function ProgettoSostiqa() {
  const navigate = useNavigate()

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
          Torna ai progetti
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-cyan-electric text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
            Progetto Master
          </span>
          <div className="section-divider" />
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Sostiqa — Campagna Marketing e-Bike AI
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Campagna di marketing B2B completa per Sostiqa, startup di e-bike sharing a ricarica autonoma solare. Progetto sviluppato integralmente con strumenti AI, dalla strategia alla produzione dei contenuti.
          </p>
        </div>

        {/* Cover */}
        <div className="glass-card overflow-hidden mb-8">
          <img
            src="/assets/images/sostiqa-cover.png"
            alt="Sostiqa e-bike sharing — campagna marketing B2B"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* KPI */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Risultati campagna
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {kpi.map((k) => (
              <div key={k.label} className="text-center bg-white/4 rounded-xl p-4">
                <div className="text-2xl font-bold text-cyan-electric mb-1">{k.value}</div>
                <div className="text-slate-400 text-xs leading-tight">{k.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Descrizione */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Il progetto
          </h2>
          <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <p>
              Sostiqa è una startup innovativa nel settore della mobilità sostenibile: propone un sistema di e-bike sharing con ricarica autonoma solare, pensato per aziende, campus universitari e strutture turistiche.
            </p>
            <p>
              Ho sviluppato l'intera campagna di marketing B2B — dalla definizione della strategia alla produzione dei contenuti — utilizzando esclusivamente strumenti AI. Il progetto ha incluso la creazione della landing page, del portfolio di presentazione, dei materiali pubblicitari (immagini e video) e la gestione delle campagne ads.
            </p>
            <p>
              I risultati ottenuti con un budget di circa €150.000 dimostrano l'efficacia dell'approccio AI-first: 2.571 lead qualificati, 14 contratti chiusi e €325.000 di ricavi attribuiti, con un ROAS di 2.17x.
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Strumenti utilizzati
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tools.map((t) => (
              <div key={t.name} className="flex items-start gap-3 bg-white/4 rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-cyan-electric mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://sostiqa-landingpage.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
          >
            Visita la Landing Page
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://sostiqa.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline justify-center"
          >
            Portfolio Progetto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  )
}
