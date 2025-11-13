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
      { src: "/remodel-flooring.jpeg", alt: "Finished flooring" },
      { src: "/home-cta-background.jpeg", alt: "Home floor" },
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
    gallery: [
      { src: "/remodel-adu.jpeg", alt: "ADU exterior" },
      { src: "/remodel-kitchen.jpeg", alt: "ADU interior" },
    ],
  },
};
