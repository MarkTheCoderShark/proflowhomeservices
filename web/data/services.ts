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
  heroImage: string;
  overview: string;
  benefits: string[];
  process: string[];
  highlights: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  copySections: { title: string; text: string }[];
  internalLinks: { text: string; href: string }[];
};

export const serviceContent: Record<ServiceSlug, ServicePageContent> = {
  "gutter-cleaning": {
    heroTitle: "Gutter Cleaning",
    heroSubtitle: "Protect your roof, siding, and foundation with thorough debris removal and flushing.",
    heroImage: "/hero-service-gutter-cleaning.jpeg",
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
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Tech clearing gutters" },
      { src: "/hero-city-roseville.jpeg", alt: "Roseville home" },
      { src: "/hero-city-rocklin.jpeg", alt: "Rocklin roof" },
    ],
    copySections: [
      {
        title: "Why clogged gutters hurt homes",
        text: "When gutters back up, rainwater breeches siding, ruins landscaping, and leaves you guessing if the roof is leaking." ,
      },
      {
        title: "ProFlow360 keeps you updated",
        text: "Our crews log every inspection and share photos/texts so you can see the clean lines, proper pitch, and cleared downspouts." ,
      },
    ],
    internalLinks: [
      { text: "Gutter Guards", href: "/services/gutter-guards" },
      { text: "Handyman Services", href: "/services/handyman" },
      { text: "Service Areas", href: "/service-areas" },
    ],
  },
  "gutter-guards": {
    heroTitle: "Gutter Guards",
    heroSubtitle: "Reduce cleaning frequency with professionally installed guards that actually work.",
    heroImage: "/hero-service-gutter-cleaning.jpeg",
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
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Gutter guard close-up" },
      { src: "/hero-service-gutter-cleaning.jpeg", alt: "Guard installation" },
    ],
    copySections: [
      {
        title: "Why guards matter",
        text: "Gutter guards reduce the weekly chore of cleaning, keeping debris out while preserving the clean aesthetic you expect from ProFlow." ,
      },
      {
        title: "Installed with premium standards",
        text: "We use manufacturer-recommended fasteners and show you the install sequence via ProFlow360, so you trust the investment.",
      },
    ],
    internalLinks: [
      { text: "Gutter Repair & Replacement", href: "/services/gutter-repair-replacement" },
      { text: "Service Areas", href: "/service-areas" },
    ],
  },
  "gutter-repair-replacement": {
    heroTitle: "Gutter Repair & Replacement",
    heroSubtitle: "Fix leaks, pitch issues, or replace failing gutter sections with pro-grade materials.",
    heroImage: "/hero-service-gutter-cleaning.jpeg",
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
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Repaired gutter" },
      { src: "/hero-city-auburn.jpeg", alt: "Auburn home" },
    ],
    copySections: [
      {
        title: "When repairs are the smarter choice",
        text: "Sagging runs, leaks, and pitch problems are often small fixes that restore performance without replacing the whole system.",
      },
      {
        title: "Transparent estimates",
        text: "We photograph the issue, explain repair vs replacement, and send the plan via ProFlow360 so you approve with confidence.",
      },
    ],
    internalLinks: [
      { text: "Maintenance Plans", href: "/services/maintenance-plans" },
      { text: "Service Areas", href: "/service-areas" },
    ],
  },
  "interior-painting": {
    heroTitle: "Interior Painting",
    heroSubtitle: "Freshen rooms with crisp edges, low-VOC products, and protective masking.",
    heroImage: "/hero-service-interior-painting.jpeg",
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
    gallery: [
      { src: "/hero-service-interior-painting.jpeg", alt: "Fresh interior walls" },
      { src: "/dreamina-2025-11-12-8102-A luxurious, freshly remodeled bathroom ....jpeg", alt: "Lux bathroom" },
    ],
    copySections: [
      {
        title: "Problem: outdated finishes",
        text: "Interiors grow tired quickly—streaked paint, scuffed trim, and clashing colors that reduce the feeling of a premium home.",
      },
      {
        title: "Solution: prep + premium products",
        text: "We protect your furnishings, patch walls, and apply low-VOC paints with crisp edges so your rooms feel calm and luxurious again.",
      },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Contact", href: "/contact" },
    ],
  },
  "exterior-painting": {
    heroTitle: "Exterior Painting",
    heroSubtitle: "High-performance coatings that stand up to sun, rain, and temperature swings.",
    heroImage: "/hero-service-exterior-painting.jpeg",
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
    gallery: [
      { src: "/hero-service-exterior-painting.jpeg", alt: "Exterior paint pro" },
      { src: "/home-cta-background.jpeg", alt: "Home exterior" },
    ],
    copySections: [
      {
        title: "Exterior wear and tear",
        text: "Sun, wind, and rain fade paint, crack trim, and leave moisture trapped under siding without a proactive refresh.",
      },
      {
        title: "Execution by licensed crews",
        text: "Our painters dispense contractor-grade systems, follow manufacturer specs, and send progress updates through ProFlow360.",
      },
    ],
    internalLinks: [
      { text: "Maintenance Plans", href: "/services/maintenance-plans" },
      { text: "Projects", href: "/projects" },
    ],
  },
  handyman: {
    heroTitle: "Handyman Services",
    heroSubtitle: "Small repairs, maintenance, and punch-list tasks completed efficiently.",
    heroImage: "/hero-service-handyman.jpeg",
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
    gallery: [
      { src: "/hero-service-handyman.jpeg", alt: "Handyman working" },
      { src: "/hero-city-roseville.jpeg", alt: "Roseville repair" },
    ],
    copySections: [
      {
        title: "Common homeowner headaches",
        text: "From stuck doors and drywall patches to trim updates, the to-do list never shrinks—until you call a team that handles it all.",
      },
      {
        title: "Organized, communicative crews",
        text: "Each job is scheduled through ProFlow360 so arrivals, scope, and invoices stay transparent and reliable.",
      },
    ],
    internalLinks: [
      { text: "Services", href: "/services" },
      { text: "Contact", href: "/contact" },
    ],
  },
  "pressure-washing": {
    heroTitle: "Pressure Washing",
    heroSubtitle: "Restore driveways, patios, and siding safely with calibrated pressure and detergents.",
    heroImage: "/hero-service-pressure-washing.jpeg",
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
    gallery: [
      { src: "/hero-service-pressure-washing.jpeg", alt: "Pressure washing" },
      { src: "/home-cta-background.jpeg", alt: "Clean driveway" },
    ],
    copySections: [
      {
        title: "Dirty surfaces steal curb appeal",
        text: "Moldy siding, grimy driveways, and algae-coated decks make homes look neglected—even if the structure is sound.",
      },
      {
        title: "Tailored cleaning",
        text: "We calibrate pressure and detergents so every surface—from concrete to wood—gets the right treatment.",
      },
    ],
    internalLinks: [
      { text: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { text: "Projects", href: "/projects" },
    ],
  },
  "roof-solar-cleaning": {
    heroTitle: "Roof & Solar Cleaning",
    heroSubtitle: "Keep shingles and panels free of debris, moss, and buildup.",
    heroImage: "/hero-service-roof-solar-cleaning.jpeg",
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
    gallery: [
      { src: "/hero-service-roof-solar-cleaning.jpeg", alt: "Solar cleaning" },
      { src: "/hero-city-folsom.jpeg", alt: "Folsom home" },
    ],
    copySections: [
      {
        title: "Dirt drags down performance",
        text: "Roofs and solar arrays need gentle cleaning to prevent moss, dust, and debris from shortening their life.",
      },
      {
        title: "Calibrated for warranties",
        text: "We follow manufacturer protocols for soft washing, document every visit, and share proofs in ProFlow360.",
      },
    ],
    internalLinks: [
      { text: "Roofing & Solar", href: "/services/roof-solar-cleaning" },
      { text: "Service Areas", href: "/service-areas" },
    ],
  },
  "maintenance-plans": {
    heroTitle: "Maintenance Plans",
    heroSubtitle: "Schedule seasonal visits for gutters, washing, and inspections with one trusted team.",
    heroImage: "/hero-service-gutter-cleaning.jpeg",
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
    gallery: [
      { src: "/hero-service-gutter-cleaning.jpeg", alt: "Maintenance visit" },
      { src: "/home-cta-background.jpeg", alt: "Home after service" },
    ],
    copySections: [
      {
        title: "Proactive seasonal care",
        text: "A yearly maintenance plan prevents surprises by combining gutters, washing, and inspections into a single relationship.",
      },
      {
        title: "Automated follow-ups",
        text: "ProFlow360 schedules and reminds you, so the same crews arrive at consistent intervals without you chasing dates.",
      },
    ],
    internalLinks: [
      { text: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { text: "Pressure Washing", href: "/services/pressure-washing" },
    ],
  },
};
