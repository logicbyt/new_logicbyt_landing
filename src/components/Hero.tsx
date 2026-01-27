import { useState, useEffect } from "react";
import { siteConfig } from "../site.config";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full filter blur-[120px] animate-float"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "-3s" }}></div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-primary">{siteConfig.brand.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {siteConfig.hero.headline}
              <br />
              <span className="gradient-text">{siteConfig.hero.subheadline}</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              {siteConfig.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={siteConfig.hero.primaryCTA.href} className="btn-primary inline-flex items-center gap-2 group">
                {siteConfig.hero.primaryCTA.text}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href={siteConfig.hero.secondaryCTA.href} className="btn-secondary">
                {siteConfig.hero.secondaryCTA.text}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {siteConfig.hero.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main visual card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">
                {/* Browser mockup header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="h-6 bg-gray-100 rounded-md max-w-[200px]"></div>
                  </div>
                </div>
                
                {/* Code preview */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-300 w-6 text-right">1</span>
                    <span><span className="text-purple-500">const</span> <span className="text-blue-600">proyecto</span> = <span className="text-orange-500">await</span> <span className="text-emerald-600">crear</span>();</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-300 w-6 text-right">2</span>
                    <span><span className="text-purple-500">const</span> <span className="text-blue-600">exito</span> = <span className="text-emerald-600">innovar</span>(<span className="text-amber-600">ideas</span>);</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-300 w-6 text-right">3</span>
                    <span className="text-gray-400">// Tu visión, nuestra tecnología</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-300 w-6 text-right">4</span>
                    <span><span className="text-purple-500">return</span> <span className="text-green-600">'resultados'</span>;</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-secondary to-accent p-4 rounded-2xl shadow-lg shadow-secondary/25 animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 animate-float" style={{ animationDelay: "-2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Proyecto entregado</div>
                    <div className="text-xs text-gray-500">Hace 2 minutos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <a href="#services" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors">
            <span className="text-xs tracking-wider uppercase">Descubre más</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-1">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce-subtle"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
