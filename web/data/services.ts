export type ServiceSlug =
  | "gutter-cleaning"
  | "gutter-guards"
  | "gutter-repair-replacement"
  | "interior-painting"
  | "exterior-painting"
  | "handyman"
  | "pressure-washing"
  | "roof-solar-cleaning"
  | "maintenance-plans";

export type ServicePageContent = {
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: string[];
  process: string[];
  highlights: { title: string; desc: string }[];
};

export const serviceContent: Record<ServiceSlug, ServicePageContent> = {
  "gutter-cleaning": {
    heroTitle: "Gutter Cleaning",
    heroSubtitle: "Protect your roof, siding, and foundation with thorough debris removal and flushing.",
    overview:
      "We hand-remove the grime your gutters collect each season, flush every downspout, and document the results with before/after photos.",
    benefits: [
      "Prevent overflow, leaks, and fascia/soffit damage",
      "Keep water away from foundations and landscaping",
      "Inspect for clogs, pitch issues, and missing fasteners",
    ],
    process: [
      "Inspect gutters, ladders, and safety zones",
      "Manually remove debris and bag it",
      "Flush downspouts and test water flow",
      "Clean up and capture before/after photos",
    ],
    highlights: [
      { title: "Local crews", desc: "Sacramento-area technicians with attention to detail." },
      { title: "Tech-enabled updates", desc: "ProFlow360 keeps you informed via text and photo logs." },
      { title: "Insurance ready", desc: "We document every job for your records." },
    ],
  },
  "gutter-guards": {
    heroTitle: "Gutter Guards",
    heroSubtitle: "Reduce cleaning frequency with professionally installed guards that actually work.",
    overview:
      "We pair proven guard systems with precise installation so the water flows freely while debris stays out.",
    benefits: [
      "Cut down cleanup visits",
      "Extend the life of your gutters",
      "Protect against pests and overflow",
    ],
    process: [
      "Measure and recommend the right system",
      "Prepare gutters, replace damaged sections",
      "Install guards with even seams and spacing",
      "Test flow and leave the job spotless",
    ],
    highlights: [
      { title: "Premium brands", desc: "We source guards built for California climates." },
      { title: "Warrantied work", desc: "Clear coverage on guards and installation." },
      { title: "Bundle friendly", desc: "Pair with cleaning or repairs for savings." },
    ],
  },
  "gutter-repair-replacement": {
    heroTitle: "Gutter Repair & Replacement",
    heroSubtitle: "Fix leaks, pitch issues, or replace failing gutter sections with pro-grade materials.",
    overview:
      "We diagnose corrosion, pinholes, and sagging runs, then repair or replace sections so water leaves your roof cleanly.",
    benefits: [
      "Stop leaks before they ruin landscaping",
      "Align pitch for proper drainage",
      "Upgrade to heavier gauges when needed",
    ],
    process: [
      "Assess damage and recommend repair vs replacement",
      "Reinforce hangers and seams with new fasteners",
      "Match new sections to your existing profile",
      "Test pitch and complete cleanup",
    ],
    highlights: [
      { title: "Seamless finishes", desc: "Custom-cut sections with matching colors." },
      { title: "Experience", desc: "Hundreds of gutters serviced every year." },
      { title: "Transparent pricing", desc: "Flat-rate options and photo estimates." },
    ],
  },
  "interior-painting": {
    heroTitle: "Interior Painting",
    heroSubtitle: "Freshen rooms with crisp edges, low-VOC products, and protective masking.",
    overview:
      "We prep walls, patch imperfections, and apply premium paints for a showroom finish that wears well.",
    benefits: [
      "Mask furniture and floors carefully",
      "Prep with patching, sanding, and priming",
      "Deliver crisp lines and even coverage",
    ],
    process: [
      "Walk through rooms with you for colors and scope",
      "Protect surfaces and complete prep work",
      "Apply finish coats with detail around trim",
      "Walk through and touch up any needed areas",
    ],
    highlights: [
      { title: "Professional crews", desc: "Clean, respectful techs who treat your home like theirs." },
      { title: "Color help", desc: "Guidance on palettes that flow with your lifestyle." },
      { title: "Quick turnaround", desc: "Efficient scheduling via ProFlow360." },
    ],
  },
  "exterior-painting": {
    heroTitle: "Exterior Painting",
    heroSubtitle: "High-performance coatings that stand up to sun, rain, and temperature swings.",
    overview:
      "We pressure-wash, prep, and paint exteriors with contractor-grade products so your home looks amazing for years.",
    benefits: [
      "Protect wood trim and siding",
      "Improve curb appeal instantly",
      "Use top-tier paints designed for California weather",
    ],
    process: [
      "Power wash and dry the exterior",
      "Scrape, sand, and prime bare wood",
      "Caulk gaps and protect landscaping",
      "Apply manufacturer-approved top coats",
      "Final walkthrough and cleanup",
    ],
    highlights: [
      { title: "Weather-ready", desc: "Paint systems designed for heat and humidity." },
      { title: "Detail-focused", desc: "Clean lines around trims and shutters." },
      { title: "Project management", desc: "Weekly updates in ProFlow360." },
    ],
  },
  handyman: {
    heroTitle: "Handyman Services",
    heroSubtitle: "Small repairs, maintenance, and punch-list tasks completed efficiently.",
    overview:
      "One phone call covers drywall, trim, fixtures, gates, and everything you’d hire a trusted handyman for.",
    benefits: [
      "Fix leaks, holes, and doors",
      "Update fixtures and hardware",
      "Keep older homes operating safely",
    ],
    process: [
      "Assess request and prioritize safety",
      "Provide transparent pricing",
      "Execute repairs with skilled techs",
      "Clean up and review the work with you",
    ],
    highlights: [
      { title: "Multi-trade crew", desc: "Electrician, carpentry, and general repairs under one roof." },
      { title: "Coordination", desc: "Bundle with gutter or painting projects." },
      { title: "Reliable", desc: "Same-day responses for urgent fixes." },
    ],
  },
  "pressure-washing": {
    heroTitle: "Pressure Washing",
    heroSubtitle: "Restore driveways, patios, and siding safely with calibrated pressure and detergents.",
    overview:
      "We clean concrete, decking, roofs, and fences with equipment tuned for each surface and eco-friendly cleaners.",
    benefits: [
      "Boost curb appeal",
      "Prevent mold and mildew buildup",
      "Prepare surfaces for paint or sealants",
    ],
    process: [
      "Select pressure and solution for the surface",
      "Soft-wash sensitive materials (roof, siding)",
      "High-pressure clean for driveways and decks",
      "Rinse and inspect with you",
    ],
    highlights: [
      { title: "Protective techniques", desc: "Soft wash on roofs, high pressure on concrete." },
      { title: "Eco solutions", desc: "Biodegradable soaps and responsible runoff." },
      { title: "Before/after proof", desc: "Photos shared through ProFlow360." },
    ],
  },
  "roof-solar-cleaning": {
    heroTitle: "Roof & Solar Cleaning",
    heroSubtitle: "Keep shingles and panels free of debris, moss, and buildup.",
    overview:
      "We clean roofs and solar arrays with low-pressure techniques that won’t void warranties while improving efficiency.",
    benefits: [
      "Protect roofing materials",
      "Boost solar performance",
      "Remove staining and organic growth",
    ],
    process: [
      "Inspect material type and panel manufacturer rules",
      "Apply soft wash solutions and rinse carefully",
      "Clean debris from gutters and valleys",
      "Final photos and maintenance notes",
    ],
    highlights: [
      { title: "Solar safe", desc: "We follow manufacturer cleaning protocols." },
      { title: "Insurance-ready", desc: "Documentation for warranties." },
      { title: "Roof health", desc: "Spot early damage before it becomes a leak." },
    ],
  },
  "maintenance-plans": {
    heroTitle: "Maintenance Plans",
    heroSubtitle: "Schedule seasonal visits for gutters, washing, and inspections with one trusted team.",
    overview:
      "Pick a plan for quarterly cleaning, pressure washing, or annual tune-ups and we’ll handle the reminders and scheduling.",
    benefits: [
      "Prevent costly repairs",
      "Keep documentation for insurance",
      "One point of contact for the whole home",
    ],
    process: [
      "Choose a plan that matches your needs",
      "We schedule and remind through ProFlow360",
      "Technicians complete services on the agreed timeline",
      "Receive reports and future recommendations",
    ],
    highlights: [
      { title: "Flexible visits", desc: "Seasonal, quarterly, or custom schedules." },
      { title: "Discounted bundles", desc: "Combine gutters, washing, and handyman work." },
      { title: "ProFlow360 tracking", desc: "See every visit in one dashboard." },
    ],
  },
};
