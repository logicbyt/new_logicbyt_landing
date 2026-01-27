import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../site.config";
import { TechCard } from "./ui/TechEffects";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });
    alert("¡Mensaje enviado con éxito!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-primary-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,225,199,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,225,199,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-primary"></div>
      
      {/* Decorative orbs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px]"></div>
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[120px]"></div>

      {/* Connection line from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
        <div className="w-px h-16 bg-gradient-to-b from-accent/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Code tag header */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-white/10 mb-6">
              <span className="text-secondary font-mono text-sm">await</span>
              <span className="text-white/60 font-mono text-sm">contact.send(</span>
              <span className="text-accent font-mono text-sm">message</span>
              <span className="text-white/60 font-mono text-sm">)</span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{siteConfig.contact.title.split(" ").slice(0, 2).join(" ")} </span>
              <span className="gradient-text">{siteConfig.contact.title.split(" ").slice(2).join(" ")}</span>
            </h2>

            <p className="animate-on-scroll stagger-1 text-lg text-white/50 mb-8">
              <span className="text-white/30 font-mono">// </span>
              {siteConfig.contact.subtitle}
            </p>

            <p className="animate-on-scroll stagger-2 text-white/50 leading-relaxed mb-10 pl-4 border-l-2 border-accent/30">
              {siteConfig.contact.description}
            </p>

            {/* Contact Info - Terminal Style */}
            <TechCard className="p-6 mb-8">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-white/30 font-mono ml-2">contact-info.sh</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="animate-on-scroll stagger-3 flex items-center gap-3 text-white/60 hover:text-accent transition-colors duration-300 group"
                >
                  <span className="text-accent">$</span>
                  <span className="text-secondary">email</span>
                  <span className="text-white/30">=</span>
                  <span className="text-green-400 group-hover:underline">{siteConfig.contact.email}</span>
                </a>

                <a 
                  href={`https://wa.me/${siteConfig.contact.phone}`}
                  className="animate-on-scroll stagger-4 flex items-center gap-3 text-white/60 hover:text-accent transition-colors duration-300 group"
                >
                  <span className="text-accent">$</span>
                  <span className="text-secondary">phone</span>
                  <span className="text-white/30">=</span>
                  <span className="text-green-400 group-hover:underline">+{siteConfig.contact.phone}</span>
                </a>

                <div className="animate-on-scroll stagger-5 flex items-center gap-3 text-white/60">
                  <span className="text-accent">$</span>
                  <span className="text-secondary">location</span>
                  <span className="text-white/30">=</span>
                  <span className="text-green-400">{siteConfig.contact.address}</span>
                </div>
              </div>
            </TechCard>

            {/* Social Links */}
            <div className="animate-on-scroll stagger-6">
              <p className="text-sm text-white/30 mb-4 font-mono">
                <span className="text-accent">const</span> socialLinks <span className="text-white/30">=</span>
              </p>
              <div className="flex gap-3">
                {siteConfig.contact.social.map((social, index) => (
                    <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                    aria-label={social.platform}
                    >
                    {social.platform === "WhatsApp" && (
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    )}
                    {social.platform === "GitHub" && (
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {social.platform === "Instagram" && (
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll stagger-2">
            <TechCard className="p-8 md:p-10">
              {/* Form header - Terminal style */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-white/30 font-mono ml-2">new-message.form</span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-xs font-mono text-white/40 mb-2">
                      <span className="text-accent">const</span> name <span className="text-white/30">=</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.01]' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={siteConfig.contact.form.namePlaceholder}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm placeholder-white/20 focus:border-accent/50 focus:bg-black/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-accent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-xs font-mono text-white/40 mb-2">
                      <span className="text-accent">const</span> email <span className="text-white/30">=</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={siteConfig.contact.form.emailPlaceholder}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm placeholder-white/20 focus:border-accent/50 focus:bg-black/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-accent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-xs font-mono text-white/40 mb-2">
                      <span className="text-accent">const</span> company <span className="text-white/30">=</span> <span className="text-white/20">// optional</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'company' ? 'scale-[1.01]' : ''}`}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={siteConfig.contact.form.companyPlaceholder}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm placeholder-white/20 focus:border-accent/50 focus:bg-black/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                      {focusedField === 'company' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-accent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-xs font-mono text-white/40 mb-2">
                      <span className="text-accent">const</span> message <span className="text-white/30">=</span>
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={siteConfig.contact.form.messagePlaceholder}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white font-mono text-sm placeholder-white/20 focus:border-accent/50 focus:bg-black/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-4 px-6 bg-gradient-to-r from-accent to-secondary text-primary-dark font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>{siteConfig.contact.form.submitText}</span>
                        <span className="text-primary-dark/50">{">"}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </TechCard>
          </div>
        </div>
      </div>
    </section>
  );
}
