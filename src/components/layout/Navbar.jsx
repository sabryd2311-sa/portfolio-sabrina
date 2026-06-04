import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/#chi-sono', label: 'Chi sono' },
  { href: '/automazioni', label: 'Automazioni', page: true },
  { href: '/progetti', label: 'Progetti', page: true },
  { href: '/#certificazioni', label: 'Certificazioni' },
  { href: '/#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        return
      }
      e.preventDefault()
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tight hover:text-cyan-electric transition-colors">
          <span className="text-cyan-electric">S</span>abrina
          <span className="text-cyan-electric">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.page ? (
                <Link
                  to={l.href}
                  className="text-slate-300 hover:text-cyan-electric transition-colors text-sm font-medium"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="text-slate-300 hover:text-cyan-electric transition-colors text-sm font-medium"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="/assets/cv/CV_Sabrina_Detommaso.pdf"
              download
              className="btn-primary text-sm py-2 px-4"
            >
              Scarica CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            l.page ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-electric transition-colors text-sm font-medium py-1"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-slate-300 hover:text-cyan-electric transition-colors text-sm font-medium py-1"
              >
                {l.label}
              </a>
            )
          ))}
          <a
            href="/assets/cv/CV_Sabrina_Detommaso.pdf"
            download
            className="btn-primary text-sm py-2 px-4 w-fit"
          >
            Scarica CV
          </a>
        </div>
      )}
    </header>
  )
}
