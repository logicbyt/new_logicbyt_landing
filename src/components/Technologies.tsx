import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";

export function Technologies() {
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
      id="technologies"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-dark"></div>
      <div className="glow-orb w-96 h-96 bg-secondary/20 top-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{siteConfig.technologies.title}</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-white/60 max-w-2xl mx-auto">
            {siteConfig.technologies.subtitle}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteConfig.technologies.categories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll stagger-${(index % 5) + 1} glass-card rounded-2xl p-6 text-center group`}
            >
              {/* Category Name */}
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
                {category.name}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-lg hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 md:mt-32">
          {/* Process Header */}
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{siteConfig.process.title.split(" ")[0]} </span>
              <span className="gradient-text">{siteConfig.process.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="animate-on-scroll stagger-1 text-lg text-white/60 max-w-2xl mx-auto">
              {siteConfig.process.subtitle}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div
                key={index}
                className={`animate-on-scroll stagger-${index + 1} relative group`}
              >
                {/* Connector Line (except last) */}
                {index < siteConfig.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent z-0"></div>
                )}

                <div className="glass-card rounded-2xl p-6 relative z-10 h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
