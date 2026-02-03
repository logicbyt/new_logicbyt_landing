import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../site.config";
import { useTheme } from "../context/ThemeContext";

export function Services() {
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

  const serviceIcons = [
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`relative px-5 py-24 md:py-32 transition-colors duration-300 ${isDark ? "bg-primary" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className={`animate-on-scroll ${isVisible ? "visible" : ""} inline-block px-4 py-2 text-secondary text-sm font-medium rounded-full mb-4 ${isDark ? "bg-secondary/20" : "bg-secondary/10"}`}>
            Nuestros Servicios
          </span>
          <h2 className={`animate-on-scroll stagger-1 ${isVisible ? "visible" : ""} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            {siteConfig.services.title}
          </h2>
          <p className={`animate-on-scroll stagger-2 ${isVisible ? "visible" : ""} text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {siteConfig.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.items.map((service, index) => (
            <div
              key={service.id}
              className={`animate-on-scroll stagger-${(index % 6) + 1} ${isVisible ? "visible" : ""} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border ${
                isDark 
                  ? "bg-primary-light/50 border-primary-light hover:border-secondary/30" 
                  : "bg-white border-gray-100 hover:border-secondary/20"
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary mb-6 group-hover:from-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                {serviceIcons[index % serviceIcons.length]}
              </div>

              {/* Service Title */}
              <h3 className={`text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-center gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className={`mt-8 pt-6 border-t ${isDark ? "border-primary-light" : "border-gray-100"}`}>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm group-hover:text-secondary transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-400"}`}
                >
                  Saber más
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
