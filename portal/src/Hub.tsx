import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const tiles = [
  { title: 'Executive Leadership', tags: ['Health Equity','Accreditation'], color: 'from-primary/40 to-accent/30' },
  { title: 'Compliance & Legal', tags: ['Section 1557','HIPAA','EMTALA','Stark/AKS'], color: 'from-emerald-400/30 to-cyan-300/20' },
  { title: 'Health Equity & CLAS', tags: ['Health Equity','CLAS','Culture/Language'], color: 'from-fuchsia-400/30 to-rose-300/20' },
  { title: 'Quality & Accreditation', tags: ['Accreditation','NCQA','Joint Commission','CMS CoPs'], color: 'from-indigo-400/30 to-sky-300/20' },
  { title: 'Clinical Operations', tags: ['Patient Safety','EMTALA','OSHA'], color: 'from-amber-400/30 to-orange-300/20' },
  { title: 'Digital Health & Data', tags: ['Digital Health','SDOH','Value-Based Care'], color: 'from-lime-400/30 to-teal-300/20' },
]

export default function Hub() {
  const nav = useNavigate()
  const go = (tags: string[]) => nav(`/library?tags=${encodeURIComponent(tags.join(','))}`)
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
      <div className="relative z-10 p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light via-primary to-accent bg-clip-text text-transparent">
              Medical Compliance Portal
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">A fluid, visual companion to explore equity-forward compliance, standards, and templates.</p>
          </div>
          <Link 
            to="/library" 
            className="px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-glow-sm transition-all duration-200 font-medium text-sm whitespace-nowrap"
          >
            Open Library →
          </Link>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((t) => (
            <motion.button
              key={t.title}
              onClick={() => go(t.tags)}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative overflow-hidden rounded-2xl p-6 md:p-7 text-left glass-strong hover:shadow-glow transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-primary-light font-semibold mb-3">Role Preset</div>
                <div className="text-xl md:text-2xl font-bold mb-4 text-slate-100">{t.title}</div>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[11px] px-3 py-1 bg-slate-900/60 border border-white/20 rounded-full text-slate-200 font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
