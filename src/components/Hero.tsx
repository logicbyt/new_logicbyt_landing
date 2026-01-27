import { useState, useEffect } from "react";
import { siteConfig } from "../site.config";

// Typewriter Hook
function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayText, isComplete, showCursor };
}

// Code Line Component
function CodeLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div 
      className="flex items-start gap-3 opacity-0 animate-fade-in-left"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <span className="text-white/20 select-none font-mono text-sm w-6 text-right shrink-0">
        {Math.floor(Math.random() * 90 + 10)}
      </span>
      <span className="font-mono text-sm">{children}</span>
    </div>
  );
}

export function Hero() {
  const { displayText: headlineText, isComplete: headlineComplete, showCursor } = useTypewriter(
    siteConfig.hero.headline,
    40,
    800
  );
  
  const { displayText: subheadlineText } = useTypewriter(
    siteConfig.hero.subheadline,
    50,
    headlineComplete ? 0 : 2500
  );

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark"
    >
      {/* Dark Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,225,199,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,225,199,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-transparent to-primary-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-primary-dark opacity-60"></div>
      
      {/* Animated Gradient Orbs - More subtle */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full filter blur-[150px]"></div>

      {/* Floating Code Snippets - Left */}
      <div className="absolute left-8 top-1/4 hidden xl:block opacity-40 hover:opacity-70 transition-opacity duration-500">
        <div className="glass-effect rounded-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          <CodeLine delay={1000}>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-300">buildFuture</span>{" "}
            <span className="text-white/60">=</span>{" "}
            <span className="text-yellow-300">async</span>{" "}
            <span className="text-white/60">{"() => {"}</span>
          </CodeLine>
          <CodeLine delay={1200}>
            <span className="text-white/40 ml-4">{"  "}</span>
            <span className="text-purple-400">await</span>{" "}
            <span className="text-blue-300">innovation</span>
            <span className="text-white/60">();</span>
          </CodeLine>
          <CodeLine delay={1400}>
            <span className="text-white/40 ml-4">{"  "}</span>
            <span className="text-purple-400">return</span>{" "}
            <span className="text-green-400">'success'</span>
            <span className="text-white/60">;</span>
          </CodeLine>
          <CodeLine delay={1600}>
            <span className="text-white/60">{"};"}</span>
          </CodeLine>
        </div>
      </div>

      {/* Floating Code Snippets - Right */}
      <div className="absolute right-8 bottom-1/3 hidden xl:block opacity-40 hover:opacity-70 transition-opacity duration-500">
        <div className="glass-effect rounded-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <CodeLine delay={1800}>
            <span className="text-pink-400">interface</span>{" "}
            <span className="text-yellow-300">Solution</span>{" "}
            <span className="text-white/60">{"{"}</span>
          </CodeLine>
          <CodeLine delay={2000}>
            <span className="text-white/40 ml-4">{"  "}</span>
            <span className="text-blue-300">quality</span>
            <span className="text-white/60">:</span>{" "}
            <span className="text-green-400">'exceptional'</span>
            <span className="text-white/60">;</span>
          </CodeLine>
          <CodeLine delay={2200}>
            <span className="text-white/40 ml-4">{"  "}</span>
            <span className="text-blue-300">innovation</span>
            <span className="text-white/60">:</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white/60">;</span>
          </CodeLine>
          <CodeLine delay={2400}>
            <span className="text-white/60">{"}"}</span>
          </CodeLine>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block"></div>
      <div className="absolute bottom-20 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/3 left-20 w-32 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-20 w-32 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent hidden lg:block"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Terminal-style Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-black/40 border border-white/10 mb-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-sm font-mono text-white/50">~/logicbyt</span>
            <span className="text-sm font-mono text-accent">$ {siteConfig.brand.tagline}_</span>
          </div>

          {/* Main Headline with Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-white">
              {headlineText}
              {!headlineComplete && (
                <span className={`inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              )}
            </span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span className="gradient-text">
              {subheadlineText}
              {headlineComplete && (
                <span className={`inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              )}
            </span>
          </h2>

          {/* Description with code styling */}
          <div 
            className={`max-w-3xl mx-auto mb-12 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              <span className="text-accent/80 font-mono">{"<"}</span>
              <span className="text-secondary font-mono">p</span>
              <span className="text-accent/80 font-mono">{">"}</span>
              {" "}{siteConfig.hero.description}{" "}
              <span className="text-accent/80 font-mono">{"</"}</span>
              <span className="text-secondary font-mono">p</span>
              <span className="text-accent/80 font-mono">{">"}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a href={siteConfig.hero.primaryCTA.href} className="group btn-primary text-base flex items-center gap-2">
              <span className="font-mono text-primary/60">{">"}</span>
              {siteConfig.hero.primaryCTA.text}
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href={siteConfig.hero.secondaryCTA.href} className="btn-secondary text-base font-mono">
              {siteConfig.hero.secondaryCTA.text}
            </a>
          </div>

          {/* Stats with code-style design */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {siteConfig.hero.stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-black/30 border border-white/5 rounded-xl p-6 text-center hover:border-accent/30 hover:bg-black/40 transition-all duration-300"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/30 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/30 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/30 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/30 rounded-br-lg"></div>
                
                <div className="text-3xl sm:text-4xl font-bold font-mono gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/40 font-mono">
                  // {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/30 hover:text-accent transition-colors duration-300 group">
            <span className="text-xs font-mono tracking-wider">scroll()</span>
            <div className="w-6 h-10 rounded-full border-2 border-current p-1 flex justify-center">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce-subtle"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-accent/10 animate-[scan_8s_linear_infinite]" style={{ top: '0%' }}></div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
