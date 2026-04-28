import { Award, TrendingDown, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 🔥 HEADER (same as Services) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg md:text-xl font-medium tracking-[0.25em] text-[#c9a84c] mb-4 uppercase">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6">
            Crafting Spaces With
            <br />
            <span className="text-[#c9a84c] italic">
              Purpose & Passion
            </span>
          </h2>
        </div>

        {/* 🔥 CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left: Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="Modern architecture"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </div>

          {/* Right: Details */}
          <div>
            <p className="text-[#5a5a5a] leading-relaxed mb-6">
              The Autograph Architects is a private architectural design firm
              based in Burhanpur, Madhya Pradesh, specializing in residential
              and commercial planning, interior design, and turnkey projects.
              We believe that great design should be accessible — delivering
              high-quality, detail-oriented work while respecting your budget.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed mb-10">
              Our approach combines creativity, functionality, and
              cost-efficiency to bring ideas to life. Every project is a
              collaboration — we listen, plan, and execute with precision to
              ensure the final result exceeds expectations.
            </p>

            {/* Features */}
            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Quality Without Compromise
                  </h4>
                  <p className="text-sm text-[#777]">
                    Premium design delivered within your budget
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <TrendingDown size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Budget-Focused Planning
                  </h4>
                  <p className="text-sm text-[#777]">
                    Smart solutions that maximize every rupee
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Client-First Approach
                  </h4>
                  <p className="text-sm text-[#777]">
                    Your vision, our expertise — a true partnership
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}