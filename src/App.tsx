import {
  Navbar,
  Hero,
  Services,
  Projects,
  About,
  Technologies,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="relative">
      {/* Subtle noise overlay for texture */}
      <div className="noise-overlay"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Technologies />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
