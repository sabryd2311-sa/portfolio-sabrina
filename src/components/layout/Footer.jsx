export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>© 2026 Sabrina Detommaso · AI & Automation Specialist</p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:sabryf.27@gmail.com"
            className="hover:text-cyan-electric transition-colors"
          >
            sabryf.27@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sabrina-detommaso-56582a384/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-electric transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
