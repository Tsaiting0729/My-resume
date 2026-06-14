// ============================================================
// RESUME DATA
// ------------------------------------------------------------
// Edit ONLY this file to update the content of your resume.
// The layout/design in index.html will automatically update.
//
// Tips:
// - Keep the structure (keys) the same; only change the values.
// - For bullet points, each line inside [ ... ] is one bullet.
//   Add a new bullet by adding a new line ending with a comma.
// - To remove a section entirely, leave its array empty: []
// ============================================================

const resumeData = {
  name: "Tsai Ting Lee",
  contact: {
    location: "Hoboken, NJ",
    email: "tlee11@stevens.edu",
    phone: "(551) 263-9398",
    linkedin: "https://www.linkedin.com/in/tsaitinglee/",
    linkedinLabel: "linkedin.com/in/tsaitinglee"
  },

  education: [
    {
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      degree: "Master of Science in Finance",
      date: "Jan. 2026 \u2013 Sep. 2027 (Expected)"
    },
    {
      school: "Tamkang University (TKU)",
      location: "New Taipei, Taiwan",
      degree: "Bachelor in Management Sciences",
      date: "Sep. 2017 \u2013 Jun. 2021"
    }
  ],

  experience: [
    {
      title: "Accounts Receivable Accountant",
      company: "Well & Creat International Inc.",
      location: "New Taipei, Taiwan",
      date: "Feb 2025 \u2013 Sep 2025",
      bullets: [
        "Managed and reconciled 1,000+ monthly accounts receivable transactions using ERP systems, performing payment matching and journal entry generation to ensure financial data integrity and reporting accuracy.",
        "Compiled VAT-related accounting data and coordinated with external accountants, maintaining compliance with regulatory reporting standards and reinforcing financial discipline across the reporting cycle.",
        "Supported month-end close procedures by reconciling accounts receivable ledgers, generating financial reports, and verifying journal entry accuracy against internal accounting policies, reducing reporting discrepancies and ensuring on-time close delivery."
      ]
    },
    {
      title: "Securities Broker",
      company: "Yuanta Securities",
      location: "New Taipei, Taiwan",
      date: "Feb 2022 \u2013 Jun 2024",
      bullets: [
        "Advised 50+ individual clients on multi-asset investment strategies across equities, fixed income, active/passive funds, and structured notes (FCNs), contributing to a book of client assets under advisory.",
        "Executed a USD 200,000 bond transaction for a retail client, conducting full suitability analysis covering risk-return profile, credit quality, duration, and liquidity, delivering a tailored fixed income recommendation.",
        "Conducted product analysis on fixed income instruments and structured notes, evaluating features including coupon structure, maturity, knock-in provisions, and downside risk to support client-facing investment recommendations.",
        "Monitored portfolio performance and market conditions across asset classes on a daily basis, proactively flagging material changes to client holdings and adjusting recommendations based on updated risk assessments."
      ]
    }
  ],

  projects: [
    {
      title: "Fixed Income Portfolio Analysis",
      tags: "Excel, Python, pandas",
      date: "Jan 2026 \u2013 Feb 2026",
      bullets: [
        "Constructed and analyzed a multi-bond portfolio evaluating duration, yield-to-maturity, and credit spread dynamics across sovereign and corporate issuers to assess interest rate sensitivity.",
        "Modeled scenario analysis under parallel and non-parallel yield curve shifts, quantifying portfolio value changes and recommending rebalancing strategies to optimize risk-adjusted return."
      ]
    }
  ],

  skills: {
    languages: ["Python (Pandas, NumPy, yfinance)"],
    tools: ["Microsoft Excel \u2013 Advanced", "MS Office PowerPoint", "Bloomberg"],
    financial: [
      "Fixed Income Analysis",
      "Equity Trading Operations",
      "Fund Analysis (Active & Passive)",
      "Structured Products Analysis (FCNs)",
      "Financial Reporting & Reconciliation",
      "Suitability Assessment & Risk-Return Evaluation",
      "ERP Systems (Accounts Receivable & Payment Processing)"
    ]
  },

  certifications: [
    { name: "Taiwan Securities Association \u2013 Qualification Exam for Securities Specialist", date: "Apr 2021" },
    { name: "Taiwan Securities Association \u2013 Qualification Exam for Senior Securities Specialist", date: "Oct 2022" },
    { name: "Chinese National Futures Association \u2013 Qualification Exam for Futures Specialist", date: "Sep 2022" },
    { name: "Trust Association of R.O.C. \u2013 Professional Test on Trust Business Specialist", date: "Mar 2022" },
    { name: "Life Insurance Association of R.O.C. \u2013 Life Insurance Specialist", date: "May 2023, Mar 2024" },
    { name: "Non-life Insurance Association of R.O.C. \u2013 Property & Casualty Insurance Specialist", date: "Feb 2023" },
    { name: "Taiwan Academy of Banking and Finance \u2013 Financial Markets & Professional Ethics", date: "Jun 2020" }
  ]
};
