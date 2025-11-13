import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, vision, company story, team, and technology advantage.",
};

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="heading text-3xl font-semibold text-evergreen">About ProFlow Home Services</h1>
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-xl font-semibold text-evergreen">Our Mission</h2>
            <p className="mt-2 text-slate">
              Deliver high-quality home services empowered by technology and professional craftsmanship.
            </p>
          </div>
          <div>
            <h2 className="heading text-xl font-semibold text-evergreen">Technology That Supports You</h2>
            <p className="mt-2 text-slate">
              ProFlow360™ powers scheduling, updates, estimates, and communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

