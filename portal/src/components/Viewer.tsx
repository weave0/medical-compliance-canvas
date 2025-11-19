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
  
  if (!doc) return <div className="text-slate-400 text-center py-8">Select a document to view</div>
  
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
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{doc.title}</h2>
          <div className="text-xs text-slate-400 mt-1">{doc.path}</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm transition"
            title={isExpanded ? "Collapse viewer" : "Expand viewer"}
          >
            {isExpanded ? <CompressIcon className="w-4 h-4" /> : <ExpandIcon className="w-4 h-4" />}
            <span className="hidden sm:inline">{isExpanded ? 'Collapse' : 'Expand'}</span>
          </button>
          <button
            onClick={exportPDF}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary text-sm transition"
            title="Export to PDF"
          >
            <DownloadIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto prose prose-invert prose-slate max-w-none
        prose-headings:text-white prose-headings:font-semibold
        prose-h1:text-2xl prose-h1:mb-4 prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-2
        prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3
        prose-h3:text-lg prose-h3:mt-4 prose-h3:mb-2
        prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white prose-strong:font-semibold
        prose-ul:text-slate-300 prose-ol:text-slate-300
        prose-li:my-1
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-white/10
        prose-blockquote:border-l-primary prose-blockquote:text-slate-400
        prose-table:border prose-table:border-white/10
        prose-th:bg-white/5 prose-th:text-white
        prose-td:border prose-td:border-white/10
      ">
      {brief && (
        <div className="mb-6 p-4 rounded-lg border border-primary/30 bg-primary/5">
          <div className="text-xs uppercase tracking-wide text-primary mb-2 font-semibold">Executive Brief</div>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
              a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />
            }}
          >
            {brief}
          </ReactMarkdown>
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
      <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center" onClick={() => setIsExpanded(false)}>
        <div className="bg-slate-900/95 border border-white/20 rounded-2xl shadow-2xl w-full h-full max-w-6xl overflow-hidden" onClick={e => e.stopPropagation()}>
          <ViewerContent />
        </div>
      </div>
    )
  }
  
  return <ViewerContent />
}
