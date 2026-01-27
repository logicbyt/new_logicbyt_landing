import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../site.config";
import { TechCard } from "./ui/TechEffects";

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

  // Filter projects by category
  const filteredProjects = activeCategory === "Todos"
    ? siteConfig.projects.items
    : siteConfig.projects.items.filter((p) => p.category === activeCategory);

  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  // Open project viewer
  const openViewer = (project: typeof siteConfig.projects.items[0]) => {
    setSelectedProject(project);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close project viewer
  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Handle escape key
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
        className="relative py-24 md:py-32 overflow-hidden bg-primary-dark"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,225,199,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,225,199,0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary-dark"></div>
        
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px]"></div>

        {/* Connection line from previous section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
          <div className="w-px h-16 bg-gradient-to-b from-secondary/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Code tag */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
              <span className="text-accent font-mono text-sm">const</span>
              <span className="text-white/60 font-mono text-sm">portfolio</span>
              <span className="text-white/30 font-mono text-sm">=</span>
              <span className="text-secondary font-mono text-sm">projects.filter()</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">{siteConfig.projects.title.split(" ")[0]} </span>
              <span className="gradient-text">{siteConfig.projects.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="animate-on-scroll stagger-1 text-lg text-white/50 max-w-2xl mx-auto">
              <span className="text-white/30 font-mono">// </span>
              {siteConfig.projects.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="animate-on-scroll stagger-2 flex flex-wrap justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/30 border border-white/10">
              {siteConfig.projects.categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-accent to-secondary text-primary-dark shadow-lg shadow-accent/20"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {index === 0 && activeCategory === category && <span className="mr-1">{">"}</span>}
                  {category}
                </button>
              ))}
            </div>
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
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <TechCard className="overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-scan"></div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-accent/90 text-primary-dark text-xs font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary-dark rounded-full animate-pulse"></span>
                        Destacado
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-mono text-white/70">
                      {project.category}
                    </div>

                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-6 py-3 rounded-lg bg-black/60 backdrop-blur-md border border-accent/30 text-accent font-mono text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white/50">$</span>
                        view.project()
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3 font-mono text-xs">
                      <span className="text-white/40">{project.client}</span>
                      <span className="text-accent/70 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 text-xs font-mono text-white/50 bg-black/30 border border-white/5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-mono text-accent/70 bg-accent/10 border border-accent/20 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </TechCard>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-on-scroll text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <span className="text-lg text-white/60">¿Tienes un proyecto en mente?</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-primary-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all duration-300 font-mono"
              >
                <span>Hablemos</span>
                <span className="text-primary-dark/50">{">"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Viewer Modal */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isViewerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={closeViewer}
        ></div>

        {/* Modal Content */}
        {selectedProject && (
          <div
            className={`relative h-full overflow-y-auto transition-all duration-500 ${
              isViewerOpen ? "translate-y-0" : "translate-y-8"
            }`}
          >
            <div className="min-h-full py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={closeViewer}
                  className="fixed top-6 right-6 z-10 w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-sm">
                    <span className="px-4 py-1.5 rounded-md bg-accent/20 border border-accent/30 text-accent">
                      {selectedProject.category}
                    </span>
                    <span className="text-white/40">{selectedProject.client}</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/40 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-white/50 max-w-3xl">
                    <span className="text-white/30 font-mono">// </span>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Browser Mockup */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  {/* Browser Chrome - Terminal style */}
                  <div className="bg-black/80 px-4 py-3 flex items-center gap-4 border-b border-white/5">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 max-w-xl">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm text-white/50 font-mono truncate">{selectedProject.url}</span>
                      </div>
                    </div>
                    {/* Actions */}
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-mono hover:bg-accent/30 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visitar
                    </a>
                  </div>
                  {/* Browser Content */}
                  <div className="relative aspect-video bg-primary-dark">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Decorative Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {/* Results */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-white mb-4 font-mono flex items-center gap-2">
                      <span className="text-accent">{">"}</span>
                      Resultados Obtenidos
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <TechCard key={index} className="p-5 text-center">
                          <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300 font-mono">
                            {result.value}
                          </div>
                          <div className="text-sm text-white/50">{result.metric}</div>
                        </TechCard>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-mono flex items-center gap-2">
                      <span className="text-secondary">{">"}</span>
                      Tecnologías
                    </h3>
                    <TechCard className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 text-sm font-mono text-white/60 bg-black/30 border border-white/5 rounded-md hover:border-accent/30 hover:text-accent transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </TechCard>
                  </div>
                </div>

                {/* Navigation / CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={closeViewer}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-secondary text-primary-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 font-mono"
                  >
                    Iniciar un proyecto similar
                    <span className="text-primary-dark/50">{">"}</span>
                  </a>
                  <button
                    onClick={closeViewer}
                    className="text-white/40 hover:text-accent transition-colors duration-300 font-mono text-sm flex items-center gap-2"
                  >
                    <span className="text-white/20">{"<"}</span>
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
