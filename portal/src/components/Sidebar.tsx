import { Doc } from '../App'

const SearchIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>

export function Sidebar({ query, setQuery, filter, setFilter, docs }: {
  query: string
  setQuery: (s: string) => void
  filter: string
  setFilter: (s: string) => void
  docs: Doc[]
}) {
  const categories = Array.from(new Set(docs.map(d => d.category))).sort()
  const counts = (cat: string) => docs.filter(d => d.category === cat).length
  
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label htmlFor="search" className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
          Search Knowledge Base
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary-400 transition-colors">
            <SearchIcon />
          </div>
          <input
            id="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search documents, topics, standards..."
            className="w-full rounded-xl glass border-slate-700/50 pl-11 pr-4 py-3.5 text-slate-100 placeholder:text-slate-500
              focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 focus:shadow-glow-sm
              transition-all duration-200"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-slate-600">Try:</span>
          {['EMTALA', 'Health Equity', 'HIPAA', 'SDOH'].map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="text-primary-400 hover:text-primary-300 hover:underline decoration-primary-500/50 underline-offset-2 transition-colors"
            >
              {term}
            </button>
          ))}
        </p>
      </div>

      {/* Category Filters */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
          Filter by Category
        </label>
        <div className="flex flex-wrap gap-2">
          <button 
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter==='all'
                ? 'bg-gradient-to-r from-primary-500/20 to-primary-600/20 border-2 border-primary-500/60 text-primary-300 shadow-glow-sm' 
                : 'glass border-slate-700/50 text-slate-300 hover:border-slate-600 hover:text-slate-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All Documents
          </button>
          {categories.map(c => (
            <button 
              key={c} 
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                filter===c
                  ? 'bg-gradient-to-r from-primary-500/20 to-primary-600/20 border-2 border-primary-500/60 text-primary-300 shadow-glow-sm' 
                  : 'glass border-slate-700/50 text-slate-300 hover:border-slate-600 hover:text-slate-200'
              }`}
              onClick={() => setFilter(c)}
            >
              {c} <span className="text-slate-500 ml-1">({counts(c)})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
