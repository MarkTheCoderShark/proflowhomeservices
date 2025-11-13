export default function ProFlowStory() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
              The ProFlow Difference
            </h2>
            <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
              <p>
                We're a local, family-owned business serving homeowners across Sacramento, Roseville,
                Rocklin, and surrounding communities. From simple repairs to complete remodels, we bring
                the same commitment to every project: clean job sites, professional crews, and transparent communication.
              </p>
              <p>
                What sets us apart is our tech-enabled approach. ProFlow360™, our proprietary operations
                system, keeps you informed every step of the way—from initial estimate to project completion.
                You'll always know what's happening, when it's happening, and who's on your property.
              </p>
              <p>
                Whether you need your gutters cleaned, a room painted, or a full kitchen remodel, we're here
                to deliver quality work and build a long-term partnership with your home.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/tech1.jpeg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
