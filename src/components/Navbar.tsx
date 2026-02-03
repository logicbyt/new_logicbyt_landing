import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "../site.config";
import { useTheme } from "../context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

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
            ? isDark 
              ? "bg-primary/95 backdrop-blur-lg shadow-lg border-b border-primary-light/20"
              : "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <img 
                src={isDark ? siteConfig.brand.logobw : siteConfig.brand.logo} 
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
                    isDark 
                      ? "text-gray-300 hover:text-accent" 
                      : isScrolled 
                        ? "text-gray-600 hover:text-primary" 
                        : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right side: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? "bg-primary-light text-accent hover:bg-primary-light/80" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <a href="#contact" className="btn-primary text-sm">
                Contactar
              </a>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? "text-accent" 
                    : "text-gray-600"
                }`}
                aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`backdrop-blur-lg border-t px-4 py-2 ${
            isDark 
              ? "bg-primary/95 border-primary-light/20" 
              : "bg-white/95 border-gray-100"
          }`}>
            {siteConfig.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 py-3.5 transition-colors ${
                  isDark 
                    ? "text-gray-300 hover:text-accent" 
                    : "text-gray-600 hover:text-secondary"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-accent/40" : "bg-secondary/40"}`} />
                {item.label}
              </a>
            ))}
            <div className={`pt-4 pb-2 border-t mt-2 ${isDark ? "border-primary-light/20" : "border-gray-100"}`}>
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
