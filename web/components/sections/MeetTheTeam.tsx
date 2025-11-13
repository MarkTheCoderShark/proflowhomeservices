export default function MeetTheTeam() {
  const team = [
    {
      name: "Mark Johnson",
      role: "Founder & Owner",
      image: "/tech1.jpeg",
      bio: "With over 15 years in home services and remodeling, Mark founded ProFlow to bring transparency and professionalism to the industry. Licensed contractor and proud Sacramento resident."
    },
    {
      name: "Our Professional Crew",
      role: "Licensed Technicians & Craftsmen",
      image: "/tech2.jpeg",
      bio: "Our team of skilled professionals brings decades of combined experience in gutters, painting, handyman services, and full-scale remodeling. Every crew member is background-checked, trained, and committed to excellence."
    },
    {
      name: "ProFlow360™ Team",
      role: "Operations & Customer Support",
      image: "/techbytruck.jpeg",
      bio: "Behind every job is our dedicated operations team, ensuring seamless scheduling, clear communication, and real-time updates through our proprietary ProFlow360™ system."
    },
  ];

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            The people behind ProFlow—local professionals dedicated to serving your home with skill and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
              <div className="p-6">
                <h3 className="heading text-xl font-bold text-viridian-900">{member.name}</h3>
                <p className="text-viridian-600 font-semibold text-sm mt-1">{member.role}</p>
                <p className="mt-4 text-slate-700 leading-relaxed text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
