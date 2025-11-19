# Medicare & Medicaid Billing Compliance
## Navigating Complex Reimbursement Rules Without the Headache

**Last Updated:** November 18, 2025

---

## Why This Is Brutally Boring (But Critically Important)

Medicare and Medicaid billing rules are:
- **700+ pages** of regulations (Medicare Physician Fee Schedule alone)
- **Constantly changing** (quarterly updates common)
- **Highly technical** (CPT codes, modifiers, LCD/NCD policies)
- **Severely penalized** when wrong (False Claims Act, $millions in fines)

**BUT:** They represent **40-50% of revenue** for most providers.

**This guide:** Cuts through the noise, highlights what actually matters.

---

## The Players

### Centers for Medicare & Medicaid Services (CMS)
**Federal agency** setting the rules

**Website:** <https://www.cms.gov/>

### Medicare Administrative Contractors (MACs)
**Process claims** for geographic regions (A/B MACs for Part A/B)

**12 Jurisdictions** - different contractors, slightly different interpretations

**Find your MAC:** <https://www.cms.gov/Medicare/Medicare-Contracting/Medicare-Administrative-Contractors/Who-are-the-MACs>

### State Medicaid Agencies
**Each state runs own program** within federal guidelines

**Result:** 50+ different Medicaid programs with varying rules

---

## Medicare Basics (The Four Parts)

### Part A - Hospital Insurance
**Covers:**
- Inpatient hospital stays
- Skilled nursing facility (SNF)
- Hospice
- Some home health

**Payment:** Typically DRG (Diagnosis-Related Group) - fixed payment per admission

### Part B - Medical Insurance
**Covers:**
- Physician services
- Outpatient care
- Preventive services
- Durable medical equipment (DME)

**Payment:** Fee-for-service based on Medicare Physician Fee Schedule (MPFS)

### Part C - Medicare Advantage
**Private insurance companies** offer Medicare benefits

**Payment:** Capitation (per member per month) to plans, plans pay providers (varies)

### Part D - Prescription Drug Coverage
**Through private plans**

**Not typically provider billing** (pharmacy benefit)

---

## Medical Necessity - The Golden Rule

### CMS Definition
**Services must be:**
- Reasonable and necessary for diagnosis/treatment
- Consistent with symptoms/diagnosis
- Not primarily for convenience
- Consistent with standards of good medical practice

**No medical necessity = No payment**

### How It's Determined

#### 1. National Coverage Determinations (NCDs)
**CMS-wide policies** on specific services/items

**Database:** <https://www.cms.gov/medicare-coverage-database>

**Example NCD:** Bariatric surgery covered if BMI ≥35 with comorbidity

#### 2. Local Coverage Determinations (LCDs)
**MAC-specific policies** for their jurisdiction

**More detailed** than NCDs, often include covered ICD-10 codes

**Example LCD:** Which ICD-10 codes support medical necessity for vitamin B12 injection

#### 3. Coverage Articles
**LCD-related documents** with billing/coding details

**Check BOTH NCD and LCD** for service you're billing

### ICD-10 Diagnosis Codes
**Must support medical necessity**

**Common denial:** Diagnosis doesn't match procedure (e.g., billing for diabetes care with no diabetes diagnosis)

**Specificity matters:** "Diabetes" (general) vs. "Type 2 diabetes with diabetic neuropathy" (specific, supports more services)

---

## Coding Essentials (Without the Tedium)

### CPT Codes (Current Procedural Terminology)
**Published by AMA,** updated annually (January 1)

**Categories:**
- **Category I:** Main codes (5 digits) - most common procedures/services
- **Category II:** Performance measurement (optional, tracking quality)
- **Category III:** Emerging technology (temporary codes)

**Purchase:** CPT codebook or subscribe to coding software

### HCPCS Codes (Healthcare Common Procedure Coding System)
**Level II codes** for services/items not in CPT

**Examples:**
- **J-codes:** Drugs (J0150 = Injection, adenosine)
- **E-codes:** DME (E0110 = Crutches)
- **A-codes:** Miscellaneous supplies

### Modifiers - The Devil in the Details
**Two-digit codes** appended to CPT/HCPCS to provide additional information

**Critical Modifiers:**
- **-25:** Significant, separately identifiable E/M service same day as procedure
- **-26:** Professional component only (e.g., physician interpretation of X-ray)
- **-TC:** Technical component only (e.g., X-ray equipment/tech)
- **-59 or -X{EPSU}:** Distinct procedural service (breaks bundling edits)
- **-76:** Repeat procedure by same physician
- **-77:** Repeat procedure by different physician
- **-GT:** Via interactive telecommunications (telehealth)
- **-95:** Synchronous telemedicine (alternative to GT, 2025 preferred)

**Misuse of modifiers = denials or worse, fraud allegations**

### ICD-10 Diagnosis Codes
**WHO classification,** U.S. version maintained by CDC/NCHS

**Updated:** October 1 annually

**7 characters** (some shorter), extremely specific

**Example:** 
- **E11.65** = Type 2 diabetes with hyperglycemia
- **I10** = Essential (primary) hypertension

**Sequencing:** Primary diagnosis first, then secondary

**Linking:** Match diagnosis to procedure (claim shows which ICD-10 supports which CPT)

---

## Documentation Requirements (What the Chart Must Prove)

### General Principles
**"If it's not documented, it didn't happen"** (auditor mantra)

**Must document:**
- Chief complaint
- History of present illness (HPI)
- Review of systems (ROS)
- Past, family, social history (PFSH)
- Physical examination
- Medical decision-making (MDM)
- Assessment and plan
- **Medical necessity** for all services billed

### E/M (Evaluation and Management) Documentation

**2021 Changes:** Simplified E/M guidelines (office/outpatient)

**Level selection based on:**
- **Medical Decision-Making (MDM)** - Preferred method
  - Number and complexity of problems
  - Amount/complexity of data reviewed
  - Risk of complications, morbidity, mortality
  
- **OR Total Time** - Alternative method
  - Time spent on date of encounter
  - Includes work before/after visit if same day

**Levels:**
- **99202/99212:** Straightforward MDM OR 15-29 min
- **99203/99213:** Low complexity MDM OR 30-44 min
- **99204/99214:** Moderate complexity MDM OR 45-59 min
- **99205/99215:** High complexity MDM OR 60-74 min

**Time-based billing:** Must document exact start/stop times and total

### Procedure Documentation
**Must include:**
- Indication for procedure
- Description of procedure performed
- Findings
- Any complications
- Signature and credentials

**Example - Colonoscopy:**
- Indication: Screening (average risk, age 50)
- Prep quality: Excellent
- Extent of exam: Cecum reached
- Findings: 2 polyps removed (size, location, appearance)
- Pathology: Sent to lab
- Complications: None

---

## Common Billing Errors (And How to Avoid)

### 1. Upcoding
**Billing higher level service** than documented

**Example:** Billing 99214 (moderate complexity) when documentation supports only 99213 (low complexity)

**Consequence:** Overpayment, recoupment, fraud investigation

**Prevention:** Code to documentation, audit charts regularly

### 2. Unbundling
**Billing separately for services that should be bundled**

**Example:** Billing for both comprehensive metabolic panel (80053) AND each individual component

**Tool:** CCI Edits (Correct Coding Initiative)  
**Website:** <https://www.cms.gov/medicare/coding-billing/correct-coding-initiative-ncci-edits>

**Prevention:** Use coding software with CCI edits built in

### 3. Duplicate Billing
**Billing twice for same service**

**Common cause:** Paper claim + electronic claim both submitted

**Prevention:** Track claim submissions, use clearinghouse rejection reports

### 4. Medical Necessity Failure
**No diagnosis code supporting procedure**

**Example:** Billing for EKG (93000) for routine physical with no cardiac symptoms/history

**Prevention:** Link appropriate ICD-10 to each CPT, check LCD covered diagnoses

### 5. Modifier Misuse
**Using -25 modifier inappropriately**

**Common error:** E/M same day as preventive visit without significant, separately identifiable problem

**Prevention:** Modifier training, audit -25 usage quarterly

### 6. Timely Filing Failures
**Missing claim submission deadline**

**Medicare:** 1 year from date of service (12 months)  
**Medicaid:** Varies by state (often 90 days to 1 year)

**Prevention:** Submit claims within 30 days, track aging reports

### 7. Credentialing Issues
**Provider not enrolled in Medicare/Medicaid**

**Result:** Claim denied, payment to beneficiary (who may not pay you)

**Prevention:** 
- Enroll BEFORE seeing Medicare/Medicaid patients
- PECOS (Provider Enrollment, Chain and Ownership System) for Medicare
- State Medicaid enrollment

### 8. Place of Service (POS) Errors
**Wrong POS code on claim**

**Examples:**
- **11:** Office
- **12:** Home
- **22:** On-campus outpatient hospital
- **23:** Emergency room
- **02:** Telehealth (patient at home)

**Matters because:** Payment rates vary, coverage may differ

---

## Special Programs & Add-On Payments

### Quality Payment Program (QPP)

**Two tracks:**

#### 1. Merit-based Incentive Payment System (MIPS)
**For:** Most individual/small group clinicians

**Categories:**
- Quality (40%)
- Cost (30%)
- Improvement Activities (15%)
- Promoting Interoperability (15%)

**Result:** Payment adjustment (+/- based on score)

**2025:** Up to +9% bonus or -9% penalty

#### 2. Advanced Alternative Payment Models (APMs)
**For:** Clinicians in qualifying APMs (ACOs, bundled payments, etc.)

**Benefit:** 5% lump sum bonus, exempt from MIPS

### Medicare Shared Savings Program (MSSP)
**Accountable Care Organizations (ACOs)**

**Share in savings** if meet quality benchmarks and reduce costs

### Value-Based Payment Modifier
**Being phased out,** replaced by MIPS

---

## Audits - The Compliance Nightmare

### Types of Audits

#### 1. Pre-Payment Review
**Claims reviewed BEFORE payment**

**Triggers:**
- Random selection
- New provider
- Outlier billing patterns

**Timeline:** Delays payment 30-60 days

#### 2. Post-Payment Review
**Claims reviewed AFTER payment**

**Consequence:** Recoupment if determined overpaid

#### 3. Comprehensive Error Rate Testing (CERT)
**CMS contractor** randomly audits to calculate error rate

**Extrapolation:** Findings applied to all similar claims

#### 4. Recovery Audit Contractor (RAC)
**Contingency-based auditors** find overpayments, keep percentage

**Aggressive,** often controversial

**Can request up to 3 years of records**

#### 5. Targeted Probe and Educate (TPE)
**MAC-initiated** for providers with high error rates

**Rounds:**
- Round 1: 20-40 claims reviewed, education provided
- Round 2: If errors persist, more claims reviewed
- Round 3: Refer to special investigation

### Audit Survival Tips

**Prevention:**
- Internal audits (quarterly sample chart reviews)
- Coder training and certification
- Provider education on documentation
- Track denials and correct patterns

**Response:**
- Respond timely (typically 30-45 days)
- Provide ONLY what's requested
- Include cover letter explaining
- Consider legal counsel for large audits

**Appeal if warranted:**
- 5 levels of Medicare appeals
- Worth pursuing if documentation supports billing

---

## Fraud & Abuse Laws (The Scary Stuff)

### False Claims Act (FCA)
**Prohibits:** Knowingly submitting false/fraudulent claims

**"Knowingly":** Actual knowledge, deliberate ignorance, or reckless disregard

**Penalties:** 
- $13,946 - $27,894 per false claim (2025 amounts)
- Treble damages (3x overpayment)
- Exclusion from federal programs

**Qui Tam:** Whistleblowers can sue on government's behalf, get portion of recovery

### Anti-Kickback Statute (AKS)
**Prohibits:** Offering/receiving remuneration to induce referrals for federal healthcare program business

**Criminal law:** Intent required

**Penalties:** 
- Up to $100,000 fine per violation
- Up to 10 years prison
- Exclusion from Medicare/Medicaid

**Safe harbors:** Certain arrangements protected (investment interests, employment, discounts, etc.)

### Stark Law (Physician Self-Referral Law)
**Prohibits:** Physician referring Medicare/Medicaid patients for designated health services (DHS) to entities with which physician has financial relationship

**Strict liability:** Intent NOT required

**DHS include:**
- Clinical lab services
- Physical therapy
- Radiology and imaging
- DME
- Home health
- Outpatient prescription drugs

**Exceptions:** In-office ancillary services, ownership in publicly traded companies, fair market value compensation

**Penalties:**
- Denial of payment
- Refund of amounts collected
- $24,000+ per violation
- Exclusion from federal programs
- False Claims Act liability

### Exclusion (OIG List of Excluded Individuals/Entities - LEIE)
**Cannot bill Medicare/Medicaid if excluded**

**Monthly screening required** for all employees/contractors

**Database:** <https://oig.hhs.gov/exclusions/>

**Consequence of hiring excluded person:** Your claims denied, potential FCA liability

---

## Medicaid - State-by-State Chaos

### Federal Requirements (Mandatory Services)
All states must cover:
- Inpatient/outpatient hospital
- Physician services
- Lab and X-ray
- Nursing facility (21+)
- Home health
- FQHC/RHC services
- Preventive services for children (EPSDT)

### Optional Services (State Choice)
States MAY cover:
- Prescription drugs
- Dental
- Vision
- Physical therapy
- Chiropractic

**Result:** Huge variation state-to-state

### Medicaid Managed Care
**Most states use managed care organizations (MCOs)**

**Providers contract with MCOs,** not state directly

**Rules:** MCO-specific, often differ from fee-for-service Medicaid

### Medicaid Expansion (ACA)
**39 states + DC expanded** (as of 2025)

**Covers:** Adults 19-64 with income ≤138% FPL

**Payment:** Enhanced federal match (90%)

**Non-expansion states:** Coverage gap (too much income for Medicaid, too little for Marketplace subsidies)

---

## Provider Enrollment (The Bureaucratic Gauntlet)

### Medicare Enrollment (PECOS)
**Website:** <https://pecos.cms.hhs.gov/>

**Requirements:**
- NPI (National Provider Identifier)
- Tax ID (EIN or SSN)
- Practice location
- Specialty
- Reassignment of benefits (if applicable)
- Background check

**Timeline:** 30-90 days (can be longer)

**Revalidation:** Every 5 years (or 3 years if high categorical risk)

### Medicaid Enrollment
**State-specific** applications

**Each state separate** - must enroll in every state where you practice

**Some states use PECOS data,** but still require state application

### CAQH (Council for Affordable Quality Healthcare)
**Credentialing database** used by most commercial payers and many Medicaid MCOs

**ProView:** Universal provider datasource

**Complete ONCE,** attest periodically, payers pull data

**Website:** <https://proview.caqh.org/>

---

## Payment Methodologies (How Money Flows)

### Fee-for-Service (FFS)
**Traditional:** Service performed, claim submitted, payment received

**Medicare Physician Fee Schedule (MPFS):**
- Based on Relative Value Units (RVUs)
- RVU = Work + Practice Expense + Malpractice
- Multiplied by Conversion Factor ($33.29 for 2025)
- Adjusted by Geographic Practice Cost Index (GPCI)

**Formula:** Payment = [(Work RVU × Work GPCI) + (PE RVU × PE GPCI) + (Malpractice RVU × Malpractice GPCI)] × Conversion Factor

**Example:** 99214 office visit
- Total RVUs: 1.92
- Payment (national): ~$64 (varies by location)

### Prospective Payment Systems (PPS)

**Inpatient (IPPS):** DRG-based (Diagnosis-Related Group)
- Fixed payment per admission based on diagnosis
- Adjustments for outliers, readmissions, quality

**Skilled Nursing Facility (SNF PPS):** RUG-IV (Resource Utilization Groups)

**Home Health (HH PPS):** 30-day episode payments

**Outpatient (OPPS):** APC-based (Ambulatory Payment Classifications)

### Capitation
**Medicare Advantage, Medicaid MCOs**

**Per member per month (PMPM)** payment

**Provider bears risk** (if costs exceed capitation, loss; if under, profit)

---

## Compliance Program Essentials

### OIG Compliance Program Guidance
**Seven elements** (physician practice guidance)

#### 1. Written Policies & Procedures
**Standards of conduct**
- Billing and coding policies
- Documentation requirements
- Fraud, waste, abuse training
- HIPAA policies
- Conflict of interest

#### 2. Compliance Officer & Committee
**Designate individual** responsible for compliance

**Committee:** Multidisciplinary (billing, clinical, admin)

#### 3. Training & Education
**Annual training** for all staff
- Billing and coding updates
- Fraud and abuse laws
- Documentation requirements
- Specific to job function

#### 4. Effective Communication
**Hotline** or mechanism to report concerns

**Anonymous reporting** option

**Non-retaliation policy**

#### 5. Internal Monitoring & Auditing
**Regular audits** of claims and documentation
- Pre-bill audits (sample)
- Post-submission audits
- Focused audits (high-risk areas: E/M, modifiers, new providers)

**Benchmarking:** Compare to national data, identify outliers

#### 6. Enforcement & Discipline
**Consistent sanctions** for violations

**Progressive discipline:** Verbal warning → written → suspension → termination

**Document disciplinary actions**

#### 7. Corrective Action & Response
**When issues identified:**
- Investigate thoroughly
- Determine root cause
- Implement corrective action
- Self-report if required (Voluntary Self-Disclosure Protocol)

---

## Self-Disclosure (When You Find Errors)

### Voluntary Self-Disclosure Protocol (SDP)
**OIG program** to report self-discovered fraud/abuse

**Benefits:**
- Reduced penalties (1.5x instead of 3x damages)
- Avoid CMPs (civil monetary penalties)
- Potential to stay in programs (avoid exclusion)

**Process:**
1. Identify issue through internal audit
2. Investigate scope
3. Cease conduct
4. Disclose to OIG with comprehensive report
5. Negotiate settlement

**When to use:** Credible evidence of potential FCA violation

### Overpayment Refund Requirements
**ACA Section 6402:** Must refund overpayments within 60 days of identification

**"Identification":** When you determine or should have determined overpayment exists

**Report and return:** To MAC or state Medicaid agency

**Failure = False Claims Act violation**

---

## Resources

### CMS
**Main:** <https://www.cms.gov/>  
**Medicare Coverage Database:** <https://www.cms.gov/medicare-coverage-database>  
**MLN (Medicare Learning Network):** <https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN>  
**Fee Schedules:** <https://www.cms.gov/medicare/payment/fee-schedules>

### OIG
**Compliance Guidance:** <https://oig.hhs.gov/compliance/compliance-guidance/>  
**Exclusions Database (LEIE):** <https://oig.hhs.gov/exclusions/>  
**Work Plan:** Annual list of audit priorities

### Coding Resources
**AMA (CPT):** <https://www.ama-assn.org/practice-management/cpt>  
**AAPC:** Coding certifications and education  
**AHIMA:** Health information management

### MAC Websites
**Find your MAC:** <https://www.cms.gov/Medicare/Medicare-Contracting/Medicare-Administrative-Contractors/Who-are-the-MACs>  
**Each MAC has LCD database, articles, provider education**

---

## Quick Reference

### Claim Submission Timelines
- **Medicare:** 12 months from date of service
- **Medicaid:** State-specific (check your state)
- **Commercial:** Per contract (often 90-180 days)

### Common Denial Reasons
1. **CO-16:** Missing/invalid diagnosis
2. **CO-50:** Payment adjusted - non-covered service
3. **CO-97:** Payment adjusted - bundled service
4. **CO-151:** Payment adjusted - payer deems information incomplete
5. **CO-197:** Precertification/authorization missing

**CO = Contractual Obligation (patient cannot be billed)**  
**PR = Patient Responsibility (patient can be billed)**

### Appeal Deadlines (Medicare)
- **Level 1 (Redetermination):** 120 days from initial determination
- **Level 2 (Reconsideration - QIC):** 180 days from Level 1
- **Level 3 (ALJ Hearing):** 60 days from Level 2 (min $200 in dispute)
- **Level 4 (Council Review):** 60 days from Level 3
- **Level 5 (Federal Court):** 60 days from Level 4 (min $1,740 in dispute)

---

## Key Takeaways

✓ **Documentation is everything** - code to what's documented  
✓ **Medical necessity must be clear** - check NCDs/LCDs  
✓ **Modifiers matter** - incorrect use triggers denials/audits  
✓ **Timely filing is strict** - submit claims promptly  
✓ **Internal audits prevent external audits** - quarterly chart reviews  
✓ **Excluded persons = poison** - screen monthly  
✓ **Refund overpayments within 60 days** - ACA requirement  
✓ **When in doubt, query** - ask MAC or coding expert  

---

**Billing compliance doesn't have to be terrifying.** Systems, training, and regular monitoring turn it from reactive panic into proactive management.

---

**Related Library Resources:**
- `Value-Based-Care-Payment.md` - Alternative payment models
- `HIPAA-Privacy-Security.md` - Documentation privacy requirements
- `Templates/Billing-Compliance-Audit.md` - Internal audit tools
