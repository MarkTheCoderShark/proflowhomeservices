export default function BrandStory() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        {/* Who We Are */}
        <div className="mb-16">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900 mb-6">
            Who We Are
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              ProFlow Home Services is a local, family-owned business serving homeowners across Sacramento, Roseville,
              Rocklin, and the greater Northern California area. We're not just another contractor—we're your neighbors,
              committed to delivering exceptional home services and remodeling with honesty, skill, and respect.
            </p>
            <p>
              From gutter cleaning and painting to full kitchen and bathroom remodels, we handle every project with the
              same level of professionalism and attention to detail. What makes us unique is our combination of
              old-school craftsmanship and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 bg-mint_green-50 rounded-lg p-8 md:p-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              ProFlow was created to solve a problem we saw every day: homeowners frustrated by unreliable contractors,
              poor communication, and surprise costs. We knew there had to be a better way.
            </p>
            <p>
              We built ProFlow360™, our proprietary operations system, to bring transparency and accountability to
              home services. From the moment you request an estimate to the final walkthrough, you'll know exactly
              what's happening, when it's happening, and how much it costs.
            </p>
            <p>
              Today, we're proud to have served over 1,000 local homeowners, building not just beautiful spaces, but
              lasting relationships based on trust and quality work.
            </p>
          </div>
        </div>

        {/* What We Believe */}
        <div>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900 mb-6">
            What We Believe
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Reliability",
                desc: "We show up on time, every time, and deliver on our promises."
              },
              {
                title: "Clear Communication",
                desc: "No surprises, no hidden fees—just honest, transparent updates."
              },
              {
                title: "Fair Pricing",
                desc: "Quality work at competitive prices, with detailed estimates upfront."
              },
              {
                title: "Quality Craftsmanship",
                desc: "We take pride in every detail, treating your home like our own."
              },
              {
                title: "Clean Job Sites",
                desc: "We respect your space and leave it cleaner than we found it."
              },
              {
                title: "Tech-Enabled Service",
                desc: "ProFlow360™ keeps you informed with real-time scheduling and updates."
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border-2 border-mint_green-300 rounded-lg p-6">
                <h3 className="heading text-xl font-bold text-viridian-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
