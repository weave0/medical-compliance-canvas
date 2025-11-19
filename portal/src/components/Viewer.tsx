import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Doc } from '../App'
import jsPDF from 'jspdf'
import { useState } from 'react'

const DownloadIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
const ExpandIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
const CompressIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" /></svg>

function extractBrief(md: string): string | null {
  const re = /^(##+)[ \t]*(Brief|Executive Brief|Summary)[\s\r\n]+([\s\S]*?)(?=^##\s|^#\s|\Z)/gmi
  const m = re.exec(md)
  return m?.[3]?.trim() || null
}

export function Viewer({ doc }: { doc: Doc | null }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  if (!doc) return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <svg className="w-16 h-16 text-slate-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <p className="text-muted text-lg font-medium">Select a document to view</p>
        <p className="text-subtle text-sm mt-2">Choose from the library on the left</p>
      </div>
    </div>
  )
  
  const brief = extractBrief(doc.content)
  
  const exportPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const margin = 20
    const maxWidth = pageWidth - 2 * margin
    let yPos = margin
    
    // Title
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    const titleLines = pdf.splitTextToSize(doc.title, maxWidth)
    pdf.text(titleLines, margin, yPos)
    yPos += titleLines.length * 8 + 5
    
    // Path
    pdf.setFontSize(9)
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(128, 128, 128)
    pdf.text(doc.path, margin, yPos)
    yPos += 8
    
    // Content
    pdf.setFontSize(11)
    pdf.setTextColor(0, 0, 0)
    const content = doc.content.replace(/[#*`]/g, '').replace(/\n{3,}/g, '\n\n')
    const lines = pdf.splitTextToSize(content, maxWidth)
    
    lines.forEach((line: string) => {
      if (yPos > pdf.internal.pageSize.getHeight() - margin) {
        pdf.addPage()
        yPos = margin
      }
      pdf.text(line, margin, yPos)
      yPos += 6
    })
    
    pdf.save(`${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`)
  }
  
  const ViewerContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-slate-700/50">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold text-heading truncate">{doc.title}</h2>
          <div className="text-sm text-muted mt-1.5 font-mono truncate">{doc.path}</div>
        </div>
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-strong text-slate-200 text-sm font-medium transition-all shadow-sm hover:shadow-glow-sm"
            title={isExpanded ? "Collapse viewer" : "Expand viewer"}
          >
            {isExpanded ? <CompressIcon className="w-4 h-4" /> : <ExpandIcon className="w-4 h-4" />}
            <span className="hidden sm:inline">{isExpanded ? 'Collapse' : 'Expand'}</span>
          </button>
          <button
            onClick={exportPDF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/20 hover:bg-primary-500/30 border-2 border-primary-500/40 hover:border-primary-400/60 text-primary-300 hover:text-primary-200 text-sm font-medium transition-all shadow-glow-sm hover:shadow-glow"
            title="Export to PDF"
          >
            <DownloadIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom px-1 prose prose-invert prose-slate max-w-none
        prose-headings:text-heading prose-headings:font-semibold prose-headings:tracking-tight
        prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-3 prose-h1:border-b-2 prose-h1:border-primary-500/30
        prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-slate-100
        prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-200
        prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2 prose-h4:text-slate-300
        prose-p:text-body prose-p:text-base prose-p:leading-7 prose-p:mb-4
        prose-a:text-primary-400 prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary-300 hover:prose-a:underline prose-a:decoration-primary-500/50 prose-a:underline-offset-2
        prose-strong:text-slate-100 prose-strong:font-semibold
        prose-em:text-slate-200
        prose-ul:text-body prose-ul:my-4
        prose-ol:text-body prose-ol:my-4
        prose-li:my-2 prose-li:leading-7
        prose-code:text-primary-300 prose-code:bg-primary-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-code:border prose-code:border-primary-500/20
        prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-700/50 prose-pre:rounded-lg prose-pre:shadow-inner prose-pre:p-4
        prose-blockquote:border-l-4 prose-blockquote:border-primary-500/50 prose-blockquote:bg-slate-800/30 prose-blockquote:text-slate-300 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:rounded-r
        prose-hr:border-slate-700/50 prose-hr:my-8
        prose-table:border-collapse prose-table:border prose-table:border-slate-700/50 prose-table:rounded-lg prose-table:overflow-hidden prose-table:my-6
        prose-thead:bg-slate-800/50
        prose-th:bg-slate-800/80 prose-th:text-slate-100 prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:border-b-2 prose-th:border-primary-500/30
        prose-td:border prose-td:border-slate-700/30 prose-td:px-4 prose-td:py-3 prose-td:text-slate-300
        prose-tr:border-b prose-tr:border-slate-700/30 hover:prose-tr:bg-slate-800/30
        prose-img:rounded-lg prose-img:shadow-lg
      ">
      {brief && (
        <div className="mb-8 p-5 rounded-xl border-2 border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-primary-600/5 shadow-glow-sm">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <div className="text-xs uppercase tracking-wider text-primary-300 font-bold">Executive Brief</div>
          </div>
          <div className="prose prose-invert prose-sm max-w-none prose-p:text-slate-200 prose-headings:text-slate-100">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 underline decoration-primary-500/50" />
              }}
            >
              {brief}
            </ReactMarkdown>
          </div>
        </div>
      )}
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />
        }}
      >
        {doc.content}
      </ReactMarkdown>
      </div>
    </div>
  )
  
  // Expanded modal overlay
  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200" onClick={() => setIsExpanded(false)}>
        <div className="glass-strong w-full h-full max-w-7xl overflow-hidden p-8 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
          <ViewerContent />
        </div>
      </div>
    )
  }
  
  return <ViewerContent />
}
