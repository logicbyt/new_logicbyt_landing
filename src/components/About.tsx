import { useEffect, useRef, useState, useCallback } from "react";
import { siteConfig } from "../site.config";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="animate-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {siteConfig.about.title}
            </h2>
            
            <p className="animate-on-scroll stagger-2 text-lg text-gray-600 mb-8">
              {siteConfig.about.subtitle}
            </p>

            <p className="animate-on-scroll stagger-3 text-gray-500 leading-relaxed mb-10">
              {siteConfig.about.description}
            </p>

            {/* Values */}
            <div className="animate-on-scroll stagger-4 flex flex-wrap gap-3">
              {siteConfig.about.values.map((value, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white text-sm text-gray-600 shadow-sm border border-gray-100 hover:border-secondary/30 hover:text-secondary transition-all duration-300"
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
                className={`animate-on-scroll stagger-${index + 1} bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group hover:shadow-md hover:border-secondary/20 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary font-bold group-hover:from-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="animate-on-scroll stagger-4 pt-4">
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 group cursor-pointer"
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
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-fade-in"
            onClick={closeDialog}
          />

          {/* Dialog Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-scale-in">
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-300 cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-4 w-fit">
                  Nuestro Equipo
                </span>
                <h3
                  id="team-dialog-title"
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                >
                  {siteConfig.equipo.nombre}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
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
