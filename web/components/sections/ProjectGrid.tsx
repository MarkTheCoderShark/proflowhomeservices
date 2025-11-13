const projects = [
  { title: "Bath & Tile", category: "Bathroom Remodeling", href: "/remodeling/bathroom", image: "/dreamina-2025-11-12-8102-A luxurious, freshly remodeled bathroom ....jpeg" },
  { title: "Modern Kitchen", category: "Kitchen Remodeling", href: "/remodeling/kitchen", image: "/remodel-kitchen.jpeg" },
  { title: "New ADU", category: "ADU", href: "/remodeling/adu", image: "/remodel-adu.jpeg" },
  { title: "Flooring Update", category: "Flooring", href: "/remodeling/flooring", image: "/lvp-flooring.jpeg" },
  { title: "Hero Exterior", category: "Exterior Painting", href: "/services/exterior-painting", image: "/hero-service-exterior-painting.jpeg" },
  { title: "Pressure Wash", category: "Pressure Washing", href: "/services/pressure-washing", image: "/hero-service-pressure-washing.jpeg" },
];

export default function ProjectGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Featured Projects</h2>
          <a href="/projects" className="text-aqua heading text-sm">View All Projects →</a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative block overflow-hidden rounded-lg card-soft shadow-sm"
            >
              <div
                className="h-48 w-full bg-cover bg-center transition group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-4">
                <div className="heading text-lg font-semibold text-evergreen">{project.title}</div>
                <p className="text-sm text-slate">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
