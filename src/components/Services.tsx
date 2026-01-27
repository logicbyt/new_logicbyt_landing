import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";
import { TechCard, CodeListItem, CircuitPattern } from "./ui/TechEffects";

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
      className="relative py-24 md:py-32 overflow-hidden bg-primary-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,225,199,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,225,199,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <CircuitPattern />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-transparent to-primary-dark"></div>
      
      {/* Glowing orbs - more subtle */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-secondary/10 rounded-full filter blur-[100px]"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-accent/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-secondary/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Code tag */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
            <span className="text-accent font-mono text-sm">{"<"}</span>
            <span className="text-white/60 font-mono text-sm">services</span>
            <span className="text-accent font-mono text-sm">{"/>"}</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{siteConfig.services.title.split(" ")[0]} </span>
            <span className="gradient-text">{siteConfig.services.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-white/50 max-w-2xl mx-auto">
            <span className="text-white/30 font-mono">// </span>
            {siteConfig.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.items.map((service, index) => (
            <div
              key={service.id}
              className={`animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <TechCard className="p-8 h-full" glow>
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  {/* Terminal-style number */}
                  <div className="flex items-center gap-2">
                    <span className="text-accent/50 font-mono text-xs">$</span>
                    <span className="text-white/30 font-mono text-sm">service[{service.id - 1}]</span>
                  </div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features with code style */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <CodeListItem key={fIndex} index={fIndex}>
                      {feature}
                    </CodeListItem>
                  ))}
                </ul>

                {/* Hover action */}
                <div className="pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm text-white/40 group-hover:text-accent transition-colors duration-300 font-mono"
                  >
                    <span className="text-accent/50">→</span>
                    getInfo()
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
              </TechCard>
            </div>
          ))}
        </div>

        {/* Bottom connector */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-accent/30 to-transparent"></div>
            <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
