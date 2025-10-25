import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import FullpageScroll from "@/components/FullpageScroll";

const Index = () => {
  return (
    // FullpageScroll will handle wheel/keyboard snapping on desktop and keep native scrolling on mobile
    <FullpageScroll>
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
    </FullpageScroll>
  );
};

export default Index;
