import Test from "./test";
import desarrolloHumano from "../../assets/desarrolloHumano.jpg";
import etica from "../../assets/etica.jpg";
import intercultural from "../../assets/intercultural.jpg";
import construccionAprendizajes from "../../assets/construccionAprendizajes.jpg";
import pertinenciaVocacional from "../../assets/pertinenciaVocacional.jpg";
import propedeutica from "../../assets/propedeutica.jpg";

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
                    <Test Principios={item}/>
                    /*<div className="content p-2">
                        <figure
                        key={index}
                        className="flex flex-col h-full items-center justify-center p-3 text-center bg-white border-b border-gray-200 rounded-lg md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
                    >
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.nombre}</h3>
                            <p className="my-4">{item.descripcion}</p>
                        </blockquote>
                    </figure>
                    </div>*/
                ))}
            </div>
        </div>
    );
};

export default PrincipiosRectores;