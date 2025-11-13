import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and resources for Sacramento-area homeowners.",
};

export default function Blog() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading text-3xl font-semibold text-evergreen">Blog</h1>
        <p className="mt-2 text-slate">Articles coming soon.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="rounded-lg border border-zinc-200 bg-white p-5">
              <h2 className="heading text-lg font-semibold text-evergreen">Post Title {i}</h2>
              <p className="mt-2 text-slate text-sm">Short excerpt appears here.</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

