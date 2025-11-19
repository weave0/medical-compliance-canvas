import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import MiniSearch from 'minisearch'
import { ThreeBG } from './components/ThreeBG'
import { loadLibrary } from './content'
import { Sidebar } from './components/Sidebar'
import { Viewer } from './components/Viewer'

// Heroicons (inline SVG)
const BookmarkIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
const BookmarkSolidIcon = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" /></svg>
const ClockIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const HomeIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>

export type Doc = {
  id: string
  title: string
  path: string
  category: string
  content: string
  tags: string[]
}

export default function App() {
  const [docs, setDocs] = useState<Doc[]>([])
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Doc | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [tagFilter, setTagFilter] = useState<string[]>([])
  const [params, setParams] = useSearchParams()
  
  // Bookmarks & Recent
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('compliance-bookmarks') || '[]') } catch { return [] }
  })
  const [recentDocs, setRecentDocs] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('compliance-recent') || '[]') } catch { return [] }
  })
  const [showBookmarks, setShowBookmarks] = useState(false)
  const [showRecent, setShowRecent] = useState(false)
  
  // Role-based theming
  const [currentRole, setCurrentRole] = useState(params.get('role') || 'executive')

  useEffect(() => {
    loadLibrary().then((d: Doc[]) => {
      setDocs(d)
      setActive(d.find((x: Doc) => x.path.endsWith('README.md')) ?? d[0] ?? null)
    })
  }, [])

  // Initialize tag filter from URL (e.g., ?tags=Equity,Accreditation)
  useEffect(() => {
    const t = params.get('tags')
    if (t) setTagFilter(t.split(',').filter(Boolean))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Persist bookmarks & recent
  useEffect(() => {
    localStorage.setItem('compliance-bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])
  
  useEffect(() => {
    localStorage.setItem('compliance-recent', JSON.stringify(recentDocs))
  }, [recentDocs])
  
  // Track doc opens
  useEffect(() => {
    if (active && !recentDocs.includes(active.id)) {
      setRecentDocs(prev => [active.id, ...prev].slice(0, 10))
    }
  }, [active])

  const mini = useMemo(() => new MiniSearch<Doc>({
    fields: ['title', 'content', 'category'],
    storeFields: ['id','title','path','category']
  }), [])

  useEffect(() => {
    mini.removeAll()
    mini.addAll(docs)
  }, [docs, mini])

  const results = useMemo(() => {
    if (!query) return docs
    const r = mini.search(query, { prefix: true, fuzzy: 0.2 })
    const ids = new Set(r.map(x => x.id))
    return docs.filter(d => ids.has(d.id))
  }, [docs, query, mini])

  const filtered = useMemo(() => {
    const base = filter === 'all' ? results : results.filter(d => d.category === filter)
    if (!tagFilter.length) return base
    return base.filter(d => tagFilter.every(t => d.tags.includes(t)))
  }, [results, filter, tagFilter])

  const toggleTag = (t: string) => {
    setTagFilter(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  const clearTags = () => setTagFilter([])
  
  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id])
  }
  
  // Role-based color themes with enhanced contrast
  const roleThemes: Record<string, { accent: string; glow: string; badge: string; activeBorder: string }> = {
    executive: { accent: 'from-purple-500/40 to-pink-500/40', glow: 'shadow-purple-400/60', badge: 'bg-purple-500/25 text-purple-200 border-purple-400/40', activeBorder: 'border-purple-400' },
    compliance: { accent: 'from-blue-500/40 to-cyan-500/40', glow: 'shadow-blue-400/60', badge: 'bg-blue-500/25 text-blue-200 border-blue-400/40', activeBorder: 'border-blue-400' },
    equity: { accent: 'from-emerald-500/40 to-teal-500/40', glow: 'shadow-emerald-400/60', badge: 'bg-emerald-500/25 text-emerald-200 border-emerald-400/40', activeBorder: 'border-emerald-400' },
    quality: { accent: 'from-amber-500/40 to-orange-500/40', glow: 'shadow-amber-400/60', badge: 'bg-amber-500/25 text-amber-200 border-amber-400/40', activeBorder: 'border-amber-400' },
    clinical: { accent: 'from-red-500/40 to-rose-500/40', glow: 'shadow-red-400/60', badge: 'bg-red-500/25 text-red-200 border-red-400/40', activeBorder: 'border-red-400' },
    digital: { accent: 'from-indigo-500/40 to-violet-500/40', glow: 'shadow-indigo-400/60', badge: 'bg-indigo-500/25 text-indigo-200 border-indigo-400/40', activeBorder: 'border-indigo-400' }
  }
  const theme = roleThemes[currentRole] || roleThemes.executive
  
  const bookmarkedDocs = docs.filter(d => bookmarks.includes(d.id))
  const recentDocsData = recentDocs.map(id => docs.find(d => d.id === id)).filter(Boolean) as Doc[]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThreeBG />
      
      {/* Top Nav Bar */}
      <nav className={`relative z-20 px-4 md:px-6 py-4 border-b border-white/15 backdrop-blur-xl bg-gradient-to-r ${theme.accent} shadow-lg flex flex-wrap items-center justify-between gap-4`}>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center gap-2 text-white/95 hover:text-white transition-all duration-200 group">
            <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold hidden sm:inline">Executive Hub</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">Medical Compliance</h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3">
          {/* Role Switcher */}
          <select
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            className="px-3 md:px-4 py-2 rounded-xl bg-white/15 border border-white/25 text-xs md:text-sm text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/40 cursor-pointer hover:bg-white/20 transition-all duration-200 font-medium"
          >
            <option value="executive">Executive</option>
            <option value="compliance">Compliance</option>
            <option value="equity">Equity</option>
            <option value="quality">Quality</option>
            <option value="clinical">Clinical</option>
            <option value="digital">Digital</option>
          </select>
          
          {/* Bookmarks Toggle */}
          <button
            onClick={() => { setShowBookmarks(!showBookmarks); setShowRecent(false) }}
            className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-xl border border-white/25 text-xs md:text-sm text-white backdrop-blur-md transition-all duration-200 font-medium ${showBookmarks ? 'bg-white/30 shadow-glow-sm' : 'bg-white/15 hover:bg-white/25'}`}
          >
            <BookmarkIcon className="w-4 h-4" />
            <span className="hidden sm:inline">({bookmarks.length})</span>
          </button>
          
          {/* Recent Toggle */}
          <button
            onClick={() => { setShowRecent(!showRecent); setShowBookmarks(false) }}
            className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-xl border border-white/25 text-xs md:text-sm text-white backdrop-blur-md transition-all duration-200 font-medium ${showRecent ? 'bg-white/30 shadow-glow-sm' : 'bg-white/15 hover:bg-white/25'}`}
          >
            <ClockIcon className="w-4 h-4" />
            <span className="hidden sm:inline">({recentDocs.length})</span>
          </button>
        </div>
      </nav>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 md:p-5">
        <header className="lg:col-span-12 flex items-center justify-end">
          <div className="text-xs md:text-sm text-slate-400 font-medium">
            <span className="text-primary-light">{docs.length}</span> docs • <span className="text-primary-light">{filtered.length}</span> shown
          </div>
        </header>
        <aside className="lg:col-span-3 glass-strong p-5 md:p-6 rounded-2xl shadow-glow">
          <Sidebar
            query={query}
            setQuery={setQuery}
            filter={filter}
            setFilter={setFilter}
            docs={docs}
          />
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Active Tag Filters</div>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(docs.flatMap(d => d.tags))).sort().map(t => (
                <button 
                  key={t} 
                  onClick={() => toggleTag(t)} 
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                    tagFilter.includes(t)
                      ? 'border-primary bg-primary/20 text-primary shadow-glow-sm' 
                      : 'border-white/10 bg-slate-900/40 text-slate-300 hover:border-white/20 hover:bg-slate-900/60'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {tagFilter.length > 0 && (
              <button 
                className="mt-4 text-xs text-slate-400 hover:text-primary-light transition-colors duration-200 font-medium" 
                onClick={clearTags}
              >
                ✕ Clear all tags
              </button>
            )}
          </div>
        </aside>
        <main className="lg:col-span-5 space-y-4">
          <AnimatePresence mode="wait">
            {showBookmarks ? (
              <motion.div key="bookmarks" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-4">
                <div className="glass p-4 glow">
                  <h1 className="text-xl md:text-2xl font-semibold">📌 Bookmarks</h1>
                  <p className="text-xs md:text-sm text-slate-300">{bookmarkedDocs.length} saved</p>
                </div>
                {bookmarkedDocs.length === 0 ? (
                  <div className="glass p-8 text-center text-slate-400 text-sm">
                    No bookmarks yet. Click the bookmark icon on any document to save it.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bookmarkedDocs.map(d => (
                      <motion.button
                        key={d.id}
                        className={`glass p-4 text-left border-2 ${theme.badge.split(' ')[2]} hover:shadow-lg relative`}
                        onClick={() => { setActive(d); setShowBookmarks(false) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <BookmarkSolidIcon className="w-5 h-5 text-yellow-400 absolute top-3 right-3" />
                        <div className={`text-xs uppercase tracking-wide ${theme.badge.split(' ')[1]}`}>{d.category}</div>
                        <div className="text-base md:text-lg font-medium pr-8">{d.title}</div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {d.tags.slice(0,4).map(t => (
                            <span key={t} className={`text-[10px] px-2 py-0.5 border rounded-full ${theme.badge}`}>{t}</span>
                          ))}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : showRecent ? (
              <motion.div key="recent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-4">
                <div className="glass p-4 glow">
                  <h1 className="text-xl md:text-2xl font-semibold">🕒 Recent</h1>
                  <p className="text-xs md:text-sm text-slate-300">Last {recentDocsData.length} documents</p>
                </div>
                {recentDocsData.length === 0 ? (
                  <div className="glass p-8 text-center text-slate-400 text-sm">
                    No recent documents yet. Open any document to see it here.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentDocsData.map(d => (
                      <motion.button
                        key={d.id}
                        className={`glass p-4 text-left border-2 ${theme.badge.split(' ')[2]} hover:shadow-lg`}
                        onClick={() => { setActive(d); setShowRecent(false) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`text-xs uppercase tracking-wide ${theme.badge.split(' ')[1]}`}>{d.category}</div>
                        <div className="text-base md:text-lg font-medium">{d.title}</div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {d.tags.slice(0,4).map(t => (
                            <span key={t} className={`text-[10px] px-2 py-0.5 border rounded-full ${theme.badge}`}>{t}</span>
                          ))}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div key="library" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="glass p-4 glow mb-4">
                  <h1 className="text-xl md:text-2xl font-semibold">Knowledge Canvas</h1>
                  <p className="text-xs md:text-sm text-slate-300">Drag through curated cards below. Click to open.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {filtered.map(d => (
                      <motion.button
                        key={d.id}
                        className="glass p-4 text-left hover:border-primary/40 hover:shadow-lg relative group"
                        layout
                        onClick={() => setActive(d)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(d.id) }}
                          className="absolute top-3 right-3 p-1 opacity-0 group-hover:opacity-100 hover:scale-110 transition z-10"
                        >
                          {bookmarks.includes(d.id) ? (
                            <BookmarkSolidIcon className="w-5 h-5 text-yellow-400" />
                          ) : (
                            <BookmarkIcon className="w-5 h-5 text-slate-400 hover:text-yellow-400" />
                          )}
                        </button>
                        <div className="text-primary text-xs uppercase tracking-wide">{d.category}</div>
                        <div className="text-base md:text-lg font-medium pr-8">{d.title}</div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {d.tags.slice(0,6).map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 border border-white/10 rounded-full text-slate-400">{t}</span>
                          ))}
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <section className="lg:col-span-4 glass p-4 glow max-h-screen overflow-hidden">
          <Viewer doc={active} />
        </section>
      </div>
    </div>
  )
}
