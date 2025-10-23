interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    image: string;
    technique: string;
    description: string;
  };
  reverse?: boolean;
}

export const ArtworkCard = ({ artwork, reverse = false }: ArtworkCardProps) => {
  return (
    <div 
      id={artwork.id}
      className={`grid md:grid-cols-2 gap-8 items-start ${reverse ? 'md:grid-flow-dense' : ''}`}
    >
      <div className={`space-y-4 ${reverse ? 'md:col-start-2' : ''}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">
          {artwork.title}
        </h3>
        <p className="text-sm text-secondary font-medium tracking-wide">
          {artwork.technique}
        </p>
        <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-line">
          {artwork.description}
        </div>
      </div>
      
      <div className={`relative group ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div className="absolute inset-0 bg-gradient-gold rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-smooth" />
        <img 
          src={artwork.image}
          alt={artwork.title}
          className="relative rounded-lg shadow-soft w-full h-auto transition-smooth group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};
