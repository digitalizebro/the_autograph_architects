import { CheckCircle2 } from 'lucide-react';

const strengths = [
  {
    title: 'High-Quality Design Within Budget',
    description: 'Premium aesthetics and execution without the premium price tag.',
  },
  {
    title: 'Client-Focused Planning Approach',
    description: 'Every decision is guided by your needs, lifestyle, and aspirations.',
  },
  {
    title: 'Modern & Functional Aesthetics',
    description: 'Designs that are visually striking and practically livable.',
  },
  {
    title: 'End-to-End Project Execution',
    description: 'From concept to completion — one team, one vision, zero hassle.',
  },
  {
    title: 'Global Design Perspective',
    description: 'International design sensibility adapted to local context and climate.',
  },
  {
    title: 'Detail-Oriented Craftsmanship',
    description: 'Every joint, finish, and material chosen with intention and care.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <p className="section-subheading mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Why Choose{' '}
            <span className="gold-gradient">The Autograph</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We don't just design spaces — we build relationships, deliver
            promises, and create environments that stand the test of time.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className="fade-up p-6 rounded-sm border border-white/10
                         hover:border-[#c9a84c]/40 transition-all duration-500
                         hover:bg-white/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <CheckCircle2
                size={22}
                className="text-[#c9a84c] mb-4"
              />
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
