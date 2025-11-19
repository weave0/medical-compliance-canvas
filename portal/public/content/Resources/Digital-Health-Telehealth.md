# Digital Health, Telehealth & Health IT Standards
## Technology, Innovation, and Equity in Modern Healthcare

**Last Updated:** November 18, 2025

---

## Overview

Digital health and telehealth have permanently transformed healthcare delivery. **Post-pandemic reality:** Virtual care is standard, not exception. **2025 focus:** Ensuring digital health advances equity rather than widening disparities.

---

## Federal Telehealth Policy

### CMS Telehealth Coverage

**Website:** <https://www.cms.gov/medicare/coverage/telehealth>

#### Medicare Telehealth (2025 Status)

**Permanent Flexibilities (Post-PHE):**
- **Audio-only visits:** Continued for behavioral health, certain E/M services
- **Geographic restrictions relaxed:** Home as originating site
- **Federally Qualified Health Centers (FQHCs) and Rural Health Clinics (RHCs):** Can serve as distant sites
- **Acute hospital care at home:** Continued

**Temporary Flexibilities Extended Through 2025:**
- Broader list of eligible services
- Reduced originating site requirements
- Expanded provider types

**Monitor:** Annual Medicare Physician Fee Schedule for updates

#### Medicaid Telehealth
**State Flexibility:** Each state determines coverage

**2025 Trends:**
- All states cover some telehealth
- Most maintain pandemic-era expansions
- Parity laws: 30+ states require equal payment for telehealth vs. in-person

**Resource:** CCHP (Center for Connected Health Policy) State Telehealth Laws & Reimbursement Policies Database  
**Website:** <https://www.cchpca.org/>

### Health Equity Considerations in Telehealth

#### Digital Divide
**Barriers:**
- Lack of broadband internet (rural and urban underserved)
- No smartphone or computer
- Limited digital literacy
- Data cost concerns

**Solutions:**
- **Audio-only coverage** (phone visits)
- **Community-based telehealth kiosks**
- **Device lending programs**
- **Digital navigator programs**

#### Language Access in Telehealth
**Requirements (Section 1557):**
- Interpretation services must be available
- Video remote interpretation (VRI) for telehealth visits
- Phone interpretation as backup

**Best Practice:** Test interpretation technology before patient visits

#### Accessibility for Disabilities
**Requirements:**
- Captions for deaf/hard of hearing
- Screen reader compatibility for blind users
- Keyboard navigation (no mouse required)

---

## Telehealth Platforms & Standards

### NCQA Virtual Care Accreditation (2025)
**Website:** <https://www.ncqa.org/programs/health-care-providers-practices/virtual-primary-care-and-urgent-care-accreditation/>

**Standards:**
1. **Access & Availability:** Response times, hours of operation
2. **Patient Rights:** Informed consent, privacy
3. **Clinical Quality:** Evidence-based protocols
4. **Technology:** Security, interoperability, accessibility
5. **Health Equity:** Language services, disability access, digital divide mitigation

**Eligible Organizations:**
- Direct-to-consumer telehealth companies
- Health system virtual programs
- Virtual-first primary care practices

### URAC Telehealth Accreditation
**Focus:** Quality and patient safety in virtual care

**Criteria:**
- Credentialing of remote providers
- Clinical protocols
- Technology standards
- Patient satisfaction

### Joint Commission Telehealth Certification
**Available for:** 
- Hospitals with telemedicine programs
- Ambulatory care telehealth

**Standards:** Integrate with existing accreditation, focus on:
- Patient safety in virtual environment
- Provider credentials across state lines
- Technology reliability

---

## Health Information Technology (Health IT)

### ONC (Office of the National Coordinator for Health IT)

**Website:** <https://www.healthit.gov/>

#### 21st Century Cures Act: Information Blocking Rule

**Effective:** 2023, enforcement ongoing

**Prohibits:** 
- Practices that interfere with access, exchange, or use of electronic health information
- Applies to: Health IT developers, health information exchanges, health information networks

**Exceptions:** 
- Privacy
- Security
- Preventing harm
- Maintaining health IT performance
- Recovering costs (reasonable and non-discriminatory)

**Patient Impact:** Easier access to own health records via APIs

#### United States Core Data for Interoperability (USCDI)

**Current Version:** USCDI v4 (2024)

**Data Classes:**
- Demographics (race, ethnicity, preferred language, sexual orientation, gender identity)
- **NEW:** Social Determinants of Health
- Clinical notes
- Medications
- Allergies
- Immunizations
- Lab results
- Vital signs
- **NEW:** Health insurance information

**Equity Relevance:** Standardizes collection and exchange of SDOH, SOGI data

**Website:** <https://www.healthit.gov/uscdi>

---

## Patient Access to Health Information

### Blue Button 2.0 (CMS)
**Website:** <https://bluebutton.cms.gov/>

**Allows:** Medicare beneficiaries to connect claims data to apps they choose

**API:** FHIR-based, third-party app developers can build tools

**Use Cases:**
- Personal health records
- Care coordination apps
- Research (with consent)

### Trusted Exchange Framework and Common Agreement (TEFCA)

**Purpose:** Nationwide health information exchange  
**Status (2025):** Early implementation  
**Participants:** QHINs (Qualified Health Information Networks)

**Patient Benefit:** Health records follow patient across systems

**Equity Angle:** Rural and underserved populations often use multiple safety-net providers - interoperability critical

---

## Artificial Intelligence & Machine Learning in Healthcare

### FDA Regulation of AI/ML Medical Devices

**Website:** <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices>

**Approach:** Risk-based regulation
- **High risk:** Premarket approval required
- **Moderate risk:** 510(k) clearance
- **Low risk:** General controls

**Examples:**
- AI-enabled diagnostic imaging (high risk)
- Clinical decision support for sepsis detection (moderate)
- Wellness apps (low)

**Equity Concern:** Algorithm bias

### Algorithm Bias & Health Equity

**Problem:** AI trained on non-diverse datasets produces biased results

**Examples Documented:**
- **Optum algorithm:** Under-identified Black patients for care management
- **Dermatology AI:** Lower accuracy for darker skin tones
- **Pulse oximeters:** Overestimate oxygen levels in Black patients

**Solutions:**
- **Diverse training data:** Require representative datasets
- **Algorithmic impact assessments:** Pre-deployment equity analysis
- **Continuous monitoring:** Stratify AI performance by race/ethnicity
- **Transparency:** Disclose training data demographics

**Coalition for Health AI (Joint Commission Partner)**
**Website:** <https://www.coalitionforhealthai.org/>

**Mission:** Ensure AI in healthcare is trustworthy and equitable

**Resources:**
- AI development guidelines
- Bias detection tools
- Equity checklists

---

## Remote Patient Monitoring (RPM)

### Medicare Coverage (2025)
**CPT Codes:** 99453, 99454, 99457, 99458, 99091

**Requirements:**
- FDA-approved devices
- 16 days of data per month
- 20 minutes of clinical staff time

**Devices:**
- Blood pressure cuffs
- Glucose meters
- Weight scales
- Pulse oximeters
- Wearables (if FDA-cleared for medical use)

### Health Equity in RPM

**Digital Divide:**
- Requires smartphone or internet for data transmission
- May need cellular data plan

**Solutions:**
- **Cellular-enabled devices:** No patient internet needed
- **Device lending programs**
- **Coverage of data costs** (some Medicaid programs)

**Cultural Considerations:**
- Instructions in patient's language
- Tech support available
- Trusted community partners for distribution/training

---

## Health Information Exchange (HIE)

### Types of HIE

#### 1. Directed Exchange
**Like:** Secure email between known providers
**Use:** Referrals, care transitions

#### 2. Query-Based Exchange
**Function:** Provider searches for patient records across systems
**Use:** Emergency department, acute care

#### 3. Consumer-Mediated Exchange
**Patient-controlled:** Individuals manage and share own health data
**Tools:** Personal health records, patient portals

### SDOH Data Exchange

**Challenge:** Social service organizations often don't have EHRs

**Solutions:**
- **Community platforms:** Unite Us, findhelp.org with HIE integration
- **CBO data networks:** Shared platforms for social services
- **Consent management:** HIPAA + 42 CFR Part 2 (substance use) + state privacy laws

---

## Cybersecurity & Privacy

### HIPAA Security Rule Updates

**Focus:** Protecting electronic PHI (ePHI)

**Requirements:**
- **Administrative safeguards:** Policies, procedures, training
- **Physical safeguards:** Facility access, workstation security
- **Technical safeguards:** Encryption, authentication, audit controls

**2025 Threats:**
- Ransomware attacks on hospitals
- Phishing targeting healthcare workers
- Third-party vendor breaches

### HHS 405(d) Program
**Website:** <https://405d.hhs.gov/>

**Free Resources:**
- Cybersecurity practices for health sector
- Threat bulletins
- Technical volumes (e.g., email security, ransomware response)

**Tailored by:** Organization size (small, medium, large)

---

## Digital Therapeutics

### Definition
Software-based interventions to treat medical conditions

**Examples:**
- Diabetes prevention programs (DPP apps)
- Cognitive behavioral therapy apps for depression/anxiety
- Opioid use disorder treatment apps (e.g., reSET-O - FDA authorized)
- Hypertension management

### Evidence & Reimbursement (2025)

**FDA Approval:** Some digital therapeutics are prescription-only medical devices

**Coverage:**
- **Medicare:** Limited, case-by-case
- **Medicaid:** Some states cover DPP apps
- **Commercial:** Growing coverage, especially for behavioral health

**Equity Considerations:**
- Literacy level (most apps require 8th-grade reading level or higher)
- Language availability
- Cultural tailoring
- Device requirements

---

## Social Media & Health Misinformation

### Surgeon General Advisory on Health Misinformation (2021, ongoing)

**Concern:** False health information spreads rapidly on social platforms

**Health Equity Impact:** 
- Underserved communities disproportionately exposed to misinformation
- Language barriers limit access to credible information

**Organizational Response:**
- **Trusted messenger programs:** Partner with community leaders
- **Multilingual fact sheets**
- **Social media presence** to counter misinformation

### CDC Clear Communication Index
**Tool:** Assess and improve health communication materials

**Website:** <https://www.cdc.gov/ccindex/>

**Ensures:** Plain language, cultural appropriateness, actionability

---

## Broadband Access & Digital Equity

### Federal Programs

#### 1. Infrastructure Investment and Jobs Act (2021)
**Broadband Equity, Access, and Deployment (BEAD) Program**
- $42.5 billion for broadband infrastructure
- Priority: Unserved and underserved areas
- **Healthcare Angle:** Enables telehealth in rural/remote areas

#### 2. FCC Lifeline Program
**Subsidizes:** Phone and internet for low-income households
- Can be used for telehealth visits
- Enrollment through qualifying programs (Medicaid, SNAP, etc.)

#### 3. Emergency Connectivity Fund
**Focus:** Schools and libraries
- Can serve as community telehealth access points

### Digital Navigator Programs

**Concept:** Trained staff help individuals access and use technology

**Healthcare Applications:**
- Assist with patient portal enrollment
- Teach telehealth platform use
- Troubleshoot technical issues
- Connect to device lending programs

**Models:**
- Embedded in FQHCs, libraries, senior centers
- Funded by health systems, grants

---

## Wearables & Consumer Health Tech

### Apple Health, Google Fit, Others

**Integration with EHRs:**
- Some health systems accept Apple Health data
- Requires patient consent and data validation

**Equity Issues:**
- Cost of devices (Apple Watch, Fitbit, etc.)
- Data accuracy varies by skin tone (optical sensors)
- Digital literacy to interpret data

### Community Health Worker Use of Tech

**Tools:**
- Mobile apps for care management
- Tablets for patient education
- Text messaging for medication reminders
- Telehealth platforms to connect patients to providers

**Training Essential:** Tech is enabler, relationship is core

---

## Data Standards for Equity

### Race, Ethnicity, Language (REaL) Data Standards

**OMB Standards for Race:**
- American Indian or Alaska Native
- Asian
- Black or African American
- Native Hawaiian or Other Pacific Islander
- White

**Ethnicity:**
- Hispanic or Latino
- Not Hispanic or Latino

**Granularity:** Many systems use expanded categories (e.g., Asian: Chinese, Filipino, Asian Indian, etc.)

**Language:**
- Preferred language for healthcare
- Need for interpreter (yes/no)
- Specific language

### Sexual Orientation and Gender Identity (SOGI) Data

**Recommended Questions (National Academy of Medicine):**

**Gender Identity:**
- "What is your current gender identity?"
  - Male
  - Female
  - Transgender Male/Trans Man/Female-to-Male
  - Transgender Female/Trans Woman/Male-to-Female
  - Genderqueer/Gender Non-conforming
  - Additional category or other
  - Decline to answer

**Sex Assigned at Birth:**
- "What sex were you assigned at birth on your original birth certificate?"

**Sexual Orientation:**
- "Do you think of yourself as:"
  - Lesbian or gay
  - Straight (not lesbian or gay)
  - Bisexual
  - Something else
  - Don't know
  - Decline to answer

**EHR Implementation:** USCDI v4 includes SOGI

---

## For Global Consultants

### International Digital Health Initiatives

#### WHO Global Strategy on Digital Health (2020-2025)
**Pillars:**
1. Multisectoral collaboration
2. Sustainable health systems financing
3. Data governance and legislation
4. Equity and inclusiveness in digital health

**Resource:** <https://www.who.int/health-topics/digital-health>

#### European Union - eHealth Network
**Focus:** Cross-border health data exchange
- European Health Data Space
- eIDAS for health professional identification
- ePrescription interoperability

#### Low- and Middle-Income Countries (LMICs)
**Mobile health (mHealth):**
- SMS for medication reminders, appointment reminders
- Community health worker digital tools
- Vaccine tracking systems

**Challenges:** Internet access, electricity, digital literacy

---

## Emerging Technologies (2025-2030)

### Virtual Reality (VR) in Healthcare
**Applications:**
- Pain management
- Phobia treatment
- Surgical training
- Rehabilitation

**Equity:** Cost of equipment, motion sickness disparities

### Blockchain for Health Data
**Potential:**
- Patient-controlled health records
- Secure data exchange
- Medication supply chain tracking

**Status:** Pilots, not yet widespread

### Ambient Clinical Intelligence
**AI listens to patient-provider conversation, writes note**

**Benefits:** Reduce documentation burden  
**Concerns:** Accuracy, patient consent, language limitations

---

## Regulatory & Policy Monitoring

**Key Sources:**
- **ONC:** Health IT certification, interoperability rules
- **FDA:** Medical device/AI regulation
- **FCC:** Broadband, telehealth connectivity
- **FTC:** Health app privacy enforcement
- **CMS:** Telehealth coverage policy

**Subscribe to:**
- Federal Register (proposed rules)
- ONC and FDA email updates
- Industry associations (ATA, HIMSS, AMIA)

---

## Health IT Certifications & Standards

### HITRUST CSF (Cybersecurity Framework)
**For:** Health IT vendors, covered entities  
**Certifies:** Information security controls  
**Website:** <https://hitrustalliance.net/>

### EHNAC (Electronic Healthcare Network Accreditation Commission)
**Accredits:**
- HIEs
- Health IT vendors
- Telehealth platforms

### HL7 FHIR (Fast Healthcare Interoperability Resources)
**Standard:** API for health data exchange  
**Adoption:** Required by 21st Century Cures Act  
**Use:** Patient access apps, provider-to-provider data exchange

---

## Implementation Considerations

### Telehealth Program Checklist

☐ **Clinical protocols:** Which services appropriate for telehealth?  
☐ **Technology platform:** HIPAA-compliant, accessible, multilingual?  
☐ **Credentialing:** Providers licensed in patient's state?  
☐ **Language services:** Interpretation available?  
☐ **Informed consent:** Telehealth-specific consent obtained?  
☐ **Privacy:** Secure location for patient and provider?  
☐ **Equity:** Address digital divide (audio-only option, device lending)?  
☐ **Quality:** Measure patient satisfaction, clinical outcomes  
☐ **Billing:** Understand payer policies, document appropriately  

### EHR Optimization for Equity

☐ **Demographics:** Collect race, ethnicity, language, disability, SOGI  
☐ **SDOH:** Integrate screening tools (PRAPARE, AHC-HRSN)  
☐ **Language flags:** Alerts for interpreter needs  
☐ **Accessibility:** Screen reader compatible, large font options  
☐ **Reporting:** Ability to stratify quality measures by demographics  
☐ **Community resources:** Embed referral pathways in workflow  

---

## Key Takeaways

✓ **Telehealth permanence:** Post-pandemic flexibility largely maintained  
✓ **Digital divide is health equity issue:** Audio-only, devices, navigators needed  
✓ **Interoperability advancing:** USCDI, TEFCA enabling data exchange  
✓ **AI bias is real:** Requires diverse data, continuous monitoring  
✓ **SDOH data exchange critical:** Need community platform integration  
✓ **Privacy and security foundational:** Cybersecurity threats increasing  
✓ **SOGI data now standard:** USCDI v4, health equity requirement  

---

**Related Library Resources:**
- `Section-1557-Compliance.md` - Accessibility in telehealth
- `CLAS-Standards.md` - Language services via technology
- `NCQA-Programs.md` - Virtual Care Accreditation
- `SDOH-Social-Determinants.md` - Technology for SDOH interventions
