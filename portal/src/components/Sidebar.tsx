import { Doc } from '../App'

export function Sidebar({ query, setQuery, filter, setFilter, docs }: {
  query: string
  setQuery: (s: string) => void
  filter: string
  setFilter: (s: string) => void
  docs: Doc[]
}) {
  const categories = Array.from(new Set(docs.map(d => d.category)))
  const counts = (cat: string) => docs.filter(d => d.category === cat).length
  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase text-slate-400 mb-1">Search</div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search documents..."
          className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 mb-2">Filters</div>
        <div className="flex flex-wrap gap-2">
          <button className={`px-3 py-1 rounded-full border ${filter==='all'?'border-primary text-primary':'border-white/10 text-slate-300'}`} onClick={() => setFilter('all')}>All</button>
          {categories.map(c => (
            <button key={c} className={`px-3 py-1 rounded-full border ${filter===c?'border-primary text-primary':'border-white/10 text-slate-300'}`} onClick={() => setFilter(c)}>
              {c} <span className="text-slate-400">({counts(c)})</span>
            </button>
          ))}
        </div>
      </div>
      <div className="text-xs text-slate-400">
        Tip: Type keywords like “EMTALA”, “CLAS”, “equity”, “HEDIS”.
      </div>
    </div>
  )
}
