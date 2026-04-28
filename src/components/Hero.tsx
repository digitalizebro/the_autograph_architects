import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Architecture background"
          className="w-full h-full object-cover scale-105"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-[#c9a84c]/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-[#c9a84c]/10 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.08] mb-6">
            Designing
            <br />
            Spaces That
            <br />
            <span className="italic text-[#c9a84c]">Define You</span>
          </h1>

          {/* Subheading moved BELOW heading */}
          <p className="text-s tracking-[0.3em] text-[#c9a84c] mb-6">
            Architect | Planner | Interior | Landscape
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
            Where architecture meets artistry. We craft spaces that inspire,
            function, and endure — turning your vision into reality with
            precision and elegance.
          </p>

          {/* Working globally ABOVE buttons */}
          <p className="mb-8 text-s tracking-[0.4em] text-[#c9a84c]">
            ••• Working Globally •••
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-outline text-white border-white/40 hover:bg-white hover:text-black">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}