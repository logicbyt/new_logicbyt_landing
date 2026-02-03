import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "../site.config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <img 
                src={siteConfig.brand.logo} 
                alt={siteConfig.brand.name}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? "text-gray-600 hover:text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contact" className="btn-primary text-sm">
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg text-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-2">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center gap-3 py-3.5 text-gray-600 hover:text-secondary transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="btn-primary text-sm w-full text-center block"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
