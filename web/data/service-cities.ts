// Service + City specific data for local landing pages
import { ServiceSlug } from "./services";

export type CitySlug =
  | "roseville"
  | "rocklin"
  | "lincoln"
  | "loomis"
  | "granite-bay"
  | "citrus-heights";

export const cityData: Record<CitySlug, {
  name: string;
  county: string;
  population: string;
  neighborhoods: string[];
  localFeatures: string[];
}> = {
  roseville: {
    name: "Roseville",
    county: "Placer County",
    population: "150,000+",
    neighborhoods: ["Blue Oaks", "Fiddyment Farm", "Highland Reserve", "Ridgeview", "West Roseville", "Sun City"],
    localFeatures: ["Galleria Mall", "Maidu Regional Park", "Roseville Sports Complex"],
  },
  rocklin: {
    name: "Rocklin",
    county: "Placer County",
    population: "70,000+",
    neighborhoods: ["Stanford Ranch", "Whitney Oaks", "Sunset West", "Rocklin Ranch", "Clover Valley"],
    localFeatures: ["Quarry Park Adventures", "Johnson-Springview Park", "Sierra College"],
  },
  lincoln: {
    name: "Lincoln",
    county: "Placer County",
    population: "50,000+",
    neighborhoods: ["12 Bridges", "Lincoln Crossing", "Catta Verdera", "Sun City Lincoln Hills", "Village 7"],
    localFeatures: ["Thunder Valley Casino", "McBean Park", "Lincoln Hills Golf Club"],
  },
  loomis: {
    name: "Loomis",
    county: "Placer County",
    population: "7,000+",
    neighborhoods: ["Loomis Basin", "Horseshoe Bar", "Taylor Road", "Del Oro"],
    localFeatures: ["Blue Goose Fruit Stand", "Loomis Basin Regional Park", "Historic Downtown"],
  },
  "granite-bay": {
    name: "Granite Bay",
    county: "Placer County",
    population: "22,000+",
    neighborhoods: ["Treelake", "Wexford", "Douglas Ranch", "Granite Bay Club", "Los Lagos"],
    localFeatures: ["Folsom Lake", "Granite Bay Golf Club", "Quarry Trail"],
  },
  "citrus-heights": {
    name: "Citrus Heights",
    county: "Sacramento County",
    population: "87,000+",
    neighborhoods: ["Sunrise Ranch", "Arcade Creek", "Rusch Park", "Stock Ranch", "Birdcage Village"],
    localFeatures: ["Sunrise Mall", "Rusch Community Park", "Sylvan Cemetery"],
  },
};

export const serviceDisplayNames: Record<ServiceSlug, string> = {
  "gutter-cleaning": "Gutter Cleaning",
  "gutter-guards": "Gutter Guard Installation",
  "gutter-repair-replacement": "Gutter Repair & Replacement",
  "interior-painting": "Interior Painting",
  "exterior-painting": "Exterior Painting",
  "pressure-washing": "Pressure Washing",
  "handyman": "Handyman Services",
  "roof-solar-cleaning": "Roof & Solar Panel Cleaning",
  "maintenance-plans": "Home Maintenance Plans",
};

export const serviceCityContent: Record<ServiceSlug, {
  intro: (city: string, neighborhoods: string[]) => string;
  benefits: (city: string) => string[];
  localChallenges: (city: string) => string[];
  whyChoose: (city: string) => string;
  serviceDescription: string;
}> = {
  "gutter-cleaning": {
    intro: (city, neighborhoods) =>
      `Professional gutter cleaning services for ${city} homeowners. Our local crews serve neighborhoods including ${neighborhoods.slice(0, 4).join(", ")}, and surrounding areas. We remove debris, flush downspouts, and document everything with before/after photos through ProFlow360.`,
    benefits: (city) => [
      `Same-week scheduling for ${city} residents`,
      "Before/after photo documentation",
      "Downspout flushing included",
      "Fully insured local crews",
      "Transparent flat-rate pricing",
    ],
    localChallenges: (city) => [
      `${city}'s mature oak and pine trees drop heavy debris`,
      "Hot summers bake organic matter into gutters",
      "Winter storms cause overflow damage without clean gutters",
      "Bird nests and pests common in neglected systems",
    ],
    whyChoose: (city) =>
      `${city} homeowners choose ProFlow because we're local, insured, and use ProFlow360 technology to keep you informed with real-time updates and photos. Our crews know ${city}'s tree species and seasonal patterns.`,
    serviceDescription: "Complete gutter cleaning with debris removal, downspout flushing, and photo documentation.",
  },
  "gutter-guards": {
    intro: (city, neighborhoods) =>
      `Professional gutter guard installation in ${city}. We serve ${neighborhoods.slice(0, 4).join(", ")}, and nearby communities with premium guard systems that reduce maintenance and protect your home year-round.`,
    benefits: (city) => [
      "Reduce cleaning frequency by up to 90%",
      `Guards rated for ${city}'s climate`,
      "Professional installation with warranty",
      "Multiple guard styles available",
      "Free assessment and quote",
    ],
    localChallenges: (city) => [
      `Heavy leaf fall overwhelms unprotected gutters in ${city}`,
      "Pine needles slip through low-quality guards",
      "Two-story homes are expensive to clean repeatedly",
      "Overflow causes foundation and landscaping damage",
    ],
    whyChoose: (city) =>
      `We've installed gutter guards on hundreds of ${city} homes. Our team recommends the right guard type based on your roof pitch, tree coverage, and budget—not a one-size-fits-all approach.`,
    serviceDescription: "Premium gutter guard systems professionally installed to reduce maintenance and protect your home.",
  },
  "gutter-repair-replacement": {
    intro: (city, neighborhoods) =>
      `Expert gutter repair and replacement services in ${city}. From ${neighborhoods.slice(0, 3).join(", ")} to surrounding areas, we fix leaks, correct pitch issues, and replace failing sections with quality materials.`,
    benefits: (city) => [
      "Same-day repair estimates",
      "Custom color matching available",
      "Seamless gutter options",
      "Warranty on parts and labor",
      `Local ${city} service crews`,
    ],
    localChallenges: (city) => [
      "Sagging gutters from debris weight",
      "Leaking seams and corners",
      "Improper pitch causing standing water",
      `${city}'s temperature swings stress gutter joints`,
    ],
    whyChoose: (city) =>
      `Our ${city} crews diagnose the real problem—not just symptoms—and provide honest recommendations on repair vs. replacement. We photograph issues and explain options clearly.`,
    serviceDescription: "Professional gutter repair, section replacement, and complete system upgrades.",
  },
  "interior-painting": {
    intro: (city, neighborhoods) =>
      `Transform your ${city} home with professional interior painting. Serving ${neighborhoods.slice(0, 4).join(", ")}, and nearby neighborhoods with premium paints, careful prep, and clean, respectful crews.`,
    benefits: (city) => [
      "Low-VOC, family-safe paints",
      "Furniture and floor protection",
      "Crisp lines and smooth finishes",
      "Color consultation available",
      `Trusted by ${city} homeowners`,
    ],
    localChallenges: (city) => [
      "Outdated builder-grade paint colors",
      "Scuffed walls and worn trim",
      "Cracks from settling in older homes",
      "Rooms that feel dark or closed-in",
    ],
    whyChoose: (city) =>
      `${city} families trust ProFlow because we protect your home, prep surfaces properly, and deliver showroom-quality results. Our crews are clean, punctual, and respectful of your space.`,
    serviceDescription: "Professional interior painting with premium paints, careful preparation, and meticulous attention to detail.",
  },
  "exterior-painting": {
    intro: (city, neighborhoods) =>
      `Protect and beautify your ${city} home with professional exterior painting. From ${neighborhoods.slice(0, 3).join(" to ")}, we use contractor-grade coatings designed for California's climate.`,
    benefits: (city) => [
      "UV-resistant, weather-rated paints",
      "Complete surface preparation",
      "Trim and detail work included",
      "Pressure washing before painting",
      `HOA color coordination for ${city}`,
    ],
    localChallenges: (city) => [
      `${city}'s intense sun fades paint quickly`,
      "Stucco cracking from temperature swings",
      "Peeling trim from moisture exposure",
      "Dated color schemes hurting curb appeal",
    ],
    whyChoose: (city) =>
      `We've painted hundreds of ${city} exteriors. Our crews understand local HOA requirements, prep surfaces thoroughly, and use paint systems rated for California heat and occasional storms.`,
    serviceDescription: "Professional exterior painting with durable coatings, complete prep work, and attention to architectural details.",
  },
  "pressure-washing": {
    intro: (city, neighborhoods) =>
      `Restore your ${city} property's curb appeal with professional pressure washing. Serving ${neighborhoods.slice(0, 4).join(", ")}, and surrounding areas with safe, effective cleaning for all surfaces.`,
    benefits: (city) => [
      "Driveways, patios, and walkways",
      "Soft wash for delicate surfaces",
      "Eco-friendly cleaning solutions",
      "Before/after photo documentation",
      `Same-week scheduling in ${city}`,
    ],
    localChallenges: (city) => [
      "Mold and mildew from shade and moisture",
      "Oil stains on driveways and garage floors",
      "Algae buildup on north-facing surfaces",
      "Dirt accumulation from dry summers",
    ],
    whyChoose: (city) =>
      `${city} homeowners choose ProFlow for pressure washing because we calibrate pressure and detergents for each surface type, protecting your property while delivering dramatic results.`,
    serviceDescription: "Professional pressure washing for concrete, siding, decks, and more using calibrated equipment and eco-friendly solutions.",
  },
  "handyman": {
    intro: (city, neighborhoods) =>
      `Trusted handyman services in ${city}. From ${neighborhoods.slice(0, 3).join(", ")} to surrounding neighborhoods, we handle repairs, installations, and punch lists efficiently and professionally.`,
    benefits: (city) => [
      "One call for multiple repairs",
      "Licensed, insured technicians",
      "Flat-rate pricing, no surprises",
      "Same-week appointments available",
      `Local ${city} service crews`,
    ],
    localChallenges: (city) => [
      "Growing to-do lists of small repairs",
      "Difficulty finding reliable help",
      "Multiple contractors for simple jobs",
      "Aging fixtures and hardware",
    ],
    whyChoose: (city) =>
      `${city} homeowners trust ProFlow's handyman crews for our reliability, transparent pricing, and multi-trade expertise. We tackle your entire list in one organized visit.`,
    serviceDescription: "Professional handyman services for home repairs, installations, and maintenance tasks of all sizes.",
  },
  "roof-solar-cleaning": {
    intro: (city, neighborhoods) =>
      `Professional roof and solar panel cleaning in ${city}. Serving ${neighborhoods.slice(0, 4).join(", ")}, with safe cleaning methods that protect your investment and boost performance.`,
    benefits: (city) => [
      "Solar panel efficiency restoration",
      "Warranty-safe cleaning methods",
      "Moss and algae removal",
      "Roof debris clearing",
      `Trained crews in ${city}`,
    ],
    localChallenges: (city) => [
      "Dust and pollen reduce solar output",
      "Moss growth on north-facing roofs",
      "Bird droppings damage panels and shingles",
      "Debris accumulation in roof valleys",
    ],
    whyChoose: (city) =>
      `${city} homeowners with solar investments trust ProFlow because we follow manufacturer protocols, document everything, and restore panel efficiency without risking warranty coverage.`,
    serviceDescription: "Safe, professional cleaning for roofs and solar panels using low-pressure techniques that protect your investment.",
  },
  "maintenance-plans": {
    intro: (city, neighborhoods) =>
      `Comprehensive home maintenance plans for ${city} homeowners. Covering ${neighborhoods.slice(0, 4).join(", ")}, and nearby areas with scheduled service that keeps your home in peak condition year-round.`,
    benefits: (city) => [
      "Scheduled seasonal maintenance",
      "Priority booking for members",
      "Bundled service discounts",
      "ProFlow360 tracking dashboard",
      `Dedicated ${city} service crews`,
    ],
    localChallenges: (city) => [
      "Forgetting seasonal maintenance tasks",
      "Coordinating multiple service providers",
      "Deferred maintenance becoming expensive repairs",
      "Busy schedules leaving home care neglected",
    ],
    whyChoose: (city) =>
      `${city} homeowners choose ProFlow maintenance plans because we handle scheduling, reminders, and coordination—keeping your home protected without you having to remember every task.`,
    serviceDescription: "Customized maintenance plans with scheduled gutter cleaning, pressure washing, inspections, and more.",
  },
};

// All valid service+city combinations
export const allServiceCityCombinations: { service: ServiceSlug; city: CitySlug }[] = [];
const services: ServiceSlug[] = [
  "gutter-cleaning",
  "gutter-guards",
  "gutter-repair-replacement",
  "interior-painting",
  "exterior-painting",
  "pressure-washing",
  "handyman",
  "roof-solar-cleaning",
  "maintenance-plans",
];
const cities: CitySlug[] = ["roseville", "rocklin", "lincoln", "loomis", "granite-bay", "citrus-heights"];

services.forEach(service => {
  cities.forEach(city => {
    allServiceCityCombinations.push({ service, city });
  });
});

export { services, cities };
