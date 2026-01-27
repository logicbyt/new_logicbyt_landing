import { useState, useEffect } from "react";
import { siteConfig } from "../site.config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = siteConfig.navigation.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img 
                src={siteConfig.brand.logobw} 
                alt={siteConfig.brand.name}
                className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 rounded-lg filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 border border-white/10">
            {siteConfig.navigation.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive 
                      ? "text-accent bg-accent/10" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10 font-mono">{item.label}</span>
                  {isActive && (
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-accent to-secondary text-primary-dark font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 inline-flex items-center gap-2"
            >
              <span className="font-mono">Contactar</span>
              <span className="text-primary-dark/50 group-hover:translate-x-1 transition-transform">{">"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 bg-accent" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-accent" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 py-6">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs text-white/30 font-mono ml-2">navigation.menu</span>
          </div>
          
          {siteConfig.navigation.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-3 transition-colors duration-300 border-b border-white/5 last:border-0 font-mono ${
                  isActive ? "text-accent" : "text-white/60 hover:text-accent"
                }`}
              >
                <span className="text-accent/50">$</span>
                <span>{item.label}</span>
                {isActive && <span className="ml-auto text-xs text-accent/50">← current</span>}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 w-full py-3 bg-gradient-to-r from-accent to-secondary text-primary-dark font-bold text-sm rounded-lg text-center inline-flex items-center justify-center gap-2 font-mono"
          >
            <span>Contactar</span>
            <span className="text-primary-dark/50">{">"}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
