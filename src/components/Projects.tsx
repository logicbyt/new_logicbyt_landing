import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../site.config";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof siteConfig.projects.items[0] | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const filteredProjects = activeCategory === "Todos"
    ? siteConfig.projects.items
    : siteConfig.projects.items.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  const openViewer = (project: typeof siteConfig.projects.items[0]) => {
    setSelectedProject(project);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-24 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="animate-on-scroll inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Portafolio
            </span>
            <h2 className="animate-on-scroll stagger-1 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {siteConfig.projects.title}
            </h2>
            <p className="animate-on-scroll stagger-2 text-lg text-gray-600 max-w-2xl mx-auto">
              {siteConfig.projects.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="animate-on-scroll stagger-2 flex flex-wrap justify-center gap-3 mb-12">
            {siteConfig.projects.categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div 
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openViewer(project)}
                style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                        Destacado
                      </div>
                    )}

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-700">
                      {project.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-5 py-2.5 rounded-full bg-white text-primary font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver Proyecto
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-400">{project.client}</span>
                      <span className="text-xs text-secondary font-medium">{project.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tIndex) => (
                        <span key={tIndex} className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-md">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-on-scroll text-center mt-12">
            <a href="#contact" className="inline-flex items-center gap-3 text-gray-600 hover:text-primary transition-colors duration-300 group">
              <span className="text-lg">¿Tienes un proyecto en mente?</span>
              <span className="btn-primary text-sm">Hablemos</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Viewer Modal */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isViewerOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={closeViewer}></div>

        {selectedProject && (
          <div className={`relative h-full overflow-y-auto transition-all duration-500 ${isViewerOpen ? "translate-y-0" : "translate-y-8"}`}>
            <div className="min-h-full py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={closeViewer}
                  className="fixed top-6 right-6 z-10 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-400 text-sm">{selectedProject.client}</span>
                    <span className="text-gray-300 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{selectedProject.year}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Browser Mockup */}
                <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 max-w-xl">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm text-gray-500 truncate">{selectedProject.url}</span>
                      </div>
                    </div>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-white text-sm font-medium hover:bg-secondary/90 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visitar
                    </a>
                  </div>
                  <div className="relative aspect-video bg-gray-50">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultados Obtenidos</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-secondary/30 transition-colors duration-300">
                          <div className="text-3xl font-bold text-secondary mb-1">{result.value}</div>
                          <div className="text-sm text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías</h3>
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:border-secondary/30 hover:text-secondary transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation / CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
                  <a href="#contact" onClick={closeViewer} className="btn-primary text-base">
                    Iniciar un proyecto similar
                    <svg className="inline-block w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <button onClick={closeViewer} className="text-gray-400 hover:text-gray-700 transition-colors duration-300">
                    Volver al portafolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
