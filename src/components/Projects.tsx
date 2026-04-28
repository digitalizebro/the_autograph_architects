const projects = [
  {
    title: 'Modern Residence',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Corporate Office',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Luxury Villa Interior',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Urban Townhouse',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Boutique Retail Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Garden Landscape',
    category: 'Landscape',
    image: 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <p className="section-subheading mb-4">Portfolio</p>
          <h2 className="section-heading mb-6">Featured Projects</h2>
          <p className="text-[#777] leading-relaxed">
            A curated selection of our work — each project a testament to our
            commitment to design excellence and client satisfaction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card group aspect-[4/3] fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="overlay">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
