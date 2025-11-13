export type RemodelSlug =
  | "remodeling"
  | "bathroom"
  | "kitchen"
  | "garage-conversions"
  | "flooring"
  | "drywall-framing"
  | "adu";

export type RemodelContent = {
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
  cta?: string;
};

export const remodelContent: Record<RemodelSlug, RemodelContent> = {
  remodeling: {
    heroTitle: "Remodeling",
    heroSubtitle: "Kitchens, bathrooms, conversions & full-home remodels with organized project management.",
    heroImage: "/hero-remodeling.jpeg",
    overview:
      "Licensed remodelers coordinate design, permits, and construction so your project moves forward without surprises.",
    benefits: [
      "Transparent scopes and budgets",
      "Clean job sites with ProFlow360 communication",
      "Local subcontractors, experienced GC oversight",
    ],
    process: [
      "Consultation and discovery",
      "Scope, design, and estimate",
      "Execution with weekly updates",
      "Final walkthrough and warranty",
    ],
    highlights: [
      { title: "Multi-division team", desc: "Gutters, painting, and remodeling all under one brand." },
      { title: "Tech enabled", desc: "Scheduling, photos, and approvals via ProFlow360." },
      { title: "Compliance", desc: "Permits, inspections, and documentation handled for you." },
    ],
    gallery: [
      { src: "/remodel-kitchen.jpeg", alt: "Modern kitchen" },
      { src: "/remodel-flooring.jpeg", alt: "Fresh flooring" },
      { src: "/remodel-adu.jpeg", alt: "ADU exterior" },
    ],
    copySections: [
      {
        title: "Design + build under one roof",
        text: "ProFlow Home Services coordinates consultations, scopes, and construction so remodels stay on budget and on schedule.",
      },
      {
        title: "Meticulous communication",
        text: "Every subcontractor, permit, and payment is tracked through ProFlow360, keeping you in the loop from drawings to the final walkthrough.",
      },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Service Areas", href: "/service-areas" },
    ],
    cta: "Start your remodeling consultation today",
  },
  bathroom: {
    heroTitle: "Bathroom Remodeling",
    heroSubtitle: "Smart layouts, durable finishes, and tidy construction from consultation to walkthrough.",
    heroImage: "/hero-remodeling2.jpeg",
    overview:
      "We manage fixtures, tile, lighting, and ventilation with trusted subtrades to keep your remodel on schedule.",
    benefits: [
      "Thoughtful fixture pairing and lighting",
      "Permits + codes handled end-to-end",
      "Detailed punch list and cleanup",
    ],
    process: [
      "Consultation",
      "Scope & estimate",
      "Construction",
      "Final walkthrough",
    ],
    highlights: [
      { title: "Material sourcing", desc: "Help selecting tile, stone, and hardware." },
      { title: "Coordination", desc: "Electric, plumbing, and tile specialists." },
      { title: "Clean job site", desc: "Daily dust control and nightly cleanup." },
    ],
    gallery: [
      { src: "/dreamina-2025-11-12-8102-A luxurious, freshly remodeled bathroom ....jpeg", alt: "Lux bathroom" },
      { src: "/hero-remodeling.jpeg", alt: "Remodel dive" },
    ],
    copySections: [
      {
        title: "Bathrooms that breathe",
        text: "We highlight clean lines, durable fixtures, and tile patterns that match your lifestyle while keeping the home functional during construction.",
      },
      {
        title: "Tech-backed oversight",
        text: "ProFlow360 shares the schedule, photos, and approvals so you stay confident throughout demolition, plumbing, and finish work.",
      },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Projects", href: "/projects" },
    ],
  },
  kitchen: {
    heroTitle: "Kitchen Remodeling",
    heroSubtitle: "Functional storage, durable finishes, and clean execution elevate your home.",
    heroImage: "/remodel-kitchen.jpeg",
    overview:
      "From cabinets and countertops to lighting and flooring, we orchestrate every discipline for a cohesive result.",
    benefits: [
      "Layout planning + storage optimization",
      "Premium materials and appliances",
      "Permits, inspections, and phased living plans",
    ],
    process: [
      "Consultation",
      "Scope & estimate",
      "Construction",
      "Final walkthrough",
    ],
    highlights: [
      { title: "Design partnerships", desc: "Coordinate with designers or build from your drawings." },
      { title: "Sequenced builds", desc: "Keep kitchens usable during remodel." },
      { title: "Transparent communication", desc: "Daily updates via ProFlow360." },
    ],
    gallery: [
      { src: "/remodel-kitchen.jpeg", alt: "Kitchen finish" },
      { src: "/remodel-flooring.jpeg", alt: "Flooring" },
    ],
    copySections: [
      {
        title: "Kitchens engineered for living",
        text: "We combine storage solutions, lighting, and finishes so your kitchen supports everyday life and entertaining.",
      },
      {
        title: "Phased builds",
        text: "The crew sequences demolition, cabinets, and appliances to keep disruption low and transparency high via ProFlow360.",
      },
    ],
    internalLinks: [
      { text: "Contact", href: "/contact" },
      { text: "Projects", href: "/projects" },
    ],
  },
  "garage-conversions": {
    heroTitle: "Garage Conversions",
    heroSubtitle: "Add bedrooms, offices, or ADU-ready space with thoughtful planning and code compliance.",
    heroImage: "/hero-remodeling2.jpeg",
    overview:
      "We handle insulation, framing, electrical, and finishes to transform garages into high-use living spaces.",
    benefits: [
      "Compliance with local ADU/garage conversion regs",
      "Insulated, finished, and climate controlled spaces",
      "High-quality doors, windows, and finishes",
    ],
    process: [
      "Consultation & feasibility",
      "Scope & estimate",
      "Construction",
      "Final walkthrough",
    ],
    highlights: [
      { title: "Permits included", desc: "We prepare plans and pull the necessary permits." },
      { title: "Multi-trade crew", desc: "Framing, electrical, plumbing, and finishes." },
      { title: "Future-ready", desc: "Design for ADUs or income suites." },
    ],
    gallery: [
      { src: "/remodel-adu.jpeg", alt: "Garage conversion" },
      { src: "/hero-remodeling2.jpeg", alt: "Conversion interior" },
    ],
    copySections: [
      {
        title: "Create livable space",
        text: "Garage conversions transform unused bays into bedrooms, offices, or rental suites while meeting local codes.",
      },
      {
        title: "Compliance first",
        text: "We secure permits, insulate properly, and sequence electrical/plumbing to deliver code-ready occupancy.",
      },
    ],
    internalLinks: [
      { text: "ADUs", href: "/remodeling/adu" },
      { text: "Projects", href: "/projects" },
    ],
  },
  flooring: {
    heroTitle: "Flooring",
    heroSubtitle: "Durable flooring installations with clean prep and finish.",
    heroImage: "/remodel-flooring.jpeg",
    overview:
      "LVP, hardwood, tile, and stone installed with precision for long-lasting beauty.",
    benefits: [
      "Material assistance and selection",
      "Detailed subfloor prep",
      "Final inspection and cleanup",
    ],
    process: [
      "Consultation",
      "Prep",
      "Installation",
      "Walkthrough",
    ],
    highlights: [
      { title: "Master installers", desc: "Years of flooring experience across surfaces." },
      { title: "Precise estimates", desc: "Material and labor broken out clearly." },
      { title: "Coordination", desc: "Sync with cabinetry, tile, and trim trades." },
    ],
    gallery: [
      { src: "/lvp-flooring.jpeg", alt: "Luxurious vinyl plank flooring" },
      { src: "/lvp-flooring-dark.jpeg", alt: "Dark luxury vinyl plank" },
      { src: "/lvp-flooring2.jpeg", alt: "Close-up of flooring" },
      { src: "/lvp-flooring3.jpeg", alt: "Flooring transition" },
      { src: "/lvp-flooring4.jpeg", alt: "Natural tone vinyl plank" },
      { src: "/remodel-flooring.jpeg", alt: "Flooring install" },
    ],
    copySections: [
      {
        title: "Flooring that lasts",
        text: "Luxury vinyl plank, hardwood, and tile installations withstand Sacramento weather and daily foot traffic with proper prep.",
      },
      {
        title: "Full-service coordination",
        text: "We lock in materials, timelines, and finishes so the flooring becomes the reliable foundation for the rest of the remodel.",
      },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Contact", href: "/contact" },
    ],
  },
  "drywall-framing": {
    heroTitle: "Drywall & Framing",
    heroSubtitle: "Walls, ceilings, texture, and repairs ready for paint.",
    heroImage: "/hero-remodeling2.jpeg",
    overview:
      "We build walls, fix damage, and deliver smooth drywall with tight seams and tidy texture.",
    benefits: [
      "Structural framing and repairs",
      "Texture matching and finishes",
      "Prepped and ready for paint",
    ],
    process: [
      "Review scope",
      "Texture/mud/tape",
      "Sanding and touch-ups",
      "Final inspection",
    ],
    highlights: [
      { title: "Large crews", desc: "Scale from small patches to whole-room builds." },
      { title: "Texture matching", desc: "Blend new work into existing surfaces." },
      { title: "Clean job sites", desc: "Dust control and nightly cleanup." },
    ],
    gallery: [
      { src: "/hero-remodeling2.jpeg", alt: "Drywall crew" },
      { src: "/home-cta-background.jpeg", alt: "Drywall finish" },
    ],
    copySections: [
      {
        title: "Structural & repair work",
        text: "Drywall and framing sections create the canvas for paint, tile, and flooring—so we build them straight and clean.",
      },
      {
        title: "Precision ready for paint",
        text: "Our crews tape, mud, sand, and texture with consistent results that leave painters with smooth walls and ceilings.",
      },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Projects", href: "/projects" },
    ],
  },
  adu: {
    heroTitle: "ADUs",
    heroSubtitle: "Accessory dwelling units delivered on time with compliance handled.",
    heroImage: "/remodel-adu.jpeg",
    overview:
      "We build ADUs with licensed crews, permit-ready plans, and disciplined project management.",
    benefits: [
      "Code-compliant design and construction",
      "Energy-efficient and modern finishes",
      "Integrated warranty and documentation",
    ],
    process: [
      "Consultation",
      "Design & scope",
      "Construction",
      "Walkthrough",
    ],
    highlights: [
      { title: "Design + permitting", desc: "We coordinate architects and permit submissions." },
      { title: "Turnkey build", desc: "HVAC, electrical, plumbing, and finishes." },
      { title: "Scaling to franchise", desc: "Supports future ProFlow branches." },
    ],
    copySections: [
      {
        title: "ADUs designed for modern living",
        text: "Accessory units, guest suites, and rental spaces receive the same planning, permits, and finishes as our flagship remodels.",
      },
      {
        title: "Documented compliance",
        text: "We align with Sacramento County ADU rules, sequence inspections, and share photo updates in ProFlow360.",
      },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Remodeling", href: "/remodeling" },
    ],
    gallery: [
      { src: "/remodel-adu.jpeg", alt: "ADU exterior" },
      { src: "/adu-interior.jpeg", alt: "ADU interior" },
      { src: "/adu-interior2.jpeg", alt: "ADU interior detail" },
      { src: "/adu-interior3.jpeg", alt: "ADU living" },
    ],
  },
};
