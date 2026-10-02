import { useEffect, Component } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";
import siteContent from "@/config/siteContent";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { err: false };
  }
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err) {
      return (
        <div className="min-h-screen bg-ink text-paper font-sans flex items-center justify-center p-8 text-center">
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ErrorBoundary>
      <div id="top" className="bg-ink font-sans text-paper antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Approach />
          <Services />
          <Journey />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-center" richColors={false} toastOptions={{ style: { background: "#14171E", border: "1px solid rgba(197,160,89,0.3)", color: "#F9F8F6" } }} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
