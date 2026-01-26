import { siteConfig } from "../site.config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Animated Orbs */}
      <div className="glow-orb w-96 h-96 bg-secondary top-20 -left-48 animate-float"></div>
      <div className="glow-orb w-80 h-80 bg-accent bottom-20 -right-40 animate-float" style={{ animationDelay: "-3s" }}></div>
      <div className="glow-orb w-64 h-64 bg-secondary/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "-1.5s" }}></div>

      {/* Geometric Decorations */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/20 rotate-45 animate-bounce-subtle hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-secondary/20 rounded-full animate-bounce-subtle hidden lg:block" style={{ animationDelay: "-1s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-glow hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm text-white/80">{siteConfig.brand.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">{siteConfig.hero.headline}</span>
            <br />
            <span className="gradient-text">{siteConfig.hero.subheadline}</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.2s" }}>
            {siteConfig.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ animationDelay: "0.4s" }}>
            <a href={siteConfig.hero.primaryCTA.href} className="btn-primary text-base">
              {siteConfig.hero.primaryCTA.text}
              <svg className="inline-block w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href={siteConfig.hero.secondaryCTA.href} className="btn-secondary text-base">
              {siteConfig.hero.secondaryCTA.text}
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" style={{ animationDelay: "0.6s" }}>
            {siteConfig.hero.stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
