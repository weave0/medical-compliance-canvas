import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Doc } from '../App'
import jsPDF from 'jspdf'

const DownloadIcon = (p: any) => <svg {...p} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>

function extractBrief(md: string): string | null {
  const re = /^(##+)[ \t]*(Brief|Executive Brief|Summary)[\s\r\n]+([\s\S]*?)(?=^##\s|^#\s|\Z)/gmi
  const m = re.exec(md)
  return m?.[3]?.trim() || null
}

export function Viewer({ doc }: { doc: Doc | null }) {
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
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{doc.title}</h2>
          <div className="text-xs text-slate-400 mt-1">{doc.path}</div>
        </div>
        <button
          onClick={exportPDF}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary text-sm transition"
          title="Export to PDF"
        >
          <DownloadIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Export PDF</span>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto prose prose-invert max-w-none">
      {brief && (
        <div className="mb-4 p-3 rounded-lg border border-primary/30 bg-primary/5">
          <div className="text-xs uppercase text-primary mb-1">Brief</div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {brief}
          </ReactMarkdown>
        </div>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {doc.content}
      </ReactMarkdown>
      </div>
    </div>
  )
}
