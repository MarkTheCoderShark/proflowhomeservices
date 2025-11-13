const projects = [
  { title: "Bath & Tile", category: "Bathroom Remodeling", href: "/remodeling/bathroom", image: "/bathroom.jpeg" },
  { title: "Modern Kitchen", category: "Kitchen Remodeling", href: "/remodeling/kitchen", image: "/remodel-kitchen.jpeg" },
  { title: "New ADU", category: "ADU", href: "/remodeling/adu", image: "/remodel-adu.jpeg" },
  { title: "Flooring Update", category: "Flooring", href: "/remodeling/flooring", image: "/lvp-flooring.jpeg" },
  { title: "Fresh Exterior Paint", category: "Exterior Painting", href: "/services/exterior-painting", image: "/hero-service-exterior-painting.jpeg" },
  { title: "Clean Driveway", category: "Pressure Washing", href: "/services/pressure-washing", image: "/hero-service-pressure-washing.jpeg" },
];

export default function ProjectGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">Featured Projects</h2>
          <a href="/projects" className="text-viridian-600 heading text-sm font-medium hover:text-viridian-700 transition">View All Projects →</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative block overflow-hidden rounded-lg border-2 border-mint_green-200 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-4 bg-white">
                <div className="heading text-lg font-semibold text-slate-900">{project.title}</div>
                <p className="text-sm text-viridian-600 font-medium">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
