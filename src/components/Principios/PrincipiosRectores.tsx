interface Principios {
    nombre: string,
    descripcion: string,
}

const datosEducacion:Principios[] = [
    {
        nombre: "Desarrollo Humano",
        descripcion: "La educación que propugnamos se basa en la promoción integral de la persona, en el respeto de su singularidad, en el proceso evolutivo propio y en la atención a las necesidades individuales de sus educandos."
    },
    {
        nombre: "Ética",
        descripcion: "En tanto la educación fomenta los valores, la moral y la conducta ética aceptable, solidaridad, justa y de pleno respeto a la vida y la libertad."
    },
    {
        nombre: "Intercultural",
        descripcion: "Promotora de la relación intercultural y dialógica entre los diversos segmentos de la población escolar arequipeña."
    },
    {
        nombre: "Construcción de los Aprendizajes",
        descripcion: "Nuestra concepción educativa es psico-pedagógica y concibe el aprendizaje como un proceso a la vez interno como en la relación con el medio."
    },
    {
        nombre: "Pertinencia Vocacional",
        descripcion: "Que busca descubrir todas las capacidades de los alumnos y alumnas, afianzando sus potencialidades para llegar a una decisión madura, pertinente en cuanto a su elección profesional sea humanístico como tecnológico."
    },
    {
        nombre: "Propedéutica",
        descripcion: "Principio orientado a formar y preparar a los infantes para iniciar una escolarización reglada sin traumas ni dificultades, que se extiende a la primaria para acceder con éxito a los estudios secundarios superiores."
    }
];


const PrincipiosRectores: React.FC = () => {
    return (
        <>
           <p className="pt-4 text-center text-2xl font-semibold mb-4 sm:pt-6">Principios Rectores:</p>
            <div className="grid mb-8 p-3 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                {datosEducacion.map((item, index) => (
                    <figure
                        key={index}
                        className="flex flex-col items-center justify-center p-3 text-center bg-white border-b border-gray-200 rounded-lg md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
                    >
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.nombre}</h3>
                            <p className="my-4">{item.descripcion}</p>
                        </blockquote>
                    </figure>
                ))}
            </div>
        </>
    );
};

export default PrincipiosRectores;