import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A gallery of recent ProFlow projects across services and remodeling.",
};

export default function Projects() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading text-3xl font-semibold text-evergreen">Projects</h1>
        <p className="mt-2 text-slate">Filters coming soon: Painting | Gutters | Remodeling | Handyman</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-mist" />
          ))}
        </div>
      </div>
    </div>
  );
}

