import { Instagram, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="slide-left">
            <p className="section-subheading mb-4">Get in Touch</p>
            <h2 className="section-heading mb-6">
              Let's Create Something
              <br />
              <span className="gold-gradient">Extraordinary</span>
            </h2>
            <p className="text-[#5a5a5a] leading-relaxed mb-8">
              Whether you're planning a new home, redesigning your office, or
              dreaming of the perfect landscape — we'd love to hear from you.
              Reach out and let's start the conversation.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#c9a84c]/10 rounded-sm">
                  <MapPin size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-sm text-[#999]">Location</p>
                  <p className="text-[#1a1a1a] font-medium">
                    Burhanpur, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#c9a84c]/10 rounded-sm">
                  <Instagram size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-sm text-[#999]">Follow Us</p>
                  <p className="text-[#1a1a1a] font-medium">
                    @the_autograph_architects
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/the_autograph_architects/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Instagram size={18} />
              Visit Instagram Page
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: Visual / CTA Card */}
          <div className="slide-right">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/221538/pexels-photo-221538.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Architecture detail"
                className="w-full h-[480px] object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent rounded-sm" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-2">
                  Ready to start?
                </p>
                <p className="text-white font-['Playfair_Display'] text-2xl font-semibold leading-snug">
                  Every great space begins with a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
