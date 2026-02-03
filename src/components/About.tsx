import { useEffect, useRef, useState, useCallback } from "react";
import { siteConfig } from "../site.config";
import { useTheme } from "../context/ThemeContext";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isDark } = useTheme();

  const openDialog = useCallback(() => {
    setIsDialogOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
    document.body.style.overflow = "";
  }, []);

  // Close dialog on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDialogOpen) {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDialogOpen, closeDialog]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if already in viewport
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative px-5 py-24 md:py-32 transition-colors duration-300 ${isDark ? "bg-primary" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className={`animate-on-scroll ${isVisible ? "visible" : ""} inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 ${isDark ? "bg-secondary/20 text-secondary" : "bg-primary/10 text-primary"}`}>
              Sobre Nosotros
            </span>
            <h2 className={`animate-on-scroll stagger-1 ${isVisible ? "visible" : ""} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
              {siteConfig.about.title}
            </h2>
            
            <p className={`animate-on-scroll stagger-2 ${isVisible ? "visible" : ""} text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {siteConfig.about.subtitle}
            </p>

            <p className={`animate-on-scroll stagger-3 ${isVisible ? "visible" : ""} leading-relaxed mb-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {siteConfig.about.description}
            </p>

            {/* Values */}
            <div className={`animate-on-scroll stagger-4 ${isVisible ? "visible" : ""} flex flex-wrap gap-3`}>
              {siteConfig.about.values.map((value, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm shadow-sm border transition-all duration-300 ${
                    isDark 
                      ? "bg-primary-light text-gray-300 border-primary-light hover:border-secondary/30 hover:text-secondary" 
                      : "bg-white text-gray-600 border-gray-100 hover:border-secondary/30 hover:text-secondary"
                  }`}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights Cards */}
          <div className="space-y-6">
            {siteConfig.about.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`animate-on-scroll stagger-${index + 1} ${isVisible ? "visible" : ""} rounded-2xl p-6 shadow-sm border group hover:shadow-md transition-all duration-300 ${
                  isDark 
                    ? "bg-primary-light/50 border-primary-light hover:border-secondary/20" 
                    : "bg-white border-gray-100 hover:border-secondary/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary font-bold group-hover:from-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 group-hover:text-secondary transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {highlight.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className={`animate-on-scroll stagger-4 ${isVisible ? "visible" : ""} pt-4`}>
              <button
                onClick={openDialog}
                className={`inline-flex items-center gap-3 transition-colors duration-300 group cursor-pointer ${isDark ? "text-accent hover:text-secondary" : "text-secondary hover:text-primary"}`}
              >
                <span>Conoce al equipo</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-dialog-title"
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 backdrop-blur-sm animate-fade-in ${isDark ? "bg-black/60" : "bg-primary/40"}`}
            onClick={closeDialog}
          />

          {/* Dialog Content */}
          <div className={`relative rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-scale-in ${isDark ? "bg-primary" : "bg-white"}`}>
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                isDark 
                  ? "bg-primary-light text-gray-300 hover:text-white hover:bg-primary-light/80" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700"
              }`}
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={siteConfig.equipo.foto}
                  alt={siteConfig.equipo.nombre}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 md:bg-gradient-to-r ${isDark ? "bg-gradient-to-t from-primary/40 to-transparent" : "bg-gradient-to-t from-primary/20 to-transparent"}`} />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-4 w-fit">
                  Nuestro Equipo
                </span>
                <h3
                  id="team-dialog-title"
                  className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {siteConfig.equipo.nombre}
                </h3>
                <p className={`leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {siteConfig.equipo.descripcion}
                </p>
                <a
                  href="#contact"
                  onClick={closeDialog}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white font-medium rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 w-fit"
                >
                  <span>Contáctanos</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
