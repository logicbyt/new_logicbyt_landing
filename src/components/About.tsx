import { useEffect, useRef } from "react";
import { siteConfig } from "../site.config";
import { TechCard, TerminalBlock } from "./ui/TechEffects";

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
      className="relative py-24 md:py-32 overflow-hidden bg-primary"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,163,223,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(52,163,223,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-transparent to-primary-dark"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-accent/10 rounded-full hidden lg:block animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-secondary/10 hidden lg:block animate-[spin_15s_linear_infinite_reverse]"></div>
      
      {/* Connection lines */}
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Code tag */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
              <span className="text-secondary font-mono text-sm">{"<"}</span>
              <span className="text-white/60 font-mono text-sm">about</span>
              <span className="text-secondary font-mono text-sm">{"/>"}</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{siteConfig.about.title.split(" ")[0]} </span>
              <span className="gradient-text">{siteConfig.about.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            
            <p className="animate-on-scroll stagger-1 text-lg text-white/60 mb-8">
              <span className="text-white/30 font-mono">// </span>
              {siteConfig.about.subtitle}
            </p>

            <p className="animate-on-scroll stagger-2 text-white/50 leading-relaxed mb-10">
              {siteConfig.about.description}
            </p>

            {/* Values with code style */}
            <div className="animate-on-scroll stagger-3">
              <TerminalBlock title="values.config">
                <div className="space-y-2">
                  {siteConfig.about.values.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-accent">→</span>
                      <span className="text-white/70">{value}</span>
                    </div>
                  ))}
                </div>
              </TerminalBlock>
            </div>
          </div>

          {/* Right Content - Highlights Cards */}
          <div className="space-y-6">
            {siteConfig.about.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`animate-on-scroll stagger-${index + 1}`}
              >
                <TechCard className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Number with terminal style */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-black/40 border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                      <span className="text-accent font-mono font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
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
                  
                  {/* Progress bar decoration */}
                  <div className="mt-4 h-1 bg-black/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{ width: `${(index + 1) * 33}%` }}
                    ></div>
                  </div>
                </TechCard>
              </div>
            ))}

            {/* CTA */}
            <div className="animate-on-scroll stagger-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors duration-300 group font-mono"
              >
                <span className="text-white/40">$</span>
                <span>team.connect()</span>
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
