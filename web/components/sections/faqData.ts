type QA = { q: string; a: string };

type FAQCategory = {
  label: string;
  questions: QA[];
};

export const faqCategories: FAQCategory[] = [
  {
    label: "General",
    questions: [
      {
        q: "What areas do you serve in the Sacramento region?",
        a: "We proudly serve Sacramento, Roseville, Rocklin, Folsom, Granite Bay, Auburn, Lincoln, Loomis, and Citrus Heights. Our team covers the greater Sacramento area with fast response times and local expertise."
      },
      {
        q: "Are you licensed and insured for home services and remodeling?",
        a: "Yes, ProFlow Home Services is fully licensed, bonded, and insured. We maintain all required California contractor licenses and comprehensive insurance coverage to protect your property and our team."
      },
      {
        q: "How quickly can you provide an estimate and start work?",
        a: "We typically respond within hours and can often schedule estimates within 24-48 hours. For many services like gutter cleaning, painting, and handyman work, we can start within days. Larger remodeling projects are scheduled based on your timeline and our current workload."
      },
      {
        q: "Do you offer free estimates for all services?",
        a: "Yes, we provide free, no-obligation estimates for all our services including gutter cleaning, painting, pressure washing, handyman work, and remodeling projects. We'll assess your needs, discuss options, and provide transparent pricing."
      },
    ]
  },
  {
    label: "Remodeling",
    questions: [
      {
        q: "What types of remodeling projects do you handle?",
        a: "We specialize in kitchen remodeling, bathroom remodeling, flooring installation (LVP, hardwood, tile), drywall and framing, and ADU (accessory dwelling unit) construction. All projects include detailed proposals, clean job sites, and tech-enabled communication through ProFlow360."
      },
      {
        q: "How do you communicate and manage projects?",
        a: "We use ProFlow360, our tech-enabled platform, for scheduling, real-time updates, photo sharing, and transparent communication throughout your project. You'll always know what's happening, when we're coming, and how the work is progressing."
      },
      {
        q: "Do you provide warranties on your work?",
        a: "Yes, we stand behind our work with warranties that vary by service type. Remodeling projects include comprehensive workmanship warranties, and we only use quality materials from trusted suppliers. We'll discuss specific warranty terms during your estimate."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, checks, credit cards, and digital payments for your convenience. For larger remodeling projects, we typically work with a deposit and progress payments tied to project milestones, all clearly outlined in your contract."
      },
    ]
  },
  {
    label: "Gutters & Exterior",
    questions: [
      {
        q: "How often should I have my gutters cleaned in Sacramento?",
        a: "In the Sacramento area, we recommend gutter cleaning at least twice per year—once in late fall after leaves drop and again in spring. Homes near trees or with pine needles may need quarterly cleaning to prevent clogs and water damage."
      },
      {
        q: "Do you install gutter guards, and are they worth it?",
        a: "Yes, we install high-quality gutter guards that significantly reduce the frequency of gutter cleaning. They're especially valuable for homes with trees nearby, two-story homes, or homeowners who want low-maintenance solutions. We'll help you choose the right system for your property."
      },
      {
        q: "What's included in your interior and exterior painting services?",
        a: "Our painting services include surface preparation, primer application, quality paint (we can discuss brands and finishes), precise cutting-in, multiple coats as needed, and thorough cleanup. We protect your floors and furniture, and ensure a professional finish that lasts."
      },
    ]
  },
  {
    label: "Handyman & Repairs",
    questions: [
      {
        q: "Can you help with both small handyman repairs and larger renovations?",
        a: "Absolutely! We handle everything from minor repairs (drywall patches, door adjustments, fixture installations) to full-scale kitchen and bathroom remodels. Our team has the versatility to be your one-stop solution for all home improvement needs."
      },
    ]
  }
];

// Export flat list for SEO/JSON-LD
export const faqs: QA[] = faqCategories.flatMap(cat => cat.questions);
