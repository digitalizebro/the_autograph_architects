import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "./images/logo-transparent.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home">
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                scrolled ? "text-[#4a4a4a]" : "text-white"
              } hover:text-[#c9a84c]`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-[#c9a84c] text-white rounded-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔥 BACKDROP */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}

      {/* 🔥 MOBILE MENU PANEL */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-8 mt-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-lg font-medium text-[#1a1a1a] hover:text-[#c9a84c]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-6 px-6 py-3 bg-[#c9a84c] text-white text-center rounded-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}