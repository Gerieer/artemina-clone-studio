import comoElSol from "@/assets/como-el-sol.jpg";
import miMente from "@/assets/mi-mente.jpg";
import proyectoArte from "@/assets/proyecto-arte.jpg";
import proyectoMina from "@/assets/proyecto-mina.jpg";
import proyectoVerde from "@/assets/proyecto-verde.jpg";
import sakura from "@/assets/sakura.jpg";
import anatomiaResiliencia from "@/assets/anatomia-resiliencia.jpg";
import huesosFlores from "@/assets/huesos-flores.jpg";
import { ArtworkCard } from "./ArtworkCard";

const artworks = [
  {
    id: "como-el-sol",
    title: "Como el Sol",
    image: comoElSol,
    technique: "Óleo sobre tela, 50 x 50 cm",
    description: "Como el Sol captura un momento lleno de luz y vida, en el que la llegada de la hija transforma todo a su alrededor. La joven, luce una corona de girasoles que simboliza la belleza natural y la energía vital que irradia. Su cabello, movido por el aire, se mezcla con algunos pétalos de los girasoles, dando una sensación de movimiento y frescura, como si ella fuera una presencia viva que llena el espacio de vitalidad.\n\nSu sonrisa refleja una pureza y una alegría que iluminan la obra, mientras el corazón pintado en su costado izquierdo simboliza el amor y la conexión profunda con su ser interior. La paleta de colores, que incluye tonos de amarillo, verde y azul, crea una atmósfera cálida y serena, como los primeros rayos del sol al amanecer, que iluminan y disipan la oscuridad.\n\nComo el Sol no solo es una representación de la hija, sino una metáfora de cómo su presencia, como el sol, trae luz, esperanza y claridad a la vida de la artista."
  },
  {
    id: "mi-mente",
    title: "Mi Mente",
    image: miMente,
    technique: "Óleo y hoja de oro sobre tela, 40 x 30 cm",
    description: "Mi Mente es una obra profundamente introspectiva que busca dar forma a lo intangible, representando la mente como una entidad presente a menudo difícil de controlar. La artista explora su proceso personal de estar consciente, de no dejarse arrastrar por pensamientos vacíos que solo su proceso personal de estar consciente, de no dejarse arrastrar por pensamientos vacíos que solo confunden y dispersan la atención. En esta obra, la mente se muestra como un rostro con los ojos cerrados, una representación simbólica de que no todo lo que nos dice la mente es cierto. La cerradura de la mirada sugiere que muchas veces los pensamientos nos ciegan a la realidad, y es necesario aprender a desconectarnos de esas percepciones distorsionadas para encontrar claridad.\n\nMi Mente es un reflejo del viaje hacia la autocomprensión, el control sobre el flujo de pensamientos y la constante búsqueda de la paz interior. La obra invita a la reflexión sobre el poder de la mente y cómo, al reconocer sus limitaciones, podemos encontrar la verdad y la calma en un espacio más profundo y consciente."
  },
  {
    id: "proyecto-arte",
    title: "Proyecto Arte",
    image: proyectoArte,
    technique: "Óleo sobre tela, 60 x 50 cm",
    description: "Proyecto Arte es una obra que surge de una profunda reflexión personal, un proceso de autodescubrimiento y sanación. Realizada en una etapa de la vida en la que la artista confrontó las huellas de su infancia, esta pintura es un testimonio de su promesa interna: convertirse en pintora, algo que había soñado desde niña y que nunca abandonó.\n\nLa obra está impregnada de luz, tanto en su ejecución como en su mensaje. A través de tonos vibrantes y radiantes.\n\nEn Proyecto Arte, la artista no solo honra su promesa de niña, sino que también invita al espectador a reflexionar sobre la importancia de sanar, de iluminar las sombras del pasado y de vivir en la luz de lo que somos en nuestro ser más auténtico."
  },
  {
    id: "proyecto-mina",
    title: "Proyecto Mina",
    image: proyectoMina,
    technique: "Óleo sobre tela, 60x50 cm",
    description: "Proyecto Mina es una obra que refleja el poder y el renacer del autoestima, un testimonio visual de la fuerza interna y la autenticidad que la artista ha logrado abrazar. La pintura irradia empoderamiento, proyectando una energía vibrante y luminosa que simboliza la superación y el reconocimiento del propio valor.\n\nA través de una paleta de luces, la artista transmite la idea de que no existe una sola luz que ilumine el camino, sino muchas. Cada destello representa un momento de claridad, una chispa de fuerza que se suma al crecimiento personal y colectivo. En este recorrido, la luz se convierte en guía, multiplicándose a lo largo de un camino que se extiende, como un testimonio de cómo la autenticidad y el empoderamiento pueden iluminar las sombras y transformar la oscuridad.\n\nProyecto Mina invita al espectador a reflexionar sobre cómo, a través de la luz interior, podemos iluminar el camino no solo para nosotros mismos, sino también para quienes nos rodean."
  },
  {
    id: "proyecto-verde",
    title: "Proyecto Verde",
    image: proyectoVerde,
    technique: "Óleo sobre tela, 60 x 50 cm",
    description: "Proyecto Verde es una obra que captura la memoria de un personaje que dejó una huella en la artista, pero cuya presencia no se traduce en una representación exacta. La obra crea un ambiente único y diferente, alejado de lo común.\n\nLa figura central, oculta su mirada, un detalle que refleja la desaparición de la imagen completa en la memoria de la artista.\n\nProyecto Verde es también un testimonio de la idealización de una relación y cómo, con el tiempo, esa idealización cambia."
  },
  {
    id: "sakura",
    title: "SAKURA",
    image: sakura,
    technique: "Óleo sobre tela, 50 x 50 cm",
    description: "Sakura retrata a un joven sonriendo mientras escucha música, envuelto por la sutil caída de las flores del Sakura.\n\nLa escena refleja un momento de calma y alegría, donde lo cotidiano se funde con la belleza simbólica del sakura, flor que representa la fragilidad, pero también la renovación y la esperanza.\n\nÉl es una persona muy especial en mi vida. Su luz y alegría son tan genuinas como la flor del cerezo: brillan con fuerza incluso después del invierno. Aunque ha enfrentado momentos difíciles, nunca pierde su capacidad de sonreír, de contagiar paz y optimismo."
  },
  {
    id: "anatomia-resiliencia",
    title: "Anatomía de la resiliencia",
    image: anatomiaResiliencia,
    technique: "Técnico: mixta sobre tela 80 x 60 cm",
    description: "Pinté este corazón para mostrar el universo que guardo dentro. En su interior pinté una constelación, símbolo del universo que vive dentro de mí, de la fuerza que me eleva cuando necesito recordar quién soy. El corazón está roto, pero sus grietas están unidas con oro, porque creo en la belleza que nace tras la fractura; en que el dolor también puede sanar con luz.\n\nEn el exterior florecen un girasol y una rama de cerezo: dos presencias que sostienen mi mundo, los amores que siempre serán parte de mí. Afuera, una lluvia suave cae y forma charcos donde mi corazón se refleja, recordándome que incluso en los días grises, sigo aquí, latiendo, creciendo, transformándome.\n\nAnatomía de la resiliencia es mi mapa emocional: mi herida, mi luz, mi amor y mi alma. Es el recordatorio de que incluso con grietas, sigo brillando desde adentro."
  },
  {
    id: "huesos-flores",
    title: "Huesos y Flores",
    image: huesosFlores,
    technique: "Técnico: Mixta sobre tela 80 x 60 cm",
    description: "Pinté Huesos y flores para el Día de Muertos, como un diálogo entre la ausencia y la vida que persiste. En el centro, un esqueleto del que brotan dos flores de cempasúchil desde el costado: son la vida que renace desde lo marchito, la belleza que florece incluso en lo que ya no respira.\n\nEl fondo dorado envuelve la escena como un espacio fuera del tiempo, un plano donde lo humano se vuelve luz. No es oro terrenal, sino un brillo espiritual, el resplandor de lo que no muere.\n\nSiete velas acompañan la figura; una de ellas se ha apagado, mientras las otras arden con llamas grandes que dejan un hilo de humo, como si el aire guardara el suspiro de quienes partieron. Entre ellas descansan siete flores de cempasúchil —una aún cerrada—, símbolo de lo que está por florecer, de la memoria que sigue abriéndose con cada recuerdo.\n\nHuesos y flores es mi forma de honrar ese ciclo eterno donde la muerte no es final, sino transformación. En cada hueso, una raíz; en cada flor, una promesa de regreso."
  }
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galería de pinturas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de las obras más representativas de Mina.
          </p>
          <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">
            En esta galería, presentamos una selección de las pinturas más emblemáticas de Mina. Cada obra refleja su estilo único y la esencia de la persona.
          </p>
        </div>
        
        <div className="space-y-24">
          {artworks.map((artwork, index) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
