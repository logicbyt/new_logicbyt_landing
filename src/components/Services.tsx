import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";

export function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light/50 to-primary"></div>
      <div className="glow-orb w-72 h-72 bg-accent/30 top-1/4 -right-36"></div>
      <div className="glow-orb w-64 h-64 bg-secondary/30 bottom-1/4 -left-32"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{siteConfig.services.title.split(" ")[0]} </span>
            <span className="gradient-text">{siteConfig.services.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-white/60 max-w-2xl mx-auto">
            {siteConfig.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.items.map((service, index) => (
            <div
              key={service.id}
              className={`animate-on-scroll stagger-${(index % 6) + 1} glass-card rounded-3xl p-8 group`}
            >
              {/* Service Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-6xl font-bold text-white/5 group-hover:text-accent/10 transition-colors duration-500">
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:from-secondary/40 group-hover:to-accent/40 transition-all duration-500">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-sm text-white/50"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Line */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-white/40 group-hover:text-accent transition-colors duration-300"
                >
                  Saber más
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
