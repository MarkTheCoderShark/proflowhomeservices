export default function ProjectGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Featured Projects</h2>
          <a href="/projects" className="text-aqua heading text-sm">View All Projects →</a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-mist" />
          ))}
        </div>
      </div>
    </section>
  );
}

