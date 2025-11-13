const projects = [
  {
    title: "Luxury Bath Remodel",
    category: "Bathroom Remodeling",
    city: "Roseville",
    href: "/remodeling/bathroom",
    image: "/bathroom.jpeg"
  },
  {
    title: "Modern Kitchen Transformation",
    category: "Kitchen Remodeling",
    city: "Rocklin",
    href: "/remodeling/kitchen",
    image: "/remodel-kitchen.jpeg"
  },
  {
    title: "Backyard ADU Build",
    category: "ADU Construction",
    city: "Sacramento",
    href: "/remodeling/adu",
    image: "/remodel-adu.jpeg"
  },
  {
    title: "Luxury Vinyl Flooring",
    category: "Flooring Installation",
    city: "Citrus Heights",
    href: "/remodeling/flooring",
    image: "/lvp-flooring.jpeg"
  },
  {
    title: "Fresh Exterior Refresh",
    category: "Exterior Painting",
    city: "Granite Bay",
    href: "/services/exterior-painting",
    image: "/hero-service-exterior-painting.jpeg"
  },
  {
    title: "Complete Driveway Wash",
    category: "Pressure Washing",
    city: "Folsom",
    href: "/services/pressure-washing",
    image: "/hero-service-pressure-washing.jpeg"
  },
];

export default function ProjectGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            See how we've transformed homes across Sacramento, Roseville, Rocklin, and surrounding areas.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative block overflow-hidden rounded-lg border-2 border-mint_green-200 bg-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative">
                <div
                  className="h-64 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 bg-white">
                <div className="heading text-xl font-bold text-slate-900 group-hover:text-viridian-700 transition-colors">
                  {project.title}
                </div>
                <p className="mt-2 text-sm text-viridian-600 font-semibold">{project.category}</p>
                <p className="mt-1 text-sm text-slate-600">{project.city}, CA</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-viridian-700 heading text-lg font-semibold hover:text-viridian-800 transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
