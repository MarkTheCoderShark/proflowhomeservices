import { BreadcrumbsJsonLd, CollectionPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Projects",
  description: "A gallery of recent ProFlow projects across services and remodeling.",
  path: "/projects",
});

const projectGallery = [
  // Behind the Scenes
  { image: "/behindscenes1.jpeg", title: "Professional Gutter Installation", category: "Gutters", city: "Sacramento" },
  { image: "/behindscenes2.jpeg", title: "Exterior Painting Project", category: "Painting", city: "Roseville" },
  { image: "/behindscenes3.jpeg", title: "Team on Site", category: "General", city: "Rocklin" },
  { image: "/behindscenes4.jpeg", title: "Quality Workmanship", category: "Remodeling", city: "Citrus Heights" },
  { image: "/behindscenes5.jpeg", title: "Professional Service", category: "Handyman", city: "Folsom" },

  // ADU Projects
  { image: "/adu-interior2.jpeg", title: "ADU Interior Build", category: "ADU", city: "Sacramento" },
  { image: "/adu-interior3.jpeg", title: "Custom ADU Living Space", category: "ADU", city: "Roseville" },
  { image: "/remodel-adu.jpeg", title: "Complete ADU Conversion", category: "ADU", city: "Rocklin" },

  // Kitchen & Bathroom
  { image: "/remodel-kitchen.jpeg", title: "Modern Kitchen Remodel", category: "Kitchen Remodeling", city: "Roseville" },
  { image: "/bathroom.jpeg", title: "Luxury Bath Renovation", category: "Bathroom Remodeling", city: "Sacramento" },

  // Flooring
  { image: "/lvp-flooring.jpeg", title: "LVP Flooring Installation", category: "Flooring", city: "Rocklin" },
  { image: "/lvp-flooring2.jpeg", title: "Luxury Vinyl Plank", category: "Flooring", city: "Citrus Heights" },
  { image: "/lvp-flooring3.jpeg", title: "Premium LVP Installation", category: "Flooring", city: "Granite Bay" },

  // Hero Remodeling
  { image: "/hero-remodeling.jpeg", title: "Complete Home Remodel", category: "Remodeling", city: "Folsom" },
  { image: "/hero-remodeling2.jpeg", title: "Remodeling Excellence", category: "Remodeling", city: "Lincoln" },

  // Service Projects
  { image: "/hero-service-gutter-cleaning.jpeg", title: "Gutter Cleaning Service", category: "Gutters", city: "Granite Bay" },
  { image: "/hero-service-handyman.jpeg", title: "Handyman Services", category: "Handyman", city: "Loomis" },
  { image: "/hero-service-interior-painting.jpeg", title: "Interior Painting", category: "Painting", city: "Auburn" },
  { image: "/hero-service-exterior-painting.jpeg", title: "Exterior Painting", category: "Painting", city: "Sacramento" },
  { image: "/hero-service-pressure-washing.jpeg", title: "Pressure Washing", category: "Pressure Washing", city: "Roseville" },
  { image: "/hero-service-roof-solar-cleaning.jpeg", title: "Roof & Solar Cleaning", category: "Cleaning", city: "Rocklin" },
];

export default function Projects() {
  return (
    <>
      <div className="section bg-white">
        <div className="container">
          <BreadcrumbsJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: "Projects", url: "/projects" },
            ]}
          />
          <CollectionPageJsonLd name="Projects" url="/projects" />

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-viridian-900">
              Our Work in Action
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              See our team delivering quality home services and remodeling projects across Sacramento, Roseville, Rocklin, and surrounding areas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectGallery.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white border-2 border-mint_green-200">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-mint_cream-200 text-sm mt-1">{project.category}</p>
                    <p className="text-mint_cream-300 text-sm">{project.city}, CA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
