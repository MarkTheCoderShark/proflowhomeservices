export default function Neighborhoods({
  city,
  items = [],
}: {
  city: string;
  items?: readonly string[];
}) {
  const list = items.length
    ? items
    : ["Downtown", "Old Town", "Lakeside", "Hillside"];
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">
          Neighborhoods We Serve in {city}
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-slate">
          {list.map((n) => (
            <li key={n} className="rounded-md border border-zinc-200 bg-white px-3 py-2">
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
