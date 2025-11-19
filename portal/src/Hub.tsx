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
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Medical Compliance Portal</h1>
          <Link to="/library" className="text-slate-300 hover:text-primary">Open Library →</Link>
        </header>
        <p className="text-slate-400 mb-8">A fluid, visual companion to explore equity-forward compliance, standards, and templates.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <motion.button
              key={t.title}
              onClick={() => go(t.tags)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-2xl p-6 text-left glass glow`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-20`} />
              <div className="relative">
                <div className="text-xs uppercase text-slate-400 mb-2">Preset</div>
                <div className="text-xl font-medium mb-3">{t.title}</div>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-slate-300">{tag}</span>
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
