import { Instagram, ArrowUp } from "lucide-react";
import logo from "./images/logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
          <div className="mb-4 inline-block bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md shadow-md">
            <img
              src={logo}
              alt="The Autograph Architects"
              className="h-10 w-auto"
            />
          </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Architect | Planner | Interior | Landscape — designing spaces
              that define you, globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-gray-400 hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4">
              Connect
            </h4>

            <a
              href="https://www.instagram.com/the_autograph_architects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors duration-300 mb-4"
            >
              <Instagram size={18} />
              @the_autograph_architects
            </a>

            <p className="text-sm text-gray-400">
              Burhanpur, Madhya Pradesh, India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} The Autograph Architects. All
            rights reserved.
          </p>

          <a
            href="#home"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm
                       hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-gray-400"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}