import { Doc } from './App'

// Load markdown files from public folder (works in both dev and production)
export async function loadLibrary(): Promise<Doc[]> {
  const docs: Doc[] = []
  
  // List of all markdown files to load
  const files = [
    // Core docs
    { path: '/content/README.md', category: 'Core' },
    { path: '/content/Quick-Reference-Guide.md', category: 'Core' },
    { path: '/content/INDEX.md', category: 'Core' },
    
    // Resources
    { path: '/content/Resources/HIPAA-Privacy-Security.md', category: 'HIPAA' },
    { path: '/content/Resources/EMTALA-Emergency-Treatment.md', category: 'EMTALA' },
    { path: '/content/Resources/Stark-Law-and-Anti-Kickback.md', category: 'Stark/AKS' },
    { path: '/content/Resources/OSHA-Bloodborne-Pathogens.md', category: 'OSHA' },
    { path: '/content/Resources/CMS-Conditions-of-Participation.md', category: 'CMS CoPs' },
    { path: '/content/Resources/NCQA-Programs.md', category: 'NCQA' },
    { path: '/content/Resources/Joint-Commission.md', category: 'Joint Commission' },
    { path: '/content/Resources/CLAS-Standards.md', category: 'CLAS' },
    { path: '/content/Resources/Section-1557-Compliance.md', category: 'Section 1557' },
    { path: '/content/Resources/SDOH-Social-Determinants.md', category: 'SDOH' },
    { path: '/content/Resources/Value-Based-Care-Payment.md', category: 'Value-Based Care' },
    { path: '/content/Resources/Digital-Health-Telehealth.md', category: 'Digital Health' },
    { path: '/content/Resources/WHO-Health-Equity.md', category: 'Health Equity' },
    { path: '/content/Resources/Medicare-Medicaid-Billing.md', category: 'Medicare/Medicaid' },
    { path: '/content/Resources/Accreditation-Standards-Overview.md', category: 'Accreditation' },
    
    // Templates
    { path: '/content/Templates/Compliance-Tracker.md', category: 'Template' },
    { path: '/content/Templates/Regulatory-Monitoring-Log.md', category: 'Template' },
    { path: '/content/Templates/Contract-Review-Checklist.md', category: 'Template' },
    { path: '/content/Templates/EMTALA-Checklist.md', category: 'Template' },
    { path: '/content/Templates/OSHA-Exposure-Control-Plan.md', category: 'Template' },
    { path: '/content/Templates/Stark-AKS-Executive-Quick-Sheet.md', category: 'Template' },
    { path: '/content/Templates/EMTALA-Executive-Quick-Sheet.md', category: 'Template' },
    { path: '/content/Templates/OSHA-BBP-Executive-Quick-Sheet.md', category: 'Template' },
    { path: '/content/Templates/CMS-CoPs-Executive-Quick-Sheet.md', category: 'Template' },
    { path: '/content/Templates/Accreditation-Executive-Quick-Sheet.md', category: 'Template' },
    { path: '/content/Templates/README-Templates.md', category: 'Template' },
  ]
  
  // Load each file
  let id = 1
  for (const { path, category } of files) {
    try {
      const response = await fetch(path)
      if (!response.ok) continue
      
      const content = await response.text()
      const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim() || path.split('/').pop()?.replace('.md', '') || 'Untitled'
      const tags = inferTags(path, content)
      
      docs.push({
        id: String(id++),
        title,
        path,
        category,
        content,
        tags
      })
    } catch (err) {
      console.warn(`Failed to load ${path}:`, err)
    }
  }
  
  return docs
}

function inferTags(p: string, content: string): string[] {
  const tags: string[] = []
  const hay = (p + "\n" + content).toLowerCase()
  const add = (t: string) => { if (!tags.includes(t)) tags.push(t) }
  
  // Topic tags by filename/keywords
  if (hay.includes('hipaa')) add('HIPAA')
  if (hay.includes('emtala')) add('EMTALA')
  if (hay.includes('osha') || hay.includes('bloodborne')) add('OSHA')
  if (hay.includes('stark') || hay.includes('kickback')) add('Stark/AKS')
  if (hay.includes('ncqa')) add('NCQA')
  if (hay.includes('joint-commission') || hay.includes('jci')) add('Joint Commission')
  if (hay.includes('clas')) add('CLAS')
  if (hay.includes('conditions-of-participation') || hay.includes('cops')) add('CMS CoPs')
  if (hay.includes('1557')) add('Section 1557')
  if (hay.includes('telehealth') || hay.includes('digital')) add('Digital Health')
  if (hay.includes('sdoh') || hay.includes('determinants')) add('SDOH')
  if (hay.includes('value-based')) add('Value-Based Care')
  if (hay.includes('equity') || hay.includes('disparit')) add('Health Equity')
  if (hay.includes('culture') || hay.includes('linguistic')) add('Culture/Language')
  if (hay.includes('accreditation')) add('Accreditation')
  if (hay.includes('safety')) add('Patient Safety')
  if (hay.includes('medicare') || hay.includes('medicaid')) add('Medicare/Medicaid')
  if (hay.includes('billing') || hay.includes('reimbursement')) add('Billing')
  
  // Kind tags
  if (p.includes('/Resources/')) add('Resource')
  if (p.includes('/Templates/')) add('Template')
  if (p.includes('/content/') && !p.includes('/Resources/') && !p.includes('/Templates/')) add('Core')
  
  return Array.from(new Set(tags))
}
