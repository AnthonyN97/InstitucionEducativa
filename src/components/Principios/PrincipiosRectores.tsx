import Principio from "./Principio";
import desarrolloHumano from "../../assets/principios/desarrolloHumano.jpg";
import etica from "../../assets/principios/etica.jpg";
import intercultural from "../../assets/principios/intercultural.jpg";
import construccionAprendizajes from "../../assets/principios/construccionAprendizajes.jpg";
import pertinenciaVocacional from "../../assets/principios/pertinenciaVocacional.jpg";
import propedeutica from "../../assets/principios/propedeutica.jpg";

interface Principios {
    nombre: string,
    descripcion: string,
    imagen: string
}

const datosEducacion:Principios[] = [
    {
        imagen: desarrolloHumano,
        nombre: "Desarrollo Humano",
        descripcion: "La educación que propugnamos se basa en la promoción integral de la persona, en el respeto de su singularidad, en el proceso evolutivo propio y en la atención a las necesidades individuales de sus educandos."
    },
    {
        imagen: etica,
        nombre: "Ética",
        descripcion: "En tanto la educación fomenta los valores, la moral y la conducta ética aceptable, solidaridad, justa y de pleno respeto a la vida y la libertad."
    },
    {
        imagen: intercultural,
        nombre: "Intercultural",
        descripcion: "Promotora de la relación intercultural y dialógica entre los diversos segmentos de la población escolar arequipeña."
    },
    {
        imagen: construccionAprendizajes,
        nombre: "Construcción de los Aprendizajes",
        descripcion: "Nuestra concepción educativa es psico-pedagógica y concibe el aprendizaje como un proceso a la vez interno como en la relación con el medio."
    },
    {
        imagen: pertinenciaVocacional,
        nombre: "Pertinencia Vocacional",
        descripcion: "Que busca descubrir todas las capacidades de los alumnos y alumnas, afianzando sus potencialidades para llegar a una decisión madura, pertinente en cuanto a su elección profesional sea humanístico como tecnológico."
    },
    {
        imagen: propedeutica,
        nombre: "Propedéutica",
        descripcion: "Principio orientado a formar y preparar a los infantes para iniciar una escolarización reglada sin traumas ni dificultades, que se extiende a la primaria para acceder con éxito a los estudios secundarios superiores."
    }
];


const PrincipiosRectores: React.FC = () => {
    return (
        <div className="md:mx-10">
           <p className="pt-4 text-center text-2xl font-semibold mb-4 sm:pt-6">Principios Rectores:</p>
            <div className="grid justify-center rounded-lg shadow-sm dark:border-gray-700 md:w-full md:grid-cols-2">
                {datosEducacion.map((item, index) => (
                    <Principio key={index} Principios={item}/>
                ))}
            </div>
        </div>
    );
};

export default PrincipiosRectores;