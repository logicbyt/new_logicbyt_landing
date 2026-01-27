// Shared UI components for tech effects across the landing

import { useEffect, useState, useRef } from "react";

// Section Divider with animated circuit lines
export function SectionDivider({ variant = "default" }: { variant?: "default" | "accent" | "reverse" }) {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`circuit-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor={variant === "accent" ? "#22e1c7" : "#34a3df"} stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Horizontal Lines */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke={`url(#circuit-gradient-${variant})`} strokeWidth="1" />
        {/* Animated dot */}
        <circle r="3" fill={variant === "accent" ? "#22e1c7" : "#34a3df"}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M0,48 L1920,48" />
        </circle>
      </svg>
      {/* Center Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`w-3 h-3 rounded-full ${variant === "accent" ? "bg-accent" : "bg-secondary"} animate-pulse`} />
        <div className={`absolute inset-0 w-3 h-3 rounded-full ${variant === "accent" ? "bg-accent" : "bg-secondary"} animate-ping opacity-30`} />
      </div>
    </div>
  );
}

// Animated Section Header with code style
export function SectionHeader({ 
  title, 
  subtitle, 
  tag,
  align = "center" 
}: { 
  title: string; 
  subtitle?: string;
  tag?: string;
  align?: "center" | "left";
}) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6 ${align === "center" ? "" : ""}`}>
          <span className="text-accent font-mono text-sm">{"<"}</span>
          <span className="text-white/60 font-mono text-sm">{tag}</span>
          <span className="text-accent font-mono text-sm">{"/>"}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="text-white">{firstWord} </span>
        <span className="gradient-text">{restWords}</span>
      </h2>
      {subtitle && (
        <p className={`text-lg text-white/50 ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          <span className="text-white/30 font-mono">// </span>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Tech Card with corner decorations
export function TechCard({ 
  children, 
  className = "",
  hover = true,
  glow = false
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
  glow?: boolean;
}) {
  return (
    <div className={`
      relative bg-black/30 border border-white/5 rounded-2xl 
      ${hover ? "hover:border-accent/30 hover:bg-black/40" : ""}
      transition-all duration-300 group
      ${glow ? "hover:shadow-lg hover:shadow-accent/10" : ""}
      ${className}
    `}>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/20 rounded-tl-2xl group-hover:border-accent/50 transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/20 rounded-tr-2xl group-hover:border-accent/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/20 rounded-bl-2xl group-hover:border-accent/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/20 rounded-br-2xl group-hover:border-accent/50 transition-colors" />
      {children}
    </div>
  );
}

// Animated counter for stats
export function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Extract number from value
          const numMatch = value.match(/(\d+)/);
          if (numMatch) {
            const targetNum = parseInt(numMatch[1]);
            const prefix = value.split(numMatch[1])[0];
            const suffix = value.split(numMatch[1])[1];
            const startTime = performance.now();
            
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeOut * targetNum);
              setDisplayValue(`${prefix}${current}${suffix}`);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{displayValue}</span>;
}

// Code-style list item
export function CodeListItem({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <li className="flex items-center gap-3 text-sm text-white/50 group/item hover:text-white/70 transition-colors">
      <span className="text-accent/50 font-mono text-xs group-hover/item:text-accent transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover/item:bg-accent transition-colors" />
      {children}
    </li>
  );
}

// Terminal-style text block
export function TerminalBlock({ children, title = "terminal" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-black/30 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs font-mono text-white/30">{title}</span>
      </div>
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}

// Glowing line connector
export function GlowingConnector({ direction = "horizontal" }: { direction?: "horizontal" | "vertical" }) {
  return direction === "horizontal" ? (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
  ) : (
    <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
  );
}

// Floating particles background
export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// Matrix-style falling code effect (subtle)
export function MatrixRain({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 text-accent font-mono text-xs animate-[fall_10s_linear_infinite]"
          style={{
            left: `${i * 10 + 5}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {[...Array(20)].map((_, j) => (
            <div key={j} className="opacity-50">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}

// Circuit board pattern background
export function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 H40 M60 50 H100 M50 0 V40 M50 60 V100" stroke="#22e1c7" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="3" fill="none" stroke="#22e1c7" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="1" fill="#22e1c7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
