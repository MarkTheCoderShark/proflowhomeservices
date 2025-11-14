export type CityProject = {
  title: string;
  subtitle?: string;
  image: string;
};

export type CityTestimonial = {
  name: string;
  neighborhood?: string;
  service: string;
  quote: string;
};

export type CityFAQ = {
  q: string;
  a: string;
};

export type CityConfig = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  neighborhoods: string[];
  intro: string;
  serviceList: { title: string; href: string }[];
  internalLinks: { text: string; href: string }[];
  projects?: CityProject[];
  testimonials?: CityTestimonial[];
  issues?: string[];
  localFaqs?: CityFAQ[];
};

export const cityContent: Record<string, CityConfig> = {
  "citrus-heights": {
    name: "Citrus Heights",
    metaTitle: "Home Services in Citrus Heights, CA",
    metaDescription: "Gutters, painting, handyman & remodeling for Citrus Heights homeowners.",
    heroTitle: "Citrus Heights Home Services, Repairs & Remodeling",
    heroSubtitle:
      "Licensed professionals for gutters, painting, handyman repairs & home remodeling across Citrus Heights neighborhoods.",
    neighborhoods: [
      "Sunrise Ranch",
      "Arcade Creek",
      "Rusch Park",
      "Sunset Golf",
      "Stock Ranch",
      "Sylvan Old Auburn",
      "Antelope Crossing",
      "Sunrise Oaks",
      "Birdcage Village",
      "Greenback Town Center",
    ],
    intro:
      "Citrus Heights homes—especially in established neighborhoods like Sunrise Ranch, Rusch Park, and Arcade Creek—tend to be classic single-story ranch houses and 1970s–1990s builds. Many of these properties have great bones but need modern updates: fresh interior paint, new flooring, updated bathrooms, and small handyman repairs that finally cross long-standing items off the list.\n\nMature oak and pine trees are part of what make Citrus Heights neighborhoods feel established, but they also create ongoing home maintenance needs. Heavy leaf fall and needles clog gutters around Rusch Park, Stock Ranch, and Sylvan Old Auburn, leading to overflowing downspouts, stained siding, and potential foundation issues if they’re ignored. Regular gutter cleaning and, in some cases, gutter guards are essential to keep water moving away from the home.\n\nSun exposure is another factor we see across areas like Antelope Crossing, Birdcage Village, and Greenback Town Center. South- and west-facing exteriors fade faster, leaving tired paint and peeling trim that hurts curb appeal. Inside the home, many Citrus Heights properties still have original finishes—older tile, fluorescent box lights, and worn carpet—that no longer match how families live today. ProFlow helps homeowners tackle everything from quick gutter service to full interior refreshes, using our ProFlow360 system so you always know who’s coming, what’s happening next, and how your project is tracking.",
    serviceList: [
      { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { title: "Interior Painting", href: "/services/interior-painting" },
      { title: "Handyman Services", href: "/services/handyman" },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Contact", href: "/contact" },
    ],
    projects: [
      {
        title: "Kitchen repaint – Citrus Heights, CA",
        subtitle:
          "Brightened a 1980s kitchen in the Sunrise Ranch area with updated wall colors, clean white trim, and careful cabinet refinishing.",
        image: "/hero-service-interior-painting.jpeg",
      },
      {
        title: "Gutter cleaning – Rusch Park neighborhood",
        subtitle:
          "Cleared heavy oak and pine debris, flushed downspouts, and documented before-and-after photos ahead of the rainy season.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
      {
        title: "Bathroom remodel – Sunrise Ranch area",
        subtitle:
          "Converted a dated tub/shower combo into a modern walk-in shower with new tile, fixtures, and moisture-resistant drywall.",
        image: "/bathroom.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Mark W.",
        neighborhood: "Rusch Park",
        service: "Gutter Cleaning",
        quote:
          "ProFlow cleaned our gutters in Citrus Heights and did an amazing job. Fast, friendly, and thorough — they even showed photos of everything before and after.",
      },
      {
        name: "Lisa P.",
        neighborhood: "Sunrise Ranch",
        service: "Interior Painting",
        quote:
          "Our 1970s home feels brand new. The crew was on time every day, protected our floors, and the finished paint lines are perfect.",
      },
      {
        name: "Daniel H.",
        neighborhood: "Arcade Creek",
        service: "Handyman & Small Repairs",
        quote:
          "We used ProFlow for a list of small repairs before listing our home. Scheduling was easy and every item was handled in a single visit.",
      },
    ],
    issues: [
      "Clogged gutters from mature oak and pine trees near neighborhoods like Rusch Park, Arcade Creek, and Stock Ranch.",
      "Outdated 1970s–1990s interiors needing modern paint colors, trim upgrades, and new lighting.",
      "Sun-faded exterior paint on single-story ranch homes and duplexes throughout Citrus Heights.",
      "Worn or mismatched flooring in older ranch homes and starter houses that have seen decades of use.",
      "Weathered fascia boards and soffits around rooflines after years of gutter overflow and moisture.",
    ],
    localFaqs: [
      {
        q: "Do you service all Citrus Heights neighborhoods?",
        a: "Yes. We regularly serve Sunrise Ranch, Rusch Park, Arcade Creek, Stock Ranch, Sylvan Old Auburn, Antelope Crossing, Sunrise Oaks, Birdcage Village, Greenback Town Center, and surrounding streets. If your home is in or near Citrus Heights, we can help.",
      },
      {
        q: "What affects gutter cleaning prices in Citrus Heights?",
        a: "Pricing depends on the size of your home, whether it is one or two stories, the amount of tree coverage, and how long it has been since your last cleaning. Most Citrus Heights homes fall into a predictable range, and we provide a clear quote before any work begins.",
      },
      {
        q: "How quickly can you complete a handyman job in Citrus Heights?",
        a: "For most small handyman lists, we can schedule a visit within a few days and complete the work in a single trip. Larger repair or remodeling projects are planned through our ProFlow360 system with clear timelines and milestones.",
      },
      {
        q: "Do you charge travel or trip fees for Citrus Heights?",
        a: "No separate travel fees apply for projects in Citrus Heights. As a local provider, your estimate includes all standard labor, materials, and on-site time needed to complete the scope of work.",
      },
    ],
  },
  "roseville": {
    name: "Roseville",
    metaTitle: "Home Services in Roseville, CA",
    metaDescription: "Local team for gutters, painting, handyman & remodeling in Roseville.",
    heroTitle: "Roseville Home Services, Repairs & Remodeling",
    heroSubtitle: "Serving neighborhoods near Blue Oaks and throughout the city.",
    neighborhoods: ["Blue Oaks", "Fiddyment Farm", "Highland Reserve", "Ridgeview"],
    intro:
      "From Blue Oaks to the outskirts, Roseville homeowners need a single partner for gutter, paint, and remodel work backed by modern scheduling.",
    serviceList: [
      { title: "Gutter Guards", href: "/services/gutter-guards" },
      { title: "Exterior Painting", href: "/services/exterior-painting" },
      { title: "Pressure Washing", href: "/services/pressure-washing" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Service Areas", href: "/service-areas" },
    ],
  },
  "rocklin": {
    name: "Rocklin",
    metaTitle: "Home Services in Rocklin, CA",
    metaDescription: "Trusted gutters, painting, handyman & remodeling for Rocklin homes.",
    heroTitle: "Rocklin Home Services, Repairs & Remodeling",
    heroSubtitle: "Near Rocklin Crossing and across the community.",
    neighborhoods: ["Stanford Ranch", "Whitney Oaks", "Sunset West", "Rocklin Ranch Golf Club"],
    intro:
      "Rocklin residents want reliable craftsmanship, transparent pricing, and crews that understand local standards and neighborhoods.",
    serviceList: [
      { title: "Gutter Repair & Replacement", href: "/services/gutter-repair-replacement" },
      { title: "Handyman Services", href: "/services/handyman" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Contact", href: "/contact" },
      { text: "Blog", href: "/blog" },
    ],
  },
  "loomis": {
    name: "Loomis",
    metaTitle: "Home Services in Loomis, CA",
    metaDescription: "Professional home services and remodeling for Loomis.",
    heroTitle: "Loomis Home Services, Repairs & Remodeling",
    heroSubtitle: "Trusted local team serving Loomis homeowners.",
    neighborhoods: ["Loomis Basin", "Horseshoe Bar", "Taylor Road", "Granite Bay Estates"],
    intro:
      "Loomis residents deserve professional crews that balance rural charm with modern tooling, especially for gutter and remodel services.",
    serviceList: [
      { title: "Exterior Painting", href: "/services/exterior-painting" },
      { title: "Pressure Washing", href: "/services/pressure-washing" },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Projects", href: "/projects" },
    ],
  },
  "auburn": {
    name: "Auburn",
    metaTitle: "Home Services in Auburn, CA",
    metaDescription: "Local pros for Auburn home services and remodels.",
    heroTitle: "Auburn Home Services, Repairs & Remodeling",
    heroSubtitle: "Serving Auburn and surrounding foothill communities.",
    neighborhoods: ["Downtown Auburn", "North Auburn", "Hidden Falls", "Loch Lomond"],
    intro:
      "Foothill properties require seasoned crews; Auburn homeowners depend on an organized, insured team for gutters, painting, and remodels.",
    serviceList: [
      { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { title: "Handyman Services", href: "/services/handyman" },
    ],
    internalLinks: [
      { text: "Service Areas", href: "/service-areas" },
      { text: "Contact", href: "/contact" },
    ],
  },
  "folsom": {
    name: "Folsom",
    metaTitle: "Home Services in Folsom, CA",
    metaDescription: "Gutters, painting, handyman & remodeling for Folsom homes.",
    heroTitle: "Folsom Home Services, Repairs & Remodeling",
    heroSubtitle: "Professional service for Folsom neighborhoods.",
    neighborhoods: ["Empire Ranch", "Broadstone", "Historic Folsom", "Northridge"],
    intro:
      "Folsom homes benefit from tech-enabled scheduling, spotless job sites, and knowledgeable crews that respect community standards.",
    serviceList: [
      { title: "Pressure Washing", href: "/services/pressure-washing" },
      { title: "Interior Painting", href: "/services/interior-painting" },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Reviews", href: "/reviews" },
    ],
  },
  "granite-bay": {
    name: "Granite Bay",
    metaTitle: "Home Services in Granite Bay, CA",
    metaDescription: "Premium home services and remodeling for Granite Bay.",
    heroTitle: "Granite Bay Home Services, Repairs & Remodeling",
    heroSubtitle: "Quality-driven service for Granite Bay homeowners.",
    neighborhoods: ["Treelake", "Wexford", "Douglas Ranch", "Granite Bay Club"],
    intro:
      "Granite Bay buyers expect premium service, and ProFlow delivers with licensed crews, clean aesthetics, and tech-powered updates.",
    serviceList: [
      { title: "Interior Painting", href: "/services/interior-painting" },
      { title: "Maintenance Plans", href: "/services/maintenance-plans" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Contact", href: "/contact" },
    ],
  },
  lincoln: {
    name: "Lincoln",
    metaTitle: "Home Services in Lincoln, CA",
    metaDescription: "Local pros for Lincoln home services and remodeling.",
    heroTitle: "Lincoln Home Services, Repairs & Remodeling",
    heroSubtitle: "Serving Lincoln neighborhoods with professional results.",
    neighborhoods: ["12 Bridges", "Lincoln Crossing", "Catta Verdera", "Riverside"],
    intro:
      "Lincoln homeowners value organized communication, fair quotes, and crews who deliver high-quality workmanship across every service area.",
    serviceList: [
      { title: "Gutter Guards", href: "/services/gutter-guards" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Contact", href: "/contact" },
    ],
  },
  sacramento: {
    name: "Sacramento",
    metaTitle: "Home Services in Sacramento, CA",
    metaDescription: "Gutters, painting, handyman & remodeling for Sacramento homes.",
    heroTitle: "Sacramento Home Services, Repairs & Remodeling",
    heroSubtitle: "Your complete home improvement partner across Sacramento.",
    neighborhoods: ["East Sacramento", "Land Park", "Natomas", "Greenhaven"],
    intro:
      "As the parent brand, Sacramento teams bring all service divisions together—gutter, paint, remodeling, and handyman—under one trusted process.",
    serviceList: [
      { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { title: "Handyman Services", href: "/services/handyman" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Reviews", href: "/reviews" },
    ],
  },
};
