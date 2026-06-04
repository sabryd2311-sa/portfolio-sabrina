import { useState } from 'react'

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contatto dal portfolio — ${form.nome}`)
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.messaggio}`)
    window.location.href = `mailto:sabryf.27@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contatti" className="py-24 bg-navy-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-divider" />
        <h2 className="section-title">Contatti</h2>
        <p className="section-subtitle">
          Hai un progetto in mente? Scrivimi, rispondo entro 24 ore.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:sabryf.27@gmail.com" className="text-white font-medium hover:text-cyan-electric transition-colors">
                  sabryf.27@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Telefono</p>
                <a href="tel:+393283476376" className="text-white font-medium hover:text-cyan-electric transition-colors">
                  +39 328 347 6376
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-electric" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/sabrina-detommaso-56582a384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-cyan-electric transition-colors"
                >
                  sabrina-detommaso
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyan-electric/15 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Messaggio pronto!</h3>
                <p className="text-slate-400 text-sm">Il tuo client email è stato aperto con il messaggio pre-compilato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Il tuo nome"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-electric/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tua@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-electric/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Messaggio</label>
                  <textarea
                    required
                    rows={5}
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    placeholder="Dimmi del tuo progetto..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-electric/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Invia messaggio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
