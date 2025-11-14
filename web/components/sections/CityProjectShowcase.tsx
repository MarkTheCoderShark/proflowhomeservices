type CityProject = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function CityProjectShowcase({
  city,
  projects,
}: {
  city: string;
  projects: CityProject[];
}) {
  if (!projects.length) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Recent Projects in {city}
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A look at real ProFlow work completed in and around {city}. Photos may be representative, but the results and attention to detail are exactly what you can expect.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg border-2 border-mint_green-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="h-56 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-4">
                <h3 className="heading text-lg font-semibold text-slate-900 group-hover:text-viridian-700">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="mt-1 text-sm text-slate-700">
                    {project.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 heading text-base font-semibold text-viridian-700 hover:text-viridian-800"
          >
            View more projects
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

