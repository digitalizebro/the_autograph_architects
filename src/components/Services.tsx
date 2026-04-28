import { Building2, PaintBucket, Wrench, LayoutGrid, TreePine } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Architectural Design',
    description:
      'Residential and commercial architecture that balances form, function, and innovation — from concept to construction drawings.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description:
      'Thoughtfully curated interiors that reflect your personality, with meticulous attention to materials, color, and spatial harmony.',
  },
  {
    icon: Wrench,
    title: 'Turnkey Projects',
    description:
      'End-to-end project execution — from initial design through construction and finishing — delivered ready to move in.',
  },
  {
    icon: LayoutGrid,
    title: 'Space Planning',
    description:
      'Strategic space optimization that maximizes usability, flow, and comfort within any footprint or layout constraint.',
  },
  {
    icon: TreePine,
    title: 'Landscape Design',
    description:
      'Outdoor environments that complement your architecture — gardens, terraces, and green spaces designed to thrive.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <p className="section-subheading mb-4">What We Do</p>
          <h2 className="section-heading mb-6">Our Services</h2>
          <p className="text-[#777] leading-relaxed">
            From the first sketch to the final detail, we offer comprehensive
            design and execution services tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card group fade-up ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="icon-wrapper mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1a1a1a] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
