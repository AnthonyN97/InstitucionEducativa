import vision from "../../assets/misionVision/visionsinfondo.webp";
import mision from "../../assets/misionVision/misionsinfondo.webp";
import CompHover2 from "./CompHover2";

const images = [
    {
        titulo: "Misión",
        url: mision,
        text: 'El proyecto educativo DIVINO NIÑO CORPAIDOS es una propuesta humanística, integral y emancipadora que fomenta y consolida el desarrollo humano y la construcción de las bases de la personalidad de sus educandos, a través de un modelo educativo que integra los niveles de inicial, primaria y secundaria de menores y articula con las responsabilidades educativas de la familia. El Colegio Divino Niño Corpaidos desarrolla una pedagogía multidisciplinaria y el cultivo de los más altos valores morales que se reflejan en su extraordinario nivel de equidad y calidad educativa.'
    },
    {
        titulo: "Visión",
        url: vision,
        text: 'El proyecto educativo Divino Niño CORPAIDOS se ha posicionado como la propuesta educativa que ha alcanzado altas cotas de desarrollo humano en los infantes, niños y adolescentes que educa, convirtiéndose en uno de los modelos más exitosos, proyectando su estilo pedagógico innovador a toda la región. Sus alumnos y alumnas superan ampliamente los estándares internacionales en logros educativos tanto en los aprestamientos en lecto-escritura, como el dominio de las capacidades básicas que plantea la comunidad educativa internacional por lo que sus egresados gozan de un reconocido nivel que les asegura el acceso a cualquier centro educativo del nivel superior del país. Poseen además una exquisita sensibilidad por la axiología humanística que imparte CORPAIDOS, así como un sólido estilo de auto aprendizaje, afianzada por una adecuada estabilidad emocional.'
    }
];

const MisionVision: React.FC = () => (
    <>
        <CompHover2 images={images}></CompHover2>
    </>
);

export default MisionVision;