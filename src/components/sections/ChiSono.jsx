const skills = ['n8n', 'Prompt Engineering', 'API Integration', 'Agenti AI', 'No-Code', 'Creazione Contenuti AI', 'Google Workspace', 'Automazione Workflow']
const softSkills = ['Problem Solving', 'Comunicazione Efficace', 'Pensiero Critico', 'Creatività', 'Adattabilità']

export default function ChiSono() {
  return (
    <section id="chi-sono" className="py-24 bg-navy-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div className="section-divider" />
            <h2 className="section-title mb-6">Chi sono</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Sono una <span className="text-white font-medium">AI & Automation Specialist</span> con una forte passione per il mondo dell'intelligenza artificiale applicata al business. Mi occupo di progettare e implementare soluzioni di automazione intelligente che permettono alle aziende di lavorare in modo più efficiente.
              </p>
              <p>
                Ho maturato esperienza concreta nella costruzione di <span className="text-cyan-electric font-medium">workflow n8n complessi</span>, nell'integrazione di agenti AI, nel prompt engineering strategico e nello sviluppo di pipeline end-to-end che connettono strumenti cloud, database e modelli linguistici.
              </p>
              <p>
                Ho completato un <span className="text-white font-medium">progetto master di marketing AI</span> end-to-end — dalla strategia alla produzione dei contenuti — sviluppando una campagna B2B reale con risultati misurabili e ottenendo un attestato di completamento da Academy Rapido.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="mailto:sabryf.27@gmail.com"
                className="btn-primary text-sm"
              >
                Contattami
              </a>
              <a
                href="https://www.linkedin.com/in/sabrina-detommaso-56582a384/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                Competenze tecniche
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
                Soft skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-electric/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Workshop Ai&Marketing · Progetto Finale</p>
                  <p className="text-slate-400 text-sm mt-1">Academy Rapido · 24h · Feb–Apr 2026 — Attestato di partecipazione e completamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
