export type FinancingProgram = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  heroImage: string;
  aprRange: string;
  termRange: string;
  loanAmounts: string;
  fundingSpeed: string;
  bestFor: string[];
  highlights: string[];
  process: { title: string; desc: string }[];
  documents: string[];
};

export const financingPrograms: FinancingProgram[] = [
  {
    slug: "zero-interest",
    name: "0% Promotional Plan",
    headline: "Same-as-cash payments for 12 months",
    summary:
      "Complete your project today and pay it off over the next year with no interest when the promotional balance is cleared within 12 months.",
    heroImage: "/hero-remodeling.jpeg",
    aprRange: "0% introductory APR (9.99% standard after promo)",
    termRange: "12-month promotional window",
    loanAmounts: "$2,500 – $25,000",
    fundingSpeed: "Instant credit decisions",
    bestFor: ["Bathroom refreshes", "Flooring replacements", "Interior or exterior paint"],
    highlights: [
      "No interest when paid within the promo period",
      "No prepayment penalty",
      "Simple online application",
    ],
    process: [
      { title: "Apply with soft pull", desc: "We send a secure link so you can apply without impacting your credit score." },
      { title: "Select promotional terms", desc: "Choose the 12-month plan and lock in the same-as-cash payoff window." },
      { title: "Kick off construction", desc: "Once approved, we schedule your project and align the draw schedule." },
      { title: "Pay off balance", desc: "Make equal payments or pay the balance before month 12 to avoid interest." },
    ],
    documents: [
      "Government-issued ID",
      "Most recent paystub or proof of income",
      "Project scope + estimate from ProFlow",
    ],
  },
  {
    slug: "low-monthly",
    name: "Low Monthly Payment Plan",
    headline: "Fixed-rate financing over 5–10 years",
    summary:
      "Spread larger remodeling investments across predictable monthly payments with competitive fixed APR options.",
    heroImage: "/remodel-kitchen.jpeg",
    aprRange: "Rates starting at 6.99% APR",
    termRange: "60 – 120 month terms",
    loanAmounts: "$10,000 – $150,000",
    fundingSpeed: "Approvals within 1 business day",
    bestFor: ["Kitchen remodels", "ADUs or additions", "Whole-home updates"],
    highlights: [
      "Fixed payments for better budgeting",
      "Automatic draft available",
      "No equity required",
    ],
    process: [
      { title: "Review project scope", desc: "We finalize costs and select the repayment term that fits your budget." },
      { title: "Submit secure application", desc: "Complete the form online with our national finance partner." },
      { title: "Confirm approval", desc: "Approvals typically arrive within hours along with your payment schedule." },
      { title: "Fund milestones", desc: "Funds release alongside construction milestones managed through ProFlow360." },
    ],
    documents: [
      "Government-issued ID",
      "Income verification (paystub or tax return)",
      "Mortgage statement (for reference only)",
      "Detailed project proposal",
    ],
  },
  {
    slug: "home-equity",
    name: "Home Equity & HELOC Coordination",
    headline: "Leverage home equity for large-scale projects",
    summary:
      "Work with our local credit union partners to unlock lower rates and higher limits backed by the equity you already have.",
    heroImage: "/remodel-adu.jpeg",
    aprRange: "Variable rates tied to prime",
    termRange: "5 – 20 year draws and amortization",
    loanAmounts: "$25,000 – $250,000+",
    fundingSpeed: "5 – 10 business days (lender dependent)",
    bestFor: ["Full-home remodels", "ADUs & additions", "Exterior makeovers"],
    highlights: [
      "Lowest available monthly payment",
      "Works with phased construction",
      "Potential tax advantages (consult your advisor)",
    ],
    process: [
      { title: "Equity check", desc: "We review your property value and remaining mortgage to estimate available equity." },
      { title: "Partner lender intro", desc: "We connect you with a local credit union or lender already familiar with ProFlow." },
      { title: "Appraisal + underwriting", desc: "The lender orders any required appraisal and finalizes loan docs." },
      { title: "Fund + schedule", desc: "Once funds are available, we lock your project schedule and manage draws." },
    ],
    documents: [
      "Government-issued ID",
      "Current mortgage statement",
      "Homeowners insurance declaration page",
      "Most recent W2 or tax return",
      "Project scope with cost breakdown",
    ],
  },
];

export function getFinancingProgram(slug: string) {
  return financingPrograms.find((program) => program.slug === slug);
}
