import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Contacto
        </h2>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Consultas generales
          </h3>
          
          <a 
            href="mailto:contacto@artemina.mx"
            className="inline-flex items-center gap-3 text-xl text-accent hover:text-accent/80 transition-smooth group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-smooth" />
            <span>contacto@artemina.mx</span>
          </a>
          
          <div className="pt-8 text-muted-foreground">
            <p className="text-sm">Créditos: Mina</p>
          </div>
        </div>
      </div>
    </section>
  );
};
