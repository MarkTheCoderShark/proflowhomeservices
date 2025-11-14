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
      "Roseville neighborhoods like Blue Oaks, Fiddyment Farm, Highland Reserve, and Ridgeview combine newer master-planned communities with established streets of 1980s and 1990s homes. Many properties have solid layouts and good natural light, but still carry original finishes—oak cabinets, builder-grade tile, worn carpet, and small, closed-off kitchens that no longer fit how families live today.\n\nHot summers and cool, wet winters also put stress on Roseville exteriors. We see peeling paint on sun-facing stucco, failing caulk lines around windows, and gutters that overflow during storms because of roof debris and nearby trees. Inside, shifting lifestyles mean more families are carving out home offices, updating bathrooms for better storage, and replacing flooring with durable, pet-friendly options.\n\nRoseville homeowners want one accountable partner who can handle gutters, paint, handyman repairs, and full remodeling projects without the usual contractor runaround. ProFlow’s licensed teams, ProFlow360 communication system, and clean job sites make it simple to plan your project, approve a clear scope, and see steady progress from the first walkthrough to final inspection.",
    serviceList: [
      { title: "Gutter Guards", href: "/services/gutter-guards" },
      { title: "Exterior Painting", href: "/services/exterior-painting" },
      { title: "Pressure Washing", href: "/services/pressure-washing" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Service Areas", href: "/service-areas" },
    ],
    projects: [
      {
        title: "Open-concept kitchen remodel – Roseville, CA",
        subtitle:
          "Removed a dividing wall in a Highland Reserve home, added new cabinetry, quartz countertops, LED lighting, and durable LVP flooring.",
        image: "/remodel-kitchen.jpeg",
      },
      {
        title: "Primary bathroom refresh – Fiddyment Farm neighborhood",
        subtitle:
          "Updated a dated builder bathroom with a new tile shower, modern vanity, and better lighting without changing the existing footprint.",
        image: "/bathroom.jpeg",
      },
      {
        title: "Whole-home flooring upgrade – Blue Oaks area",
        subtitle:
          "Replaced aging carpet and tile with waterproof luxury vinyl plank throughout the main level, including stairs and hallway transitions.",
        image: "/remodel-flooring.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Jessica R.",
        neighborhood: "Highland Reserve",
        service: "Kitchen Remodeling",
        quote:
          "ProFlow transformed our outdated kitchen into our dream space. The team stayed on schedule, kept the house clean, and communicated clearly through every phase.",
      },
      {
        name: "Brian K.",
        neighborhood: "Fiddyment Farm",
        service: "Bathroom Remodeling",
        quote:
          "We were nervous about remodeling with kids at home, but ProFlow planned the job in phases and kept dust under control. The finished bathroom looks like a model home.",
      },
      {
        name: "Angela M.",
        neighborhood: "Blue Oaks",
        service: "Interior Painting & Flooring",
        quote:
          "From estimate to final walkthrough, everything felt organized and professional. The new floors and paint completely changed how our home feels.",
      },
    ],
    issues: [
      "Sun-faded exterior paint and trim on stucco homes exposed to Roseville’s long, hot summers.",
      "Original 1990s–2000s kitchens with closed-off layouts, oak cabinets, and worn countertops.",
      "High-traffic carpet in living rooms, halls, and stairs that no longer keeps up with kids and pets.",
      "Gutters that overflow during winter storms, especially on two-story homes with complex rooflines.",
      "Bathrooms with limited storage, poor lighting, and aging tile that are ready for a modern refresh.",
    ],
    localFaqs: [
      {
        q: "Do you remodel homes across all of Roseville?",
        a: "Yes. We regularly complete projects in Blue Oaks, Fiddyment Farm, Highland Reserve, Ridgeview, and surrounding Roseville neighborhoods. If your home is in or near the city, we can usually schedule an on-site visit quickly.",
      },
      {
        q: "Can you help navigate HOA or community guidelines in Roseville?",
        a: "Many Roseville neighborhoods have HOA requirements for exterior colors, materials, and work hours. Our team reviews your guidelines, prepares any necessary documentation, and coordinates approvals so your project stays compliant.",
      },
      {
        q: "How far out are you booking Roseville remodeling projects?",
        a: "Scheduling depends on project size and season, but we typically start smaller projects within a few weeks and larger kitchen or bathroom remodels within 4–8 weeks. During your estimate, we’ll review current availability and lock in your spot on the calendar.",
      },
      {
        q: "Do you charge extra travel fees for projects in Roseville?",
        a: "No. Roseville is part of our core service area, so there are no separate trip or travel fees. Your proposal includes all standard labor, materials, and site visits required to complete the scope of work.",
      },
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
      "Rocklin blends established neighborhoods like Stanford Ranch and Sunset West with hillside communities such as Whitney Oaks and Rocklin Ranch Golf Club. Many homes feature open floor plans, tall ceilings, and great natural light—but still carry original finishes, dated tile, or builder-grade paint that no longer matches modern tastes.\n\nWith hot summers and occasional winter storms, Rocklin exteriors take a beating. South- and west-facing elevations fade quickly, trim begins to peel, and clogged gutters can direct water toward foundations or landscaping. Inside, families are updating kitchens, refreshing bathrooms, and reworking bonus rooms into offices, gyms, or multi-use spaces that better fit everyday life.\n\nRocklin homeowners look for contractors who respect HOA guidelines, keep job sites clean, and communicate clearly about schedule and budget. ProFlow’s teams combine gutter, paint, handyman, and remodeling services under one roof, using ProFlow360 to keep you updated with photos, messages, and schedule changes from start to finish.",
    serviceList: [
      { title: "Gutter Repair & Replacement", href: "/services/gutter-repair-replacement" },
      { title: "Handyman Services", href: "/services/handyman" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Contact", href: "/contact" },
      { text: "Blog", href: "/blog" },
    ],
    projects: [
      {
        title: "Exterior repaint – Stanford Ranch, Rocklin",
        subtitle:
          "Repainted a two-story stucco home with HOA-approved colors, refreshed trim, and repaired weathered fascia boards.",
        image: "/hero-service-exterior-painting.jpeg",
      },
      {
        title: "Kitchen update – Whitney Oaks area",
        subtitle:
          "Updated cabinets with new paint, added modern hardware, installed quartz countertops, and upgraded lighting over the island.",
        image: "/remodel-kitchen.jpeg",
      },
      {
        title: "Gutter repair & replacement – Sunset West",
        subtitle:
          "Replaced failing gutters and downspouts, improved drainage, and added guards in heavy tree areas around the property.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
    ],
    testimonials: [
      {
        name: "David R.",
        neighborhood: "Stanford Ranch",
        service: "Gutter Repair & Painting",
        quote:
          "ProFlow handled our gutter replacement and exterior repaint as one coordinated project. The crews were punctual, respectful, and the house looks brand new.",
      },
      {
        name: "Heather S.",
        neighborhood: "Whitney Oaks",
        service: "Kitchen Refresh",
        quote:
          "We didn’t need a full gut remodel, just an update. ProFlow suggested smart changes—cabinet painting, new counters, and lighting—that completely changed the feel of the kitchen.",
      },
      {
        name: "Eric T.",
        neighborhood: "Sunset West",
        service: "Handyman & Small Repairs",
        quote:
          "They knocked out a long list of repairs in one visit. Communication was clear, pricing was fair, and everything was left clean at the end of the day.",
      },
    ],
    issues: [
      "Sun-exposed stucco and trim that fade or peel faster on hilltop and corner-lot homes.",
      "Original builder finishes in kitchens and bathrooms that no longer match modern styles or storage needs.",
      "Gutters that clog with leaves and roof granules, especially on two-story homes with complex rooflines.",
      "Cracked caulking and separation at exterior joints after years of temperature swings.",
      "Busy households that need durable, easy-to-clean flooring in main living areas and stairways.",
    ],
    localFaqs: [
      {
        q: "Do you work in all Rocklin neighborhoods?",
        a: "Yes. We routinely complete projects in Stanford Ranch, Whitney Oaks, Sunset West, and near Rocklin Ranch Golf Club, as well as surrounding Rocklin communities.",
      },
      {
        q: "Can you help with Rocklin HOA color and design approvals?",
        a: "We’re familiar with HOA and community guidelines throughout Rocklin. Our team can provide color samples, documentation, and photos to support your approval process before work begins.",
      },
      {
        q: "Do you offer both small repairs and full remodeling in Rocklin?",
        a: "Absolutely. We handle everything from minor handyman fixes and gutter repairs to full kitchen, bathroom, and whole-home remodels. During your estimate we’ll discuss the best approach for your project size and budget.",
      },
      {
        q: "Is there a travel fee for Rocklin projects?",
        a: "No. Rocklin is part of our core service area, so there are no added travel or trip fees. Your proposal includes all standard site visits and labor needed to complete the job.",
      },
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
      "Loomis offers a mix of rural properties, small-town streets off Taylor Road, and custom homes around areas like Horseshoe Bar and Loomis Basin. Many homes sit on larger lots with mature trees, long driveways, and outbuildings—which means more surfaces to maintain and more value to protect when storms roll through.\n\nWe frequently see aging exterior paint on barns and main homes, sagging or undersized gutters that struggle with heavy leaf loads, and older interiors that haven’t been updated in years. At the same time, Loomis homeowners often want to preserve the town’s relaxed, rural character while modernizing kitchens, bathrooms, and living spaces for today’s lifestyles.\n\nProFlow crews are comfortable working on both rural and neighborhood properties in Loomis. From gutter cleaning and pressure washing to full remodels and shop or ADU build-outs, we bring organized scheduling, clean job sites, and tech-enabled communication so you get big-contractor professionalism with small-town respect.",
    serviceList: [
      { title: "Exterior Painting", href: "/services/exterior-painting" },
      { title: "Pressure Washing", href: "/services/pressure-washing" },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Projects", href: "/projects" },
    ],
    projects: [
      {
        title: "Farmhouse exterior repaint – Loomis Basin",
        subtitle:
          "Repainted a classic farmhouse and detached shop, repairing weathered trim and upgrading to a durable exterior paint system.",
        image: "/hero-service-exterior-painting.jpeg",
      },
      {
        title: "Outdoor living refresh – Horseshoe Bar area",
        subtitle:
          "Pressure washed hardscape, refinished patio surfaces, and completed touch-up painting on posts and beams for an outdoor entertaining space.",
        image: "/hero-service-pressure-washing.jpeg",
      },
      {
        title: "Interior update – Taylor Road corridor",
        subtitle:
          "Refreshed a 1990s interior with new paint, modern fixtures, and small carpentry repairs while preserving the home’s original character.",
        image: "/hero-service-interior-painting.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Karen H.",
        neighborhood: "Loomis Basin",
        service: "Exterior Painting & Repairs",
        quote:
          "Our farmhouse needed serious exterior attention. ProFlow handled carpentry repairs and repainting with care, and the crew treated our property like their own.",
      },
      {
        name: "Michael D.",
        neighborhood: "Horseshoe Bar",
        service: "Pressure Washing & Maintenance",
        quote:
          "They cleaned years of buildup off our driveway, patios, and walkways. Everything looks brighter, and they were careful around landscaping and fencing.",
      },
      {
        name: "Samantha P.",
        neighborhood: "Taylor Road",
        service: "Interior Painting",
        quote:
          "We wanted to modernize without losing the cozy feel of our home. The ProFlow team helped us choose colors and executed the work beautifully.",
      },
    ],
    issues: [
      "Heavy leaf and pine needle buildup in gutters and on roofs around tree-lined Loomis properties.",
      "Aging barn and outbuilding exteriors that need repainting and minor carpentry repairs.",
      "Driveways, patios, and walkways that accumulate moss, dust, and tire marks over time.",
      "Interior finishes that haven’t been updated in decades but still have good structural bones.",
      "Homes on wells or acreage where protecting foundations and drainage is especially important.",
    ],
    localFaqs: [
      {
        q: "Do you service rural properties and acreage in Loomis?",
        a: "Yes. We regularly work on homes with long driveways, outbuildings, barns, and acreage throughout Loomis Basin, Horseshoe Bar, and Taylor Road areas.",
      },
      {
        q: "Can you coordinate work around animals, gates, and rural access?",
        a: "We’re used to working around gates, animals, and unique access situations common to Loomis properties. We’ll review access and any special considerations during your estimate.",
      },
      {
        q: "What services are most common for Loomis homeowners?",
        a: "Exterior painting, pressure washing, gutter cleaning, and targeted interior updates are the most frequent projects we complete in Loomis. We also support select remodeling and ADU projects.",
      },
      {
        q: "Is there an additional charge for driving out to Loomis?",
        a: "No. Loomis is part of our normal service area, and standard travel is included in your estimate for the agreed-upon scope of work.",
      },
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
      "Auburn foothill properties—from historic homes near Downtown Auburn to newer builds in North Auburn and rural lots near Hidden Falls—face unique maintenance challenges. Sloped lots, long driveways, tall trees, and older construction details all impact how gutters, roofs, and exterior paint hold up over time.\n\nWe frequently see clogged gutters filled with needles and leaves, weathered decks and railings, and exterior paint that has been baked by the sun and then hit with winter storms. Inside, many Auburn homeowners are updating kitchens, bathrooms, and flooring to match a more modern mountain or farmhouse aesthetic while keeping the cozy feel that makes the foothills special.\n\nProFlow brings organized project management and clean, professional crews to Auburn jobsites. Whether you need straightforward gutter cleaning, exterior repainting, or a full remodel, we coordinate logistics, protect your property, and keep you informed with ProFlow360 updates so the process feels manageable—not stressful.",
    serviceList: [
      { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { title: "Handyman Services", href: "/services/handyman" },
    ],
    internalLinks: [
      { text: "Service Areas", href: "/service-areas" },
      { text: "Contact", href: "/contact" },
    ],
    projects: [
      {
        title: "Foothill gutter cleaning – North Auburn",
        subtitle:
          "Cleared heavy pine needles and leaf debris from a steep-roof home, flushed downspouts, and added extensions to move water away from the foundation.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
      {
        title: "Deck and exterior refresh – Downtown Auburn area",
        subtitle:
          "Repaired weathered railing, prepped surfaces, and applied a new stain and paint system to protect against sun and rain.",
        image: "/hero-service-pressure-washing.jpeg",
      },
      {
        title: "Interior updates – Loch Lomond",
        subtitle:
          "Updated interior paint, replaced worn flooring, and completed handyman repairs throughout a well-loved foothill home.",
        image: "/hero-service-interior-painting.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Tom B.",
        neighborhood: "North Auburn",
        service: "Gutter Cleaning & Repairs",
        quote:
          "Our foothill property collects a ton of debris. ProFlow cleared the gutters, fixed a few problem areas, and showed us photos of everything so we knew it was done right.",
      },
      {
        name: "Ellen C.",
        neighborhood: "Downtown Auburn",
        service: "Exterior Painting",
        quote:
          "The crew was respectful of our older home and careful with prep. The new paint has held up beautifully through the seasons.",
      },
      {
        name: "Ryan L.",
        neighborhood: "Loch Lomond",
        service: "Interior Painting & Handyman",
        quote:
          "They helped us knock out a list of updates before moving in. Communication was excellent and the house felt refreshed and move-in ready.",
      },
    ],
    issues: [
      "Pine needles and leaves that quickly clog gutters and downspouts on foothill properties.",
      "Steep driveways and slopes that require careful planning for equipment and access.",
      "Exterior paint and decks that weather faster due to sun, rain, and temperature swings.",
      "Older homes with patchwork repairs that need a more comprehensive update plan.",
      "Interior finishes that don’t match today’s styles but offer great potential for remodeling.",
    ],
    localFaqs: [
      {
        q: "Do you service homes outside central Auburn?",
        a: "Yes. We work throughout Downtown Auburn, North Auburn, and nearby foothill communities, including more rural properties with slopes and long driveways.",
      },
      {
        q: "Can you work safely on steep or elevated areas?",
        a: "Our crews are trained and equipped to handle ladders, slopes, and elevated work within safe working limits. We’ll assess access and safety during your estimate.",
      },
      {
        q: "What services are most popular for Auburn homeowners?",
        a: "Gutter cleaning, exterior painting, deck and railing maintenance, and targeted interior updates are the most common services we provide in Auburn.",
      },
      {
        q: "Is there extra cost for foothill access or distance?",
        a: "Standard travel within the Auburn area is included in your estimate. If a property requires specialized access or equipment, we’ll outline any related costs up front.",
      },
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
      "Folsom offers a mix of newer developments like Empire Ranch and Broadstone, established neighborhoods in Northridge, and historic homes near Sutter Street and the American River. Many properties are part of well-managed communities with specific standards for exterior colors, landscaping, and visible improvements.\n\nWe routinely see sun-faded stucco and trim, weathered decks, and gutters that need attention before the rainy season. Inside, Folsom homeowners are updating builder-grade kitchens and bathrooms, installing luxury vinyl plank flooring, and carving out home offices or flex spaces to match today’s work-from-home reality.\n\nBecause Folsom families are busy, they value a contractor that shows up on time, respects HOA rules, and keeps the home livable during projects. ProFlow pairs tech-enabled scheduling with clean, respectful crews—delivering everything from pressure washing and interior painting to full remodels without the typical contractor friction.",
    serviceList: [
      { title: "Pressure Washing", href: "/services/pressure-washing" },
      { title: "Interior Painting", href: "/services/interior-painting" },
    ],
    internalLinks: [
      { text: "Remodeling", href: "/remodeling" },
      { text: "Reviews", href: "/reviews" },
    ],
    projects: [
      {
        title: "Kitchen refresh – Empire Ranch, Folsom",
        subtitle:
          "Painted dark cabinets a bright, modern color, installed new hardware, and updated lighting for a more open, welcoming kitchen.",
        image: "/remodel-kitchen.jpeg",
      },
      {
        title: "LVP flooring install – Northridge area",
        subtitle:
          "Replaced worn carpet with waterproof luxury vinyl plank flooring throughout the main level for a clean, family-friendly look.",
        image: "/remodel-flooring.jpeg",
      },
      {
        title: "Exterior cleaning – Historic Folsom",
        subtitle:
          "Pressure washed exterior surfaces, walkways, and patio areas to restore curb appeal while protecting nearby landscaping and hardscape.",
        image: "/hero-service-pressure-washing.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Adam S.",
        neighborhood: "Broadstone",
        service: "Bathroom Remodeling",
        quote:
          "Our bathroom remodel came out perfect. The ProFlow360 system kept me updated the entire time and the crew was respectful of our home.",
      },
      {
        name: "Nina W.",
        neighborhood: "Empire Ranch",
        service: "Interior Painting",
        quote:
          "The team helped us pick colors, worked around our schedule, and left the house spotless each day. The finished walls and trim look fantastic.",
      },
      {
        name: "Jason P.",
        neighborhood: "Northridge",
        service: "Flooring & Handyman",
        quote:
          "We had a mix of flooring and repair needs. ProFlow coordinated everything under one project so we didn’t have to juggle multiple contractors.",
      },
    ],
    issues: [
      "Sun-faded stucco and trim on homes exposed to Folsom’s hot summers.",
      "Builder-grade kitchens and baths that no longer match current styles or storage needs.",
      "Driveways, walkways, and patios with dirt and staining that benefit from periodic pressure washing.",
      "High-traffic carpet in family rooms and stairs that wears out quickly with kids and pets.",
      "HOA and community guidelines that require careful planning for exterior changes and colors.",
    ],
    localFaqs: [
      {
        q: "Do you work with Folsom HOAs and neighborhood guidelines?",
        a: "Yes. We regularly work in HOA-managed communities throughout Folsom. Our team reviews your guidelines, helps with documentation, and plans work to stay compliant with community standards.",
      },
      {
        q: "Can you complete projects while we’re living in the home?",
        a: "Most interior painting, flooring, and bathroom remodels are completed while homeowners remain in place. We protect surfaces, manage dust, and phase work to keep disruption as low as possible.",
      },
      {
        q: "How soon should we schedule gutter cleaning or exterior work before the rainy season?",
        a: "For Folsom homes, we recommend scheduling gutter cleaning and exterior maintenance in early fall so everything is ready before the first major storms.",
      },
      {
        q: "Is there a service trip charge for Folsom?",
        a: "No. Folsom is part of our core service area, and standard travel time is included in your estimate.",
      },
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
      "Granite Bay neighborhoods like Treelake, Wexford, Douglas Ranch, and the Granite Bay Golf Club area feature custom homes, large lots, and high expectations for craftsmanship. Many properties have impressive architecture and finishes that require careful maintenance to protect their value and curb appeal.\n\nWe often see homeowners planning phased upgrades—refreshing exteriors, updating kitchens and baths, and adding outdoor living spaces that match the quality of the home. With mature landscaping, complex rooflines, and detailed trim work, projects in Granite Bay demand crews who are meticulous with preparation, protection, and cleanup.\n\nProFlow is built for homeowners who expect premium service. Our licensed teams, vetted subcontractors, and ProFlow360 communication platform provide transparency at every step, whether you’re scheduling routine maintenance or coordinating a multi-stage remodel.",
    serviceList: [
      { title: "Interior Painting", href: "/services/interior-painting" },
      { title: "Maintenance Plans", href: "/services/maintenance-plans" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Contact", href: "/contact" },
    ],
    projects: [
      {
        title: "Luxury kitchen repaint – Treelake, Granite Bay",
        subtitle:
          "Repainted existing custom cabinetry, refreshed walls and trim, and coordinated minor carpentry repairs to modernize a high-end kitchen without a full gut.",
        image: "/hero-service-interior-painting.jpeg",
      },
      {
        title: "Exterior refresh – Douglas Ranch",
        subtitle:
          "Completed a full exterior repaint with detailed prep, color updates, and careful protection of landscaping and hardscape.",
        image: "/hero-service-exterior-painting.jpeg",
      },
      {
        title: "Annual maintenance plan – Wexford area",
        subtitle:
          "Created a recurring maintenance schedule including gutter service, small repairs, and touch-up painting to protect a large custom home.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Sarah L.",
        neighborhood: "Douglas Ranch",
        service: "Exterior Painting",
        quote:
          "Our home has a lot of details and trim. ProFlow took the time to prep correctly and the finished paint job looks crisp and consistent.",
      },
      {
        name: "Michael G.",
        neighborhood: "Treelake",
        service: "Interior Painting & Repairs",
        quote:
          "We wanted to freshen up several rooms without disrupting our daily routine. The crew was professional, quiet, and left everything spotless each evening.",
      },
      {
        name: "Laura P.",
        neighborhood: "Wexford",
        service: "Maintenance Plan",
        quote:
          "It’s a relief knowing ProFlow has a plan to keep up with the little things before they become big issues. Communication and workmanship have been excellent.",
      },
    ],
    issues: [
      "Sun and weather exposure that can quickly age premium exterior paint and detailed trim work.",
      "Complex rooflines, gutters, and downspouts that require regular maintenance to protect foundations and landscaping.",
      "High-end interiors that need careful protection and dust control during any painting or remodel work.",
      "Homeowners planning phased improvements who need a trusted partner to maintain consistency in quality and design.",
      "Busy schedules that require organized crews who arrive on time and communicate clearly.",
    ],
    localFaqs: [
      {
        q: "Do you work on high-end and custom homes in Granite Bay?",
        a: "Yes. Our crews are experienced with custom properties throughout Treelake, Wexford, Douglas Ranch, and the Granite Bay Club area, and we take extra care with protection and cleanup.",
      },
      {
        q: "Can you build a maintenance plan for our Granite Bay home?",
        a: "We frequently create annual or seasonal maintenance plans that include gutter service, pressure washing, small repairs, and touch-up painting tailored to your property.",
      },
      {
        q: "Will the same team handle our project from start to finish?",
        a: "A dedicated project lead coordinates your work and communicates through ProFlow360, so you always know who is on site and what’s happening next.",
      },
      {
        q: "Do you coordinate with designers or other trades in Granite Bay?",
        a: "We’re happy to collaborate with your designer or other trades, and we can also recommend trusted partners when needed for larger remodeling projects.",
      },
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
      "Lincoln neighborhoods like 12 Bridges, Lincoln Crossing, Catta Verdera, and Riverside blend newer master-planned communities with golf-course and rural-edge properties. Many homes are relatively new, but even newer builds benefit from upgraded finishes, custom paint, and ongoing maintenance as they settle and age.\n\nWe see Lincoln homeowners investing in gutter guards to cut down on maintenance, upgrading exterior paint to richer, longer-lasting schemes, and planning remodels that personalize spec homes with better kitchens, bathrooms, and flooring. With busy households and commuting schedules, having one team coordinate multiple services is a major advantage.\n\nProFlow provides organized communication, fair quotes, and reliable crews across Lincoln. Whether you’re tackling a punch list on a newer home or planning a larger remodel, we use ProFlow360 to keep you up to date on schedule, photos, and progress so you always know where your project stands.",
    serviceList: [
      { title: "Gutter Guards", href: "/services/gutter-guards" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Contact", href: "/contact" },
    ],
    projects: [
      {
        title: "Gutter guard installation – 12 Bridges, Lincoln",
        subtitle:
          "Installed low-profile gutter guards on a two-story home to reduce debris buildup and ongoing maintenance.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
      {
        title: "Kitchen personalization – Lincoln Crossing",
        subtitle:
          "Upgraded a builder kitchen with new backsplash, hardware, and lighting to better match the homeowner’s style.",
        image: "/remodel-kitchen.jpeg",
      },
      {
        title: "Interior repaint – Catta Verdera area",
        subtitle:
          "Repainted main living spaces with a modern color palette, focusing on clean lines and durable finishes.",
        image: "/hero-service-interior-painting.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Chris H.",
        neighborhood: "12 Bridges",
        service: "Gutter Guards",
        quote:
          "The gutter guards ProFlow installed have made a huge difference. No more overflowing gutters during storms, and the installation was clean and professional.",
      },
      {
        name: "Olivia N.",
        neighborhood: "Lincoln Crossing",
        service: "Kitchen Updates",
        quote:
          "We didn’t want to redo the whole kitchen, just make it feel more like us. ProFlow recommended smart upgrades that made a big impact without a full remodel.",
      },
      {
        name: "James P.",
        neighborhood: "Catta Verdera",
        service: "Interior Painting",
        quote:
          "Excellent attention to detail and communication. The crew worked carefully around our furnishings and delivered a great finish on the walls and trim.",
      },
    ],
    issues: [
      "Newer homes that need personalization beyond the original builder-grade finishes.",
      "Gutters that accumulate debris along roof valleys and over entries despite being relatively new.",
      "Exterior color schemes that homeowners want to refresh or upgrade after a few years.",
      "Minor settling cracks and touch-ups that build up into a longer punch list over time.",
      "Busy schedules that make coordinating multiple contractors difficult without a single point of contact.",
    ],
    localFaqs: [
      {
        q: "Do you handle both new and older homes in Lincoln?",
        a: "Yes. We work on newer homes in 12 Bridges and Lincoln Crossing as well as established properties near Catta Verdera and Riverside.",
      },
      {
        q: "Are gutter guards worth it for Lincoln homes?",
        a: "For many Lincoln properties, especially two-story homes or those near trees, gutter guards significantly reduce maintenance and help prevent water damage from clogs. We’ll review options and whether they make sense for your roofline.",
      },
      {
        q: "Can you help us plan phased improvements?",
        a: "Absolutely. We can prioritize projects—such as paint, gutters, and interior updates—so you can tackle them in stages that fit your budget and schedule.",
      },
      {
        q: "Is there a travel fee for work in Lincoln?",
        a: "No. Lincoln is part of our regular service area, and standard travel time is included in your estimate.",
      },
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
      "Sacramento combines classic neighborhoods like East Sacramento and Land Park with newer communities in Natomas and Greenhaven. From historic bungalows and mid-century homes to newer builds and townhomes, each area has its own character—and its own set of maintenance and remodeling needs.\n\nIn older neighborhoods, we often see original windows, aging plaster or drywall, and floor plans that benefit from thoughtful updates. Across the city, hot summers and winter storms take a toll on exterior paint, gutters, and roofing details. Inside, many homeowners are upgrading kitchens and baths, finishing garages, and converting spare rooms into home offices or guest suites.\n\nAs the hub for ProFlow, Sacramento is where all of our divisions come together—gutters, painting, remodeling, and handyman work—under one organized process. With ProFlow360, you have a single communication channel for estimates, scheduling, job photos, and updates, whether you’re booking a simple gutter cleaning or planning a full-home renovation.",
    serviceList: [
      { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { title: "Handyman Services", href: "/services/handyman" },
      { title: "Remodeling", href: "/remodeling" },
    ],
    internalLinks: [
      { text: "Projects", href: "/projects" },
      { text: "Reviews", href: "/reviews" },
    ],
    projects: [
      {
        title: "Interior repaint – East Sacramento bungalow",
        subtitle:
          "Freshened walls, ceilings, and trim with a modern color palette while preserving original character details.",
        image: "/hero-service-interior-painting.jpeg",
      },
      {
        title: "Exterior painting – Land Park home",
        subtitle:
          "Completed a full exterior repaint, repaired failing trim, and upgraded to a more durable paint system for Sacramento weather.",
        image: "/hero-service-exterior-painting.jpeg",
      },
      {
        title: "Gutter cleaning & guards – Natomas",
        subtitle:
          "Cleaned existing gutters and installed guards on a two-story home to reduce maintenance and prevent overflow during storms.",
        image: "/hero-service-gutter-cleaning.jpeg",
      },
    ],
    testimonials: [
      {
        name: "Sarah K.",
        neighborhood: "East Sacramento",
        service: "Interior Painting & Repairs",
        quote:
          "Our older home needed careful prep. ProFlow repaired cracks, smoothed walls, and the new paint has completely brightened the space.",
      },
      {
        name: "Luis M.",
        neighborhood: "Natomas",
        service: "Gutter Cleaning & Guards",
        quote:
          "Great communication, on-time arrival, and clear explanation of options. The gutters look great and we’re ready for the rainy season.",
      },
      {
        name: "Emily J.",
        neighborhood: "Land Park",
        service: "Remodeling & Handyman",
        quote:
          "ProFlow helped us with a kitchen refresh and a long list of repairs. Having one company coordinate everything made the process much easier.",
      },
    ],
    issues: [
      "Older Sacramento homes with original finishes that need careful updates rather than quick fixes.",
      "Sun, heat, and winter storms that accelerate wear on exterior paint, trim, and gutters.",
      "Tree-lined streets that contribute to frequent gutter clogs and drainage issues.",
      "Changing lifestyle needs that drive kitchen, bathroom, and home office remodels.",
      "Busy homeowners who need one organized partner to coordinate multiple trades.",
    ],
    localFaqs: [
      {
        q: "Do you work in all parts of Sacramento?",
        a: "Yes. We serve East Sacramento, Land Park, Natomas, Greenhaven, and surrounding Sacramento neighborhoods with gutter, painting, remodeling, and handyman services.",
      },
      {
        q: "Can you handle permits and inspections for Sacramento remodeling projects?",
        a: "We regularly work with Sacramento building departments and can coordinate permits, inspections, and required documentation for your remodel.",
      },
      {
        q: "Are you experienced with older homes in neighborhoods like East Sacramento and Land Park?",
        a: "Our crews are familiar with the quirks of older homes—from plaster walls to original trim—and we take extra care with preparation and protection.",
      },
      {
        q: "Do you offer ongoing maintenance for Sacramento properties?",
        a: "Yes. We can bundle services like gutter cleaning, painting touch-ups, and small repairs into a maintenance plan so your home stays in great shape year-round.",
      },
    ],
  },
};
