import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    // CSS-only fullpage scroll using native scroll-snap (no JS)
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <div className="min-h-screen snap-start flex items-center justify-center">
        <Hero />
      </div>

      <div className="min-h-screen snap-start flex items-center">
        <Introduction />
      </div>

      <div className="min-h-screen snap-start flex items-center">
        <About />
      </div>

      <div className="min-h-screen snap-start flex items-center">
        <Gallery />
      </div>

      <div className="min-h-screen snap-start flex items-center">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
