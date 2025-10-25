import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    // Parent container handles the vertical snapping between full-screen sections
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <section className="h-screen snap-start">
        <Hero />
      </section>

      <section className="h-screen snap-start">
        <Introduction />
      </section>

      <section className="h-screen snap-start">
        <About />
      </section>

      <section className="h-screen snap-start">
        <Gallery />
      </section>

      <section className="h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
