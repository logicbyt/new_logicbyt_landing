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
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="animate-on-scroll inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Stack Tecnológico
          </span>
          <h2 className="animate-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {siteConfig.technologies.title}
          </h2>
          <p className="animate-on-scroll stagger-2 text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.technologies.subtitle}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteConfig.technologies.categories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll stagger-${(index % 5) + 1} bg-gray-50 rounded-2xl p-6 text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100`}
            >
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6">
                {category.name}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:border-secondary/30 hover:text-secondary transition-all duration-300 cursor-default"
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
          <div className="text-center mb-16">
            <span className="animate-on-scroll inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
              Metodología
            </span>
            <h2 className="animate-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {siteConfig.process.title}
            </h2>
            <p className="animate-on-scroll stagger-2 text-lg text-gray-600 max-w-2xl mx-auto">
              {siteConfig.process.subtitle}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className={`animate-on-scroll stagger-${index + 1} relative group`}>
                {index < siteConfig.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/20 to-transparent z-0"></div>
                )}

                <div className="bg-white rounded-2xl p-6 relative z-10 h-full shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-secondary/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary/20 mb-4 group-hover:text-secondary/40 transition-colors duration-300">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
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
