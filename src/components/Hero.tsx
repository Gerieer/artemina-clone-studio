import { Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://new.express.adobe.com/webpage/R3TE2is8Z0WlV/resources/758c6651-cafd-4e47-a30e-232a3a2b45c6-mina_01_jpg?asset_id=0cee98ad-0ef5-4749-a43e-267587be3e55&img_etag=%227e67c7f0daba4129baaf4911c88f8da5%22&image_assets=false&size=1024")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
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
