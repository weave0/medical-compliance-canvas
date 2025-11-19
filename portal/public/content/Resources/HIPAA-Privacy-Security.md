# HIPAA Privacy & Security Compliance
## Making Sense of Complex Privacy Regulations

**Last Updated:** November 18, 2025

---

## Why This Guide Exists

HIPAA is **notoriously confusing**, **exceptionally detailed**, and **mind-numbingly tedious** to read. Yet it's **absolutely critical** - violations can cost millions in fines and destroy organizational reputation.

**This guide:** Translates bureaucratic language into practical action items.

---

## HIPAA Overview (The 30-Second Version)

**Health Insurance Portability and Accountability Act (1996)**

**Three Main Rules:**
1. **Privacy Rule** - Who can see patient information
2. **Security Rule** - How to protect electronic patient information
3. **Breach Notification Rule** - What to do when things go wrong

**Enforcement:** HHS Office for Civil Rights (OCR)  
**Penalties:** $100 - $50,000 per violation, up to $1.5M per year for each violation type

---

## Who Must Comply? (Covered Entities)

### Covered Entities
1. **Healthcare Providers** who transmit health information electronically
   - Hospitals
   - Physicians
   - Dentists
   - Chiropractors
   - Nursing homes
   - Pharmacies
   - Literally any provider billing electronically

2. **Health Plans**
   - Insurance companies
   - HMOs
   - Medicare/Medicaid
   - Employer group health plans

3. **Healthcare Clearinghouses**
   - Billing services
   - Repricing companies
   - Community health information systems

### Business Associates (BAs)
**Any entity that handles PHI on behalf of a covered entity:**
- IT vendors (EHR systems, cloud storage)
- Medical billing companies
- Shredding companies
- Consultants with PHI access
- Transcription services
- Legal, accounting, actuarial services
- Data analytics firms
- **Even:** Couriers transporting medical records

**Critical:** Business Associate Agreement (BAA) required BEFORE access to PHI

---

## Protected Health Information (PHI) - What Is It?

### The 18 HIPAA Identifiers

**PHI = Health information + ANY of these 18 identifiers:**

1. Names
2. All geographic subdivisions smaller than state (street address, city, county, ZIP code)
   - **Exception:** First 3 digits of ZIP code okay IF area has >20,000 people
3. Dates (except year) directly related to individual (birth, admission, discharge, death)
4. Telephone numbers
5. Fax numbers
6. Email addresses
7. Social Security numbers
8. Medical record numbers
9. Health plan beneficiary numbers
10. Account numbers
11. Certificate/license numbers
12. Vehicle identifiers and serial numbers (license plates)
13. Device identifiers and serial numbers (pacemaker serial #)
14. Web URLs
15. IP addresses
16. Biometric identifiers (fingerprints, retinal scans, voiceprints)
17. Full-face photos and comparable images
18. Any other unique identifying number, characteristic, or code

**De-Identification:** Remove ALL 18 identifiers = no longer PHI (with statistical certainty no identification possible)

---

## Privacy Rule - The Boring But Essential Stuff

### Permitted Uses & Disclosures (No Authorization Needed)

#### 1. Treatment, Payment, Healthcare Operations (TPO)
**Treatment:** 
- Provider-to-provider communication about patient care
- Referrals, consultations
- Prescriptions to pharmacy

**Payment:**
- Billing, claims submission
- Eligibility verification
- Collections

**Healthcare Operations:**
- Quality improvement
- Staff training
- Auditing
- Business planning

**Example:** Hospital can share patient chart with consulting specialist (treatment), bill insurance (payment), and use data for quality improvement project (operations) - all without asking patient.

#### 2. Required by Law
- Court orders, subpoenas (with conditions)
- Public health reporting (disease surveillance)
- Child/elder abuse reporting
- FDA reporting (medical devices, adverse events)
- Workers' compensation

#### 3. Public Interest & Benefit Activities
- Law enforcement (limited circumstances)
- Coroners/medical examiners
- Organ donation organizations
- Research (with IRB approval or de-identified data)
- Avert serious threat to health/safety
- Military and veterans activities
- National security and intelligence

### Authorization Required (Patient Permission)

**Any use/disclosure NOT covered above needs written authorization:**
- Marketing (with narrow exceptions)
- Sale of PHI
- Psychotherapy notes (higher protection)
- Disclosure to employer
- Most research
- Disclosure to patient's family (unless patient objects or emergency)

**Valid Authorization Must Include:**
- Specific description of information
- Who's authorized to disclose
- Who's receiving the information
- Purpose of disclosure
- Expiration date or event
- Right to revoke
- Signature and date

---

## Individual Rights (What Patients Can Demand)

### 1. Right to Access
**Patients can:**
- Inspect and obtain copies of their medical records
- Request electronic copy (in format requested if readily producible)

**Timeframe:** 30 days (can extend 30 more days with written notice)

**Fees:** Can charge reasonable, cost-based fee (not hourly rate)
- Labor for copying (not searching/retrieval)
- Postage
- Media (USB, CD)

**Denials:** Very limited circumstances, some reviewable

### 2. Right to Amend
**Patients can request changes** to inaccurate/incomplete records

**Organization can deny if:**
- Not created by the organization
- Not part of designated record set
- Not available for inspection (psychotherapy notes, legal proceedings)
- Accurate and complete

**If denied:** Must provide written denial, patient can submit statement of disagreement

### 3. Right to Accounting of Disclosures
**Patients can get list of disclosures** (past 6 years)

**NOT included (don't have to track):**
- To patient
- For TPO (treatment, payment, operations)
- Pursuant to authorization
- To family/friends (patient agreed)
- For facility directory
- For national security

**Basically track:** Unusual disclosures (law enforcement, public health, research without authorization)

### 4. Right to Request Restrictions
**Patients can ask to limit use/disclosure**

**Organization can say no** EXCEPT:
- **Out-of-pocket-in-full:** If patient pays completely out-of-pocket for service and requests no disclosure to health plan, MUST honor (2013 change)

### 5. Right to Confidential Communications
**Patients can request alternative method/location**
- Send mail to P.O. Box instead of home
- Call cell phone, not home phone

**Must accommodate if reasonable**

### 6. Right to Notice of Privacy Practices
**Must provide** on first service delivery, post prominently, make available

**Notice must include:**
- How PHI may be used/disclosed
- Individual rights
- Organization's legal duties
- Complaint process
- Contact information

---

## Security Rule - Technical Jargon Translated

### Three Types of Safeguards

#### 1. Administrative Safeguards (Policies & Procedures)

**Security Officer:** Designate someone responsible

**Risk Analysis:** **MOST VIOLATED PROVISION**
- Assess threats and vulnerabilities to ePHI
- Document likelihood and impact
- Implement security measures
- **Must be ongoing, documented, comprehensive**

**Workforce Training:** All employees on HIPAA policies

**Sanctions Policy:** Discipline employees who violate HIPAA

**Access Management:** 
- Minimum necessary: Only give access needed for job
- Role-based access
- Terminate access when employee leaves

**Incident Response:** Written plan for security incidents

**Contingency Plan:** Backup, disaster recovery, emergency mode operations

**Business Associate Contracts:** Written agreements with BAs

#### 2. Physical Safeguards (Facility & Device Security)

**Facility Access Controls:**
- Limit physical access to areas with ePHI
- Badge systems, locks, alarms
- Visitor logs

**Workstation Security:**
- Position screens away from public view
- Automatic logoff/screen lock
- Clean desk policy

**Device & Media Controls:**
- Secure disposal (shredding, degaussing, wiping)
- Media re-use procedures
- Accountability (track hardware)
- Data backup and storage

#### 3. Technical Safeguards (Technology Protections)

**Access Control:**
- Unique user IDs (no sharing passwords)
- Emergency access procedure
- Automatic logoff
- Encryption of data at rest (addressable, but strongly recommended)

**Audit Controls:**
- Log access to ePHI (who, when, what)
- Review logs regularly

**Integrity Controls:**
- Mechanisms to ensure ePHI not altered/destroyed improperly
- Digital signatures, checksums

**Transmission Security:**
- Encryption of data in transit (addressable, but effectively required)
- Email encryption, VPN, HTTPS

**Authentication:**
- Multi-factor authentication (MFA) strongly recommended
- Password policies (complexity, expiration)

---

## Required vs. Addressable (Confusing Distinction)

### Required Standards
**Must implement.** No exceptions.

### Addressable Standards
**NOT optional.** Confusing term.

**Must:**
1. Assess whether reasonable and appropriate
2. If yes: Implement
3. If no: Document why not and implement equivalent alternative

**Example:** Encryption is "addressable"
- **Reality:** Not encrypting is rarely defensible given current threats
- **Most organizations:** Implement encryption

---

## Breach Notification Rule - When the Nightmare Happens

### What Is a Breach?

**Unauthorized acquisition, access, use, or disclosure of PHI** that compromises security or privacy

**Presumed a breach UNLESS:**
Low probability that PHI has been compromised based on 4-factor risk assessment:

1. **Nature and extent** of PHI involved
2. **Unauthorized person** who accessed/received it
3. **Was PHI actually acquired/viewed?**
4. **Extent risk has been mitigated**

**Examples:**
- **Breach:** Laptop with unencrypted patient data stolen from car
- **Not a breach:** Encrypted laptop stolen (low probability of compromise)
- **Breach:** Email with patient list sent to wrong person
- **Not a breach:** Email misdirected to another employee with PHI access who immediately deletes (low probability)

### Notification Requirements

#### 1. To Affected Individuals
**Timing:** Without unreasonable delay, no later than **60 days** from discovery

**Method:**
- Written notice by first-class mail
- Or email if individual agreed
- Substitute notice if contact info insufficient (<10 individuals: phone; ≥10: website posting + media notice)

**Content:**
- Brief description of breach
- Types of PHI involved
- Steps individuals should take
- What organization is doing
- Contact information

#### 2. To Media (If ≥500 Residents of State/Jurisdiction)
**Timing:** Same 60 days

**Method:** Prominent media outlets in affected area

**Usually:** Press release to major newspapers, TV stations

#### 3. To HHS Office for Civil Rights
**≥500 individuals:** Within 60 days, contemporaneous with individual notice

**<500 individuals:** Log and report annually (within 60 days of year-end)

**Website:** <https://ocrportal.hhs.gov/ocr/breach/wizard_breach.jsf>

### HHS "Wall of Shame"
**Public database** of breaches affecting ≥500 individuals

**Website:** <https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf>

**Your organization will be listed** - permanent public record

---

## Common HIPAA Violations (And How to Avoid)

### 1. Snooping (Employee Curiosity)
**Violation:** Accessing celebrity, neighbor, or family member records without job-related reason

**Prevention:**
- Audit log reviews
- Sanctions policy enforced
- Annual training on minimum necessary

**Real Case:** Employees accessing Octomom's records - $250,000 fine

### 2. Unsecured Devices (Lost/Stolen)
**Violation:** Unencrypted laptops, phones, tablets, USB drives lost or stolen

**Prevention:**
- **Encryption** (full-disk encryption for laptops, mobile device encryption)
- Remote wipe capability
- Device inventory and tracking
- Physical security policies (lock car, don't leave in plain sight)

**Real Case:** Anthem breach (hacked database, 78.8M records) - $16M fine

### 3. Improper Disposal
**Violation:** Medical records in dumpster, unshredded papers, unsanitized hard drives

**Prevention:**
- Shredding all paper with PHI
- Degaussing/physical destruction of hard drives
- Contracts with certified destruction vendors

**Real Case:** CVS - prescriptions in dumpster - $2.25M fine

### 4. No Risk Analysis
**Violation:** Never conducting (or documenting) security risk assessment

**Prevention:**
- Annual formal risk analysis
- Document findings and remediation
- Update as environment changes

**Real Case:** Majority of HIPAA fines involve lack of risk analysis

### 5. Unauthorized Access (Poor Access Controls)
**Violation:** Everyone has access to everything; no role-based permissions

**Prevention:**
- Minimum necessary principle
- Role-based access control (RBAC)
- Quarterly access reviews
- Terminate access immediately upon separation

### 6. Chatty Staff (Hallway/Elevator/Cafeteria Conversations)
**Violation:** Discussing patient info where others can overhear

**Prevention:**
- Training on incidental disclosures vs. violations
- "Quiet zones" in public areas
- Close exam room doors

### 7. Business Associate Violations
**Violation:** Vendor has breach, no BAA in place

**Prevention:**
- Identify ALL business associates
- Execute BAAs before granting access
- Perform vendor due diligence
- Include breach notification provisions in BAA

**Real Case:** $4.3M fine for weak BA oversight (Anthem)

### 8. Texting PHI
**Violation:** Using personal phones, unencrypted SMS to communicate about patients

**Prevention:**
- Secure messaging apps (TigerText, Spok, etc.)
- Policy prohibiting PHI via standard text
- Alternative: Use patient initials or MRN only, never full names + conditions

### 9. Faxing to Wrong Number
**Violation:** Sending PHI to incorrect recipient

**Prevention:**
- Verify fax numbers (call to confirm)
- Use confirmed/saved numbers in memory
- Cover sheets with confidentiality notice
- Consider secure electronic fax services

### 10. No Training
**Violation:** Employees don't know HIPAA rules

**Prevention:**
- **Annual training** for all workforce members
- Document attendance
- Test comprehension
- New employee training within reasonable period

---

## Special Situations

### Deceased Individuals
**PHI protected for 50 years after death**

**Can disclose to:**
- Personal representative of estate
- Family members involved in care prior to death (unless decedent objected)

### Minors
**Generally:** Parent is personal representative, can access PHI

**Exceptions:**
- **Emancipated minors:** Control own PHI
- **Mature minor consent for treatment:** May control that PHI (varies by state)
- **Sensitive services:** STI testing, contraception, substance abuse, mental health (state law governs)

### Mental Health & Substance Use
**Psychotherapy Notes:** Higher protection, separate authorization required

**42 CFR Part 2 (Substance Use Disorder Records):**
- **Stricter than HIPAA** for federally-funded SUD programs
- Specific written consent required for nearly all disclosures
- Cannot re-disclose without another consent

### HIV/AIDS
**State laws** often more restrictive than HIPAA
- Specific consent may be required
- Criminal penalties for unauthorized disclosure (some states)

### Genetic Information
**GINA (Genetic Information Nondiscrimination Act):**
- Limits use by employers and health insurers
- HIPAA prohibits health plans from using for underwriting decisions

---

## Documentation Requirements (The Paper Trail)

### Policies & Procedures
**Must have written:**
- Privacy practices notice
- Authorization forms
- Consent forms (if used)
- Business associate agreements
- Breach notification procedures
- Sanction policy
- Training materials
- Incident response plan
- Contingency/disaster recovery plan
- Risk analysis documentation
- Security measures implemented

### Records Retention
**6 years** from creation or last effective date (whichever is later)

**Includes:**
- Policies and procedures
- Training records
- Breach documentation
- Risk analyses
- Incident reports
- BAAs

---

## The Dreaded OCR Investigation

### How Investigations Start
1. **Complaint filed** (patient, employee, anyone)
2. **Breach notification** triggers review
3. **Media reports** of potential violation
4. **Random compliance reviews** (yes, they happen)

### Investigation Process
1. **Notification:** OCR sends letter
2. **Document requests:** Policies, procedures, training records, risk analysis, etc.
3. **Interviews:** Staff, leadership
4. **On-site inspection:** Sometimes
5. **Findings:** Violation or no violation
6. **Resolution:** 
   - Corrective action plan
   - Resolution agreement
   - Civil monetary penalties
   - Referral to DOJ for criminal prosecution (extreme cases)

### What OCR Wants to See
- **Risk analysis** (documented, dated, comprehensive)
- **Policies and procedures** (written, updated, enforced)
- **Training records** (annual, documented, all staff)
- **Business associate agreements** (executed, compliant)
- **Incident response** (documented investigation, remediation)
- **Audit controls** (log reviews, access monitoring)

**Golden rule:** If it's not documented, it didn't happen (in OCR's eyes)

---

## State Laws - The Complicating Factor

### HIPAA Is the Floor, Not the Ceiling

**If state law is MORE protective, state law applies**

**Examples:**
- **California:** CMIA (Confidentiality of Medical Information Act) - stricter
- **Texas:** More restrictions on mental health info
- **New York:** HIV-specific consent requirements

**Consult:** State privacy laws for each state where you operate

---

## Practical Compliance Program

### Year-Round HIPAA Calendar

#### January
- Annual risk analysis kickoff
- Review prior year breach log (report to HHS if <500 total)

#### February
- Update policies based on risk analysis

#### March  
- Business associate inventory and agreement review

#### April
- Workforce training month (all employees)

#### May
- Physical security audit (walk-through of facilities)

#### June
- Audit log review (sample access logs)

#### July
- Incident response plan testing (tabletop exercise)

#### August
- Vendor management review (BA due diligence)

#### September
- Notice of Privacy Practices review and update

#### October
- Cybersecurity awareness month (phishing tests, training)

#### November
- Contingency plan testing (backup restoration, failover)

#### December
- Annual compliance report to leadership/board

### Monthly Tasks
- Review security incidents
- Monitor breach news and OCR enforcement actions
- Update training materials as needed

---

## Quick Reference Checklists

### Privacy Rule Compliance
☐ Privacy Officer designated  
☐ Notice of Privacy Practices distributed and posted  
☐ Authorization forms compliant  
☐ Process for access requests (30-day response)  
☐ Process for amendment requests  
☐ Accounting of disclosures process  
☐ Minimum necessary policies  
☐ Complaint process established  

### Security Rule Compliance
☐ Security Officer designated  
☐ **Risk analysis completed and documented**  
☐ Risk management plan implemented  
☐ Workforce training (annual)  
☐ Sanction policy enforced  
☐ Access controls (unique user IDs, role-based)  
☐ Audit controls (logging and review)  
☐ Encryption (data at rest and in transit)  
☐ Physical safeguards (facility access, workstation security)  
☐ Business associate agreements executed  
☐ Incident response plan  
☐ Contingency plan (backup, disaster recovery)  

### Breach Response Checklist
☐ Contain the breach immediately  
☐ Investigate and document  
☐ 4-factor risk assessment  
☐ If breach: Notify individuals (60 days)  
☐ If ≥500: Notify media (60 days)  
☐ If ≥500: Notify HHS immediately (60 days)  
☐ If <500: Log for annual reporting  
☐ Remediate root cause  
☐ Update policies/training  

---

## Resources

### Official HHS/OCR Resources
**Main website:** <https://www.hhs.gov/hipaa>  
**Breach portal:** <https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf>  
**Complaint filing:** <https://ocrportal.hhs.gov/ocr/smartscreen/main.jsf>  
**Guidance:** <https://www.hhs.gov/hipaa/for-professionals/index.html>

### Risk Analysis Tools
**HHS Security Risk Assessment Tool (SRA):** Free, downloadable  
**Website:** <https://www.healthit.gov/topic/privacy-security-and-hipaa/security-risk-assessment-tool>

### Training
**HHS Office for Civil Rights:** Free online training modules  
**AHIMA:** Comprehensive HIPAA courses  
**HIMSS:** Privacy and security certifications

---

## Key Takeaways (The TL;DR)

✓ **Risk analysis is #1 violation** - do it, document it, update it  
✓ **Encryption is not optional** - despite "addressable" label  
✓ **Training is annual** - all workforce members, documented  
✓ **Business associates = your liability** - get BAAs, monitor them  
✓ **Breaches happen** - have a plan, execute within 60 days  
✓ **Audit logs exist for a reason** - review them, catch snooping  
✓ **State laws may be stricter** - know your state requirements  
✓ **Documentation proves compliance** - if not written, didn't happen  

---

**HIPAA doesn't have to be painful.** Break it into manageable pieces, assign responsibilities, and build it into routine operations rather than treating it as a separate compliance exercise.

---

**Related Library Resources:**
- `Section-1557-Compliance.md` - Nondiscrimination overlaps with HIPAA
- `Digital-Health-Telehealth.md` - HIPAA in telehealth context
- `Templates/HIPAA-Compliance-Program.md` - Implementation tools
