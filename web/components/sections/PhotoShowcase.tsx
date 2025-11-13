export default function PhotoShowcase() {
  const photos = [
    { image: "/tech1.jpeg", caption: "Our Professional Team" },
    { image: "/tech2.jpeg", caption: "Ready to Serve" },
    { image: "/techbytruck.jpeg", caption: "ProFlow Fleet" },
    { image: "/remodel-kitchen.jpeg", caption: "Quality Craftsmanship" },
    { image: "/bathroom.jpeg", caption: "Attention to Detail" },
    { image: "/lvp-flooring.jpeg", caption: "Beautiful Results" },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Behind the Scenes
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Real photos from real projects—see our team in action and the quality we deliver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${photo.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
