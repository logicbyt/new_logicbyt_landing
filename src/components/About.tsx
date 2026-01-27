import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 group"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
