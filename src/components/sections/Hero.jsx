import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const particlesInit = async (engine) => {
  await loadSlim(engine)
}

const particlesOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' } },
    modes: { grab: { distance: 160, links: { opacity: 0.5 } } },
  },
  particles: {
    color: { value: '#00d4ff' },
    links: { color: '#00d4ff', distance: 130, enable: true, opacity: 0.15, width: 1 },
    move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
    number: { density: { enable: true, area: 900 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
}

function HeroContent() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Circuit board background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-navy/65" />

      {/* Animated particles */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-24 pb-8">

        {/* Photo first on mobile, right on desktop */}
        <div className="flex-shrink-0 order-first lg:order-last opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-electric/30 to-blue-500/20 blur-2xl animate-glow-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-electric/30 animate-glow-pulse" />
            <div className="absolute inset-3 rounded-full border border-cyan-electric/15" />
            <img
              src="/assets/images/sabrina-profile.png"
              alt="Sabrina Detommaso — AI & Automation Specialist"
              className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left order-last lg:order-first">
          <p className="text-cyan-electric text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            AI & Automation Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.25s_forwards]">
            Sabrina<br />
            <span className="text-cyan-electric">Detommaso</span>
          </h1>
          <p className="text-slate-300 text-lg lg:text-xl max-w-xl leading-relaxed mb-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
            Aiuto le aziende ad integrare l'intelligenza artificiale senza complessità.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-[fadeInUp_0.6s_ease-out_0.55s_forwards]">
            <button onClick={() => scrollToSection('automazioni')} className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Vedi i progetti
            </button>
            <a href="/assets/cv/CV_Sabrina_Detommaso.pdf" download className="btn-outline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Scarica CV
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-14 justify-center lg:justify-start opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
            {[
              { num: '7', label: 'Flussi n8n' },
              { num: '11', label: 'Certificazioni' },
              { num: '2', label: 'Progetti reali' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-cyan-electric">{s.num}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
        <svg className="w-6 h-6 text-cyan-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <ParticlesProvider init={particlesInit}>
      <HeroContent />
    </ParticlesProvider>
  )
}
