import { useNavigate } from 'react-router-dom'

const tools = [
  { name: 'ChatGPT / Gemini', desc: 'Ideazione concept, scrittura script e prompt per la generazione immagini' },
  { name: 'Google Flow Labs', desc: 'Generazione delle clip video dai frame AI' },
  { name: 'Eleven Labs', desc: 'Voiceover professionale e colonna sonora' },
  { name: 'Canva', desc: 'Montaggio finale e modifiche grafiche' },
]

export default function ProgettoSpot() {
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
          <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20 mb-4">
            Progetto Formativo
          </span>
          <div className="section-divider" />
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Spot Pubblicitario AI-Generated
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Spot pubblicitario creato interamente con strumenti di intelligenza artificiale durante il corso Academy Rapido. Un progetto che dimostra le possibilità della produzione video AI-first.
          </p>
        </div>

        {/* Video player */}
        <div className="glass-card overflow-hidden mb-8">
          <video
            controls
            className="w-full rounded-xl"
            poster="/assets/images/spot-cover.jpg"
          >
            <source src="/assets/video/spot-pubblicitario.mp4" type="video/mp4" />
            Il tuo browser non supporta la riproduzione video.
          </video>
        </div>

        {/* Descrizione */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Il progetto
          </h2>
          <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <p>
              Nell'ambito del corso <strong className="text-white">AI Marketing: Strategy & Smart Coding</strong> di Academy Rapido, ho sviluppato uno spot pubblicitario utilizzando esclusivamente strumenti AI — dalla fase di concept e scriptwriting fino alla produzione video e audio.
            </p>
            <p>
              Il processo ha incluso: ideazione del concept con ChatGPT, generazione dei frame visivi con modelli AI, animazione delle clip con Google Flow Labs, voiceover e colonna sonora con Eleven Labs, e montaggio finale con Canva.
            </p>
            <p>
              Questo progetto dimostra come la produzione video professionale sia ora accessibile senza attrezzatura tradizionale, grazie alla combinazione strategica di più strumenti AI specializzati.
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="glass-card p-6">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-cyan-electric rounded-full inline-block" />
            Pipeline di produzione AI
          </h2>
          <div className="space-y-3">
            {tools.map((t, i) => (
              <div key={t.name} className="flex items-start gap-4 bg-white/4 rounded-lg p-4">
                <div className="w-7 h-7 rounded-full bg-cyan-electric/15 text-cyan-electric text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
