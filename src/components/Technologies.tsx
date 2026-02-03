import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../site.config";
import { useTheme } from "../context/ThemeContext";

export function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

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
      id="technologies"
      ref={sectionRef}
      className={`relative px-5 py-24 md:py-32 transition-colors duration-300 ${isDark ? "bg-primary-dark" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className={`animate-on-scroll ${isVisible ? "visible" : ""} inline-block px-4 py-2 text-accent text-sm font-medium rounded-full mb-4 ${isDark ? "bg-accent/20" : "bg-accent/10"}`}>
            Stack Tecnológico
          </span>
          <h2 className={`animate-on-scroll stagger-1 ${isVisible ? "visible" : ""} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            {siteConfig.technologies.title}
          </h2>
          <p className={`animate-on-scroll stagger-2 ${isVisible ? "visible" : ""} text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {siteConfig.technologies.subtitle}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteConfig.technologies.categories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll stagger-${(index % 5) + 1} ${isVisible ? "visible" : ""} rounded-2xl p-6 text-center group transition-all duration-300 border ${
                isDark 
                  ? "bg-primary border-primary-light hover:bg-primary-light/50 hover:shadow-lg" 
                  : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-lg"
              }`}
            >
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6">
                {category.name}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 cursor-default ${
                      isDark 
                        ? "text-gray-300 bg-primary-light border-primary-light hover:border-secondary/30 hover:text-secondary" 
                        : "text-gray-600 bg-white border-gray-200 hover:border-secondary/30 hover:text-secondary"
                    }`}
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
            <span className={`animate-on-scroll ${isVisible ? "visible" : ""} inline-block px-4 py-2 text-secondary text-sm font-medium rounded-full mb-4 ${isDark ? "bg-secondary/20" : "bg-secondary/10"}`}>
              Metodología
            </span>
            <h2 className={`animate-on-scroll stagger-1 ${isVisible ? "visible" : ""} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {siteConfig.process.title}
            </h2>
            <p className={`animate-on-scroll stagger-2 ${isVisible ? "visible" : ""} text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {siteConfig.process.subtitle}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className={`animate-on-scroll stagger-${index + 1} ${isVisible ? "visible" : ""} relative group`}>
                {index < siteConfig.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/20 to-transparent z-0"></div>
                )}

                <div className={`rounded-2xl p-6 relative z-10 h-full shadow-sm border group-hover:shadow-md transition-all duration-300 ${
                  isDark 
                    ? "bg-primary border-primary-light group-hover:border-secondary/20" 
                    : "bg-white border-gray-100 group-hover:border-secondary/20"
                }`}>
                  <div className="text-4xl font-bold text-secondary/60 mb-4 group-hover:text-secondary/40 transition-colors duration-300">
                    {step.number}
                  </div>

                  <h3 className={`text-lg font-semibold mb-3 group-hover:text-secondary transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
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
