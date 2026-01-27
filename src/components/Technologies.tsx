import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";
import { TechCard } from "./ui/TechEffects";

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
      className="relative py-24 md:py-32 overflow-hidden bg-primary-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,225,199,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,225,199,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary-dark"></div>
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full filter blur-[150px]"></div>

      {/* Connection line from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
        <div className="w-px h-16 bg-gradient-to-b from-accent/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Code tag */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
            <span className="text-accent font-mono text-sm">import</span>
            <span className="text-white/60 font-mono text-sm">{"{ technologies }"}</span>
            <span className="text-accent font-mono text-sm">from</span>
            <span className="text-green-400 font-mono text-sm">'@stack'</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{siteConfig.technologies.title}</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-white/50 max-w-2xl mx-auto">
            <span className="text-white/30 font-mono">// </span>
            {siteConfig.technologies.subtitle}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteConfig.technologies.categories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll stagger-${(index % 5) + 1}`}
            >
              <TechCard className="p-6 text-center h-full">
                {/* Category Name with bracket style */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-accent/50 font-mono text-sm">{"["}</span>
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider font-mono">
                    {category.name}
                  </h3>
                  <span className="text-accent/50 font-mono text-sm">{"]"}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {category.techs.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1.5 text-xs font-mono text-white/60 bg-black/30 border border-white/5 rounded-lg hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TechCard>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 md:mt-32">
          {/* Connection line */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
              <div className="w-3 h-3 bg-secondary/50 rounded-full animate-pulse"></div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Process Header */}
          <div className="text-center mb-16">
            {/* Code tag */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
              <span className="text-secondary font-mono text-sm">async</span>
              <span className="text-white/60 font-mono text-sm">workflow()</span>
              <span className="text-white/40 font-mono text-sm">{"{"}</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{siteConfig.process.title.split(" ")[0]} </span>
              <span className="gradient-text">{siteConfig.process.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="animate-on-scroll stagger-1 text-lg text-white/50 max-w-2xl mx-auto">
              <span className="text-white/30 font-mono">// </span>
              {siteConfig.process.subtitle}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div
                key={index}
                className={`animate-on-scroll stagger-${index + 1} relative`}
              >
                {/* Connector Line (except last) */}
                {index < siteConfig.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px z-0">
                    <div className="h-full bg-gradient-to-r from-accent/30 via-accent/10 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent/30 rounded-full"></div>
                  </div>
                )}

                <TechCard className="p-6 relative z-10 h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold font-mono gradient-text group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent"></div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300 font-mono">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Status indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-white/30">ready</span>
                  </div>
                </TechCard>
              </div>
            ))}
          </div>
          
          {/* Closing bracket */}
          <div className="mt-8 text-center">
            <span className="text-white/40 font-mono text-sm">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
