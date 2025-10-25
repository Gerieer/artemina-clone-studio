import { Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.png')" }}>
        {/* overlay to improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
          MINA MALDONADO
        </h1>
        <div className="w-32 h-1 bg-secondary mx-auto mb-6" />
        <p className="text-2xl md:text-3xl text-white font-light tracking-wide drop-shadow-lg">
          PINTORA MEXICANA CONTEMPORÁNEA
        </p>
        
        <a 
          href="http://www.instagram.com/arte_minna" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-full hover:bg-white/20 transition-smooth shadow-gold"
        >
          <Instagram className="w-5 h-5" />
          <span>@arte_minna</span>
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
