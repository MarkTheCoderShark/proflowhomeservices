import type { LucideIcon } from "lucide-react";
import {
  Search,
  Trash2,
  Droplets,
  Camera,
  Ruler,
  Wrench,
  Shield,
  CheckCircle,
  Clipboard,
  Users,
  Paintbrush,
  Sparkles,
  ClipboardCheck,
  MessageSquare,
  HardHat,
  Eye,
  FileSearch,
  Hammer,
  SprayCan,
  CalendarCheck,
  FileText,
  Bell,
} from "lucide-react";

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
  process: { title: string; desc: string; icon: LucideIcon }[];
  highlights: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  copySections: { title: string; text: string }[];
  internalLinks: { text: string; href: string }[];
  // New optional fields
  beforeAfter?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  relatedServices?: {
    href: string;
    title: string;
    desc: string;
    image: string;
  }[];
  faqs?: { q: string; a: string }[];
  serviceAreas?: {
    title: string;
    href: string;
    image?: string;
  }[];
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
      {
        title: "Inspection & Safety Setup",
        desc: "We inspect your gutter system, assess debris levels, and set up ladders with proper safety equipment to protect your property.",
        icon: Search,
      },
      {
        title: "Debris Removal",
        desc: "Our team hand-scoops all leaves, pine needles, and grime from gutters and channels, bagging everything for proper disposal.",
        icon: Trash2,
      },
      {
        title: "Downspout Flushing",
        desc: "We flush every downspout with water to ensure complete drainage, identify hidden clogs, and test proper water flow.",
        icon: Droplets,
      },
      {
        title: "Documentation & Cleanup",
        desc: "Before leaving, we clean up all debris and share before/after photos through ProFlow360 so you can see the results.",
        icon: Camera,
      },
    ],
    highlights: [
      { title: "Local crews", desc: "Sacramento-area technicians with attention to detail." },
      { title: "Tech-enabled updates", desc: "ProFlow360 keeps you informed via text and photo logs." },
      { title: "Insurance ready", desc: "We document every job for your records." },
    ],
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Professional gutter cleaning service on a Sacramento area home by ProFlow Home Services" },
      { src: "/hero-city-roseville.jpeg", alt: "Gutter cleaning project in Roseville, California" },
      { src: "/hero-city-rocklin.jpeg", alt: "Professional gutter maintenance on a Rocklin home" },
    ],
    copySections: [
      {
        title: "Why Clogged Gutters Hurt Sacramento Homes",
        text: "When gutters back up, rainwater breeches siding, ruins landscaping, and leaves you guessing if the roof is leaking. In Sacramento's climate, where we experience intense heat followed by sudden winter storms, clogged gutters become a serious liability. The dry summer months fill gutters with leaves, pine needles, and debris from surrounding trees, creating the perfect blockage when rain finally arrives. Water overflow can damage your fascia boards, soften the wood behind your gutters, and even seep into your attic insulation, leading to expensive mold remediation. ProFlow's gutter cleaning service removes this risk before the rainy season hits, protecting your home's structural integrity and your peace of mind.",
      },
      {
        title: "Common Gutter Problems in Sacramento Homes",
        text: "Sacramento homeowners face unique gutter challenges throughout the year. Valley oak trees drop massive amounts of leaves in fall, while cottonwoods release fluffy seeds that mat together and block downspouts completely. Many older Sacramento neighborhoods have mature tree canopies that continuously shed debris onto rooflines. Additionally, our hot, dry summers bake organic matter into hard clumps that regular rain can't wash away. Bird nests, wasp colonies, and rodent activity are common in neglected gutters, creating health hazards and fire risks during California's wildfire season. We've seen gutters in Carmichael, Fair Oaks, and East Sacramento pull away from homes entirely due to the weight of accumulated debris and standing water. Regular professional gutter cleaning prevents these expensive repair scenarios.",
      },
      {
        title: "Why Choose ProFlow for Gutter Cleaning in Sacramento",
        text: "ProFlow brings local expertise and technology together for superior gutter cleaning service. Our Sacramento-based crews understand regional tree species, seasonal weather patterns, and the specific challenges homes face in different neighborhoods. We use ProFlow360 technology to document every job with timestamped before-and-after photos sent directly to your phone, providing transparency that other gutter cleaning companies can't match. Our technicians are fully insured, background-checked, and trained on proper ladder safety and debris removal techniques.",
      },
      {
        title: "What to Expect During Your Gutter Cleaning Service",
        text: "Your gutter cleaning appointment begins with a courtesy notification through ProFlow360 when our crew is en route. Upon arrival, technicians perform a visual inspection of your gutter system, noting any concerns before starting work. We hand-scoop all debris from gutters and channels, bagging it for proper disposal rather than blowing it onto your landscaping or driveway. Next, we flush every downspout with water to ensure complete drainage and identify any hidden clogs. Our team tests water flow, checks gutter pitch, and examines fasteners for stability. The entire process typically takes 1-2 hours for an average Sacramento home. Before leaving, we clean up all debris, conduct a final walkthrough, and share before-and-after photos through the ProFlow360 app so you can see exactly what we accomplished.",
      },
      {
        title: "ProFlow360 Keeps You Updated Throughout Service",
        text: "Our crews log every inspection and share photos and text updates so you can see the clean lines, proper pitch, and cleared downspouts without climbing a ladder yourself. The ProFlow360 platform provides real-time job tracking, allowing you to monitor arrival times, view live progress updates, and receive detailed completion reports. This technology-driven approach eliminates the frustration of wondering when service will be completed or whether the job was done thoroughly. You'll have permanent documentation of your gutter maintenance history, which proves valuable for insurance claims, home sales, and warranty requirements.",
      },
      {
        title: "Warranty & Satisfaction Guarantee",
        text: "We stand behind every gutter cleaning with our 100% satisfaction guarantee. If you're not completely satisfied with the cleanliness of your gutters or the professionalism of our service, we'll return to make it right at no additional charge. Our work is fully insured and bonded, protecting both your property and our technicians. We also offer a complimentary follow-up inspection if you experience any drainage issues within 30 days of service. ProFlow has cleaned thousands of gutter systems throughout Sacramento County, building a reputation for reliability that keeps customers coming back season after season.",
      },
    ],
    relatedServices: [
      {
        href: "/services/gutter-guards",
        title: "Gutter Guards Installation",
        desc: "After cleaning your gutters, protect your investment with professional gutter guard installation. Reduce future maintenance needs by up to 90% while keeping debris out and water flowing freely year-round.",
        image: "/hero-service-gutter-cleaning.jpeg"
      },
      {
        href: "/services/pressure-washing",
        title: "Pressure Washing",
        desc: "Complete your home's exterior refresh with professional pressure washing. Remove built-up grime, mold, and stains from siding, driveways, and walkways while we're already servicing your property for maximum convenience.",
        image: "/hero-service-pressure-washing.jpeg"
      },
      {
        href: "/services/roof-solar-cleaning",
        title: "Roof & Solar Panel Cleaning",
        desc: "While maintaining your gutters, ensure your roof and solar panels perform optimally. Remove moss, algae, and debris that can damage shingles and reduce solar efficiency, protecting your home's most important investment.",
        image: "/hero-service-gutter-cleaning.jpeg"
      }
    ],
    faqs: [
      {
        q: "How often should I get my gutters cleaned in Sacramento?",
        a: "Most Sacramento homeowners need gutter cleaning 2-3 times per year—once in late spring after pollen season, again in fall after leaves drop, and optionally in winter if you have significant tree coverage. Homes near oak or pine trees may need quarterly service to prevent clogs and overflow damage."
      },
      {
        q: "What does professional gutter cleaning near me include?",
        a: "ProFlow's gutter cleaning service includes hand-removal of all debris, bagging and disposal, downspout flushing to ensure proper flow, inspection for pitch issues or damage, and before/after photo documentation through our ProFlow360 system. We also check fasteners and alert you to any needed repairs."
      },
      {
        q: "How much does gutter cleaning cost in the Sacramento area?",
        a: "Gutter cleaning typically ranges from $150-$350 for most single-story homes and $250-$500 for two-story homes in Sacramento, depending on linear footage, height, and debris level. We provide transparent flat-rate pricing with no hidden fees after our initial assessment."
      },
      {
        q: "Can clogged gutters really damage my home's foundation?",
        a: "Yes. When gutters overflow, water cascades down exterior walls and pools near your foundation, causing soil erosion, basement seepage, and potential cracking. In Sacramento's clay-heavy soil, this moisture imbalance can lead to foundation shifting and costly repairs exceeding $10,000. Regular cleaning prevents these issues."
      },
      {
        q: "Do you clean gutters in Roseville, Rocklin, and Folsom?",
        a: "Absolutely. ProFlow serves all of Greater Sacramento including Roseville, Rocklin, Folsom, El Dorado Hills, Auburn, Granite Bay, and surrounding communities. Our local crews know the area's seasonal debris patterns and can typically schedule service within 3-5 business days."
      },
      {
        q: "Will gutter cleaning damage my roof or landscaping?",
        a: "No. Our technicians use proper ladder stabilizers, protective boot coverings, and careful debris bagging to protect your roof shingles, siding, and landscaping. We never walk on delicate roof sections and always dispose of debris responsibly—not thrown into your flower beds."
      },
      {
        q: "What happens if you find damage during gutter cleaning?",
        a: "We'll photograph any issues—loose hangers, leaking seams, improper pitch—and send you a detailed report through ProFlow360 with repair recommendations and transparent pricing. You're never obligated to approve repairs, but we'll explain what risks exist if left unaddressed."
      }
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
      {
        title: "System Assessment",
        desc: "We measure your gutters and recommend the best guard system based on your roof type, tree coverage, and budget.",
        icon: Ruler,
      },
      {
        title: "Gutter Preparation",
        desc: "Gutters are thoroughly cleaned and any damaged sections are repaired or replaced to ensure a solid foundation.",
        icon: Wrench,
      },
      {
        title: "Professional Installation",
        desc: "Guards are installed with even seams, proper spacing, and manufacturer-recommended fasteners for long-lasting protection.",
        icon: Shield,
      },
      {
        title: "Flow Testing & Final Inspection",
        desc: "We test water flow to ensure guards perform correctly, then complete a thorough cleanup and walkthrough with you.",
        icon: CheckCircle,
      },
    ],
    highlights: [
      { title: "Premium brands", desc: "We source guards built for California climates." },
      { title: "Warrantied work", desc: "Clear coverage on guards and installation." },
      { title: "Bundle friendly", desc: "Pair with cleaning or repairs for savings." },
    ],
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Gutter guard installation on a Roseville home by ProFlow Home Services" },
      { src: "/hero-service-gutter-cleaning.jpeg", alt: "Professional gutter guard project in Sacramento County, California" },
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
      {
        title: "Damage Assessment",
        desc: "We thoroughly inspect your gutters, identify all issues, and provide transparent recommendations on repair versus replacement.",
        icon: Clipboard,
      },
      {
        title: "Structural Reinforcement",
        desc: "Loose hangers and leaking seams are reinforced with new fasteners and sealants to restore structural integrity.",
        icon: Wrench,
      },
      {
        title: "Section Replacement",
        desc: "Damaged gutter sections are replaced with custom-cut pieces that match your existing profile and color perfectly.",
        icon: Hammer,
      },
      {
        title: "Testing & Verification",
        desc: "We test pitch and drainage, verify proper water flow, and complete a thorough cleanup with photo documentation.",
        icon: CheckCircle,
      },
    ],
    highlights: [
      { title: "Seamless finishes", desc: "Custom-cut sections with matching colors." },
      { title: "Experience", desc: "Hundreds of gutters serviced every year." },
      { title: "Transparent pricing", desc: "Flat-rate options and photo estimates." },
    ],
    gallery: [
      { src: "/gutter cleaning.jpeg", alt: "Gutter repair and replacement service on a Sacramento home" },
      { src: "/hero-city-auburn.jpeg", alt: "Gutter replacement project in Auburn, California by ProFlow Home Services" },
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
      {
        title: "Color Consultation",
        desc: "We walk through your home, discuss color palettes, and help you select finishes that match your style and flow throughout your space.",
        icon: MessageSquare,
      },
      {
        title: "Surface Protection & Prep",
        desc: "Furniture and floors are carefully masked, walls are patched and sanded, and surfaces are primed for optimal paint adhesion.",
        icon: Shield,
      },
      {
        title: "Professional Application",
        desc: "Premium low-VOC paints are applied with crisp edges and even coverage, paying special attention to trim and detailed areas.",
        icon: Paintbrush,
      },
      {
        title: "Final Walkthrough",
        desc: "We conduct a thorough inspection with you, complete any touch-ups, and ensure every room meets our quality standards.",
        icon: CheckCircle,
      },
    ],
    highlights: [
      { title: "Professional crews", desc: "Clean, respectful techs who treat your home like theirs." },
      { title: "Color help", desc: "Guidance on palettes that flow with your lifestyle." },
      { title: "Quick turnaround", desc: "Efficient scheduling via ProFlow360." },
    ],
    gallery: [
      { src: "/hero-service-interior-painting.jpeg", alt: "Interior painting project in Rocklin, California by ProFlow Home Services" },
      { src: "/dreamina-2025-11-12-8102-A luxurious, freshly remodeled bathroom ....jpeg", alt: "Professional interior painting on a Sacramento area luxury home" },
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
      {
        title: "Pressure Washing & Drying",
        desc: "We power wash your exterior to remove dirt, mildew, and loose paint, then allow surfaces to dry completely before painting.",
        icon: SprayCan,
      },
      {
        title: "Surface Preparation",
        desc: "All surfaces are scraped, sanded, and primed. Bare wood is sealed and gaps are caulked to create a smooth, protected base.",
        icon: HardHat,
      },
      {
        title: "Professional Painting",
        desc: "Contractor-grade paints designed for California weather are applied with precision around trims, shutters, and architectural details.",
        icon: Paintbrush,
      },
      {
        title: "Final Inspection & Cleanup",
        desc: "We conduct a complete walkthrough, verify coverage and quality, and clean up all materials with photo documentation via ProFlow360.",
        icon: CheckCircle,
      },
    ],
    highlights: [
      { title: "Weather-ready", desc: "Paint systems designed for heat and humidity." },
      { title: "Detail-focused", desc: "Clean lines around trims and shutters." },
      { title: "Project management", desc: "Weekly updates in ProFlow360." },
    ],
    gallery: [
      { src: "/hero-service-exterior-painting.jpeg", alt: "Exterior painting service on a Folsom home by ProFlow Home Services" },
      { src: "/home-cta-background.jpeg", alt: "Professional exterior painting project in Roseville, California" },
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
      {
        title: "Service Assessment",
        desc: "We review your repair list, prioritize safety concerns, and identify the best approach for each task on your punch list.",
        icon: ClipboardCheck,
      },
      {
        title: "Transparent Pricing",
        desc: "You receive clear, flat-rate pricing for all repairs with no hidden fees or surprises, shared through ProFlow360 for approval.",
        icon: FileText,
      },
      {
        title: "Expert Execution",
        desc: "Our skilled multi-trade technicians complete repairs efficiently using proper techniques and quality materials that last.",
        icon: Hammer,
      },
      {
        title: "Quality Review",
        desc: "We walk through completed work with you, verify everything functions properly, and clean up all debris before leaving.",
        icon: CheckCircle,
      },
    ],
    highlights: [
      { title: "Multi-trade crew", desc: "Electrician, carpentry, and general repairs under one roof." },
      { title: "Coordination", desc: "Bundle with gutter or painting projects." },
      { title: "Reliable", desc: "Same-day responses for urgent fixes." },
    ],
    gallery: [
      { src: "/hero-service-handyman.jpeg", alt: "Handyman services on a Rocklin home by ProFlow Home Services" },
      { src: "/hero-city-roseville.jpeg", alt: "Professional handyman repair project in Roseville, California" },
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
      {
        title: "Surface Analysis",
        desc: "We assess your property and select the appropriate pressure settings and eco-friendly cleaning solutions for each surface type.",
        icon: Eye,
      },
      {
        title: "Soft Wash Application",
        desc: "Delicate surfaces like roofs, siding, and painted areas are gently cleaned with low-pressure techniques to prevent damage.",
        icon: Sparkles,
      },
      {
        title: "High-Pressure Cleaning",
        desc: "Driveways, decks, and concrete surfaces receive thorough high-pressure cleaning to remove embedded dirt, mold, and stains.",
        icon: SprayCan,
      },
      {
        title: "Final Rinse & Documentation",
        desc: "All surfaces are thoroughly rinsed, inspected for quality, and documented with before/after photos shared via ProFlow360.",
        icon: Camera,
      },
    ],
    highlights: [
      { title: "Protective techniques", desc: "Soft wash on roofs, high pressure on concrete." },
      { title: "Eco solutions", desc: "Biodegradable soaps and responsible runoff." },
      { title: "Before/after proof", desc: "Photos shared through ProFlow360." },
    ],
    gallery: [
      { src: "/hero-service-pressure-washing.jpeg", alt: "Pressure washing service on a Sacramento area home by ProFlow Home Services" },
      { src: "/home-cta-background.jpeg", alt: "Professional pressure washing project in Folsom, California" },
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
      {
        title: "Material & Warranty Review",
        desc: "We inspect your roof type and solar panel specifications to ensure we follow manufacturer cleaning protocols that protect warranties.",
        icon: FileSearch,
      },
      {
        title: "Gentle Cleaning Application",
        desc: "Low-pressure soft wash solutions are carefully applied to remove moss, algae, and buildup without damaging shingles or panels.",
        icon: Sparkles,
      },
      {
        title: "Debris Removal",
        desc: "All debris is cleared from gutters, valleys, and around solar arrays to prevent water backup and maximize panel efficiency.",
        icon: Trash2,
      },
      {
        title: "Documentation & Maintenance Report",
        desc: "We capture before/after photos, note any early damage spotted, and provide maintenance recommendations through ProFlow360.",
        icon: Camera,
      },
    ],
    highlights: [
      { title: "Solar safe", desc: "We follow manufacturer cleaning protocols." },
      { title: "Insurance-ready", desc: "Documentation for warranties." },
      { title: "Roof health", desc: "Spot early damage before it becomes a leak." },
    ],
    gallery: [
      { src: "/hero-service-roof-solar-cleaning.jpeg", alt: "Roof and solar panel cleaning on a Roseville home by ProFlow Home Services" },
      { src: "/hero-city-folsom.jpeg", alt: "Professional solar cleaning project in Folsom, California" },
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
      {
        title: "Plan Selection",
        desc: "Choose from seasonal, quarterly, or custom maintenance schedules designed to match your home's needs and your budget.",
        icon: Clipboard,
      },
      {
        title: "Automated Scheduling",
        desc: "ProFlow360 handles all scheduling and sends automatic reminders, so you never have to remember when service is due.",
        icon: Bell,
      },
      {
        title: "Consistent Service Delivery",
        desc: "The same trusted technicians complete all scheduled services on time, providing continuity and familiarity with your property.",
        icon: Users,
      },
      {
        title: "Progress Reports & Recommendations",
        desc: "After each visit, you receive detailed reports with photos and maintenance recommendations to keep your home in peak condition.",
        icon: CalendarCheck,
      },
    ],
    highlights: [
      { title: "Flexible visits", desc: "Seasonal, quarterly, or custom schedules." },
      { title: "Discounted bundles", desc: "Combine gutters, washing, and handyman work." },
      { title: "ProFlow360 tracking", desc: "See every visit in one dashboard." },
    ],
    gallery: [
      { src: "/hero-service-gutter-cleaning.jpeg", alt: "Home maintenance plan service on a Rocklin home by ProFlow Home Services" },
      { src: "/home-cta-background.jpeg", alt: "Professional maintenance plan project in Sacramento County, California" },
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
