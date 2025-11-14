export default function CityHomeIssues({
  city,
  issues,
}: {
  city: string;
  issues: string[];
}) {
  if (!issues.length) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">
          Common Home Issues in {city}
        </h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          After thousands of site visits across {city}, we see the same patterns again and again. Addressing these early protects your home and keeps future projects simpler and more affordable.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-800">
          {issues.map((issue) => (
            <li
              key={issue}
              className="flex items-start gap-3 rounded-lg border border-mint_green-200 bg-mint_green-50 px-3 py-2"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-viridian-500" />
              <span>{issue}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

