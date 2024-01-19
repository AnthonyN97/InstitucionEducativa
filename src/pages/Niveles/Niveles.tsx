import Nivel from "../../components/Nivel/Nivel";
import NivelInicial1 from "../../assets/niveles/nivelInicial1.jpg";
import NivelInicial2 from "../../assets/niveles/nivelInicial2.jpg";
import NivelPrimaria1 from "../../assets/niveles/nivelPrimaria1.jpg";
import NivelPrimaria2 from "../../assets/niveles/nivelPrimaria2.jpg";
import NivelSecundaria1 from "../../assets/niveles/nivelSecundaria1.jpg";
import NivelSecundaria2 from "../../assets/niveles/nivelSecundaria2.jpg";

const Niveles: React.FC = () => {
    const niveles = [
        {
            titulo: 'Inicial',
            parrafo1: 'En CORPAIDOS, la educación inicial o parvularia esta basada en el aprendizaje lúdico con una interacción y experimentación adecuada que respeta los ritmos de aprendizaje, la individualidad, sus necesidades e intereses de cada niño y que cuando esta es de calidad aporta aprendizajes relevantes a lo largo de su vida en el ámbito del pensamiento, lenguaje, interacción social, desarrollo emocional, atención, conciencia y psicomotricidad.',
            parrafo2: 'Es así que en el nivel inicial CORPAIDOS brinda un ambiente rico en experiencias formativas, cognitivas y afectivas lo que les permitirá adquirir habilidades, hábitos y valores.',
            frase: '¡Aquí empieza el futuro exitoso de tus hijos!!!',
            imagen1: NivelInicial1,
            imagen2: NivelInicial2,
        },
        {
            titulo: 'Primaria',
            parrafo1: 'En CORPAIDOS el nivel primario fomenta el desarrollo de competencias específicas que le permitirán al niño (niña) un armonioso desarrollo personal, cognitivo, psicológico y psicomotor.',
            parrafo2: 'Al culminar la primaria el alumno corpaidino, el alumno mostrará altos estándares que faciliten el aprendizaje de: la expresión y comprensión oral, el desarrollo del lenguaje, la escritura, la lectura, el cálculo matemático, el razonamiento lógico, la competencia digitales, el deporte, las artes y el humanismo para crecer y trascender.',
            frase: '¡En CORPAIDOS en el nivel primario desarrollamos una polidocencia formativa!!!',
            imagen1: NivelPrimaria1,
            imagen2: NivelPrimaria2,
        },
        {
            titulo: 'Secundaria',
            parrafo1: 'La importancia de esta etapa educativa reside no solo en la adquisición de altos estándares de conocimiento, sino en las habilidades que se estan perfeccionando. Por tal motivo, en CORPAIDOS conferimos a la educación secundaria la importancia que se merece ya que devendrán jóvenes altamente capacitados y oportunamente preparados para la vida laboral en la adultez.',
            parrafo2: 'Acercar a los alumnos al mundo real es más sencillo con la pedagogía que se aplica en CORPAIDOS que los guiará exitosamente hacia una ciudadanía responsable y transformadora.',
            frase: '¡Las buenas acciones vienen de los buenos pensamientos, en CORPAIDOS enseñamos a pensar!!!',
            imagen1: NivelSecundaria1,
            imagen2: NivelSecundaria2
        },
    ];

    return (
        <div className="p-5 sm:p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center py-3">
                Niveles
            </h1>
            {niveles.map((nivel, index) => (
                <Nivel
                    key={index}
                    titulo={nivel.titulo}
                    parrafo1={nivel.parrafo1}
                    parrafo2={nivel.parrafo2}
                    frase={nivel.frase}
                    imagen1={nivel.imagen1}
                    imagen2={nivel.imagen2}
                />
            ))}
        </div>
    );
};

export default Niveles;
