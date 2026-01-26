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
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary-dark"></div>
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-accent/10 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-secondary/10 rotate-45 hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{siteConfig.about.title.split(" ")[0]} </span>
              <span className="gradient-text">{siteConfig.about.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            
            <p className="animate-on-scroll stagger-1 text-lg text-white/60 mb-8">
              {siteConfig.about.subtitle}
            </p>

            <p className="animate-on-scroll stagger-2 text-white/50 leading-relaxed mb-10">
              {siteConfig.about.description}
            </p>

            {/* Values */}
            <div className="animate-on-scroll stagger-3 flex flex-wrap gap-3">
              {siteConfig.about.values.map((value, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full glass-effect text-sm text-white/70 hover:text-white hover:border-accent/30 transition-all duration-300"
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
                className={`animate-on-scroll stagger-${index + 1} glass-card rounded-2xl p-6 group hover:border-accent/30`}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-accent font-bold group-hover:from-secondary/40 group-hover:to-accent/40 transition-all duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
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
                className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors duration-300 group"
              >
                <span>Conoce al equipo</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
