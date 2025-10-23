import minaImage from "@/assets/mina-01.jpg";

export const Introduction = () => {
  return (
    <section id="introduccion" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Mina Maldonado
            <span className="block text-2xl md:text-3xl font-light text-muted-foreground mt-2">
              Pintora Mexicana
            </span>
          </h2>
          
          <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
            <p>
              Bienvenido al mundo vibrante y emotivo de Mina Maldonado, una artista originaria de Zacatecas, cuya paleta se ha nutrido de la rica cultura mexicana y el realismo con toques de color. Mina ha dedicado parte de su vida a capturar la belleza de las personas a través de lienzos llenos de vida y color.
            </p>
            
            <p>
              Su obra es un diálogo entre la vivencia de la persona y la contemporaneidad, donde sus técnicas se fusionan con una visión moderna y personal. Cada pincelada es un reflejo de su pasión por la naturaleza, la figura humana y la esencia de la persona.
            </p>
            
            <p className="text-accent font-medium">
              Te invitamos a explorar su arte y a descubrir la magia que emana de cada una de sus creaciones.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-gold rounded-lg blur-2xl opacity-20" />
          <img 
            src={minaImage}
            alt="Obra de Mina Maldonado"
            className="relative rounded-lg shadow-soft w-full h-auto transition-smooth hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
