import Seccion from "./Seccion";
import Asistencia from "../../assets/normas/asistenciaPuntualidad.jpg";
import Convivencia from "../../assets/normas/convivencia.jpg";
import Inmobiliario from "../../assets/normas/inmobiliario.jpg";
import EstimulosSanciones from "../../assets/normas/estimulosSanciones.jpg";

interface SeccionType {
    image: string,
    data: string[],
    title: string,
    sideRight: boolean,
}

const Secciones: SeccionType[] = [{
    image: Asistencia,
    data: ["Tres tardanzas se exigirá la presencia del padre de familia",
        "Toda inasistencia será justificada por medio de una esquela.",
        "Por ningún motivo los alumnos se ausentarán del plantel sin permiso de la autoridad educativa, de ser así será sancionado suspendiéndolo del centro educativo."],
    title: "Asistencia y Puntualidad",
    sideRight: true,
},
{
    image: Convivencia,
    data: ["Los estudiantes deben observar dentro y fuera del colegio una conducta acorde a las buenas costumbres, orden y disciplina académica.",
        "Los estudiantes deben concurrir a las labores correctamente  uniformados (con el uniforme  completo), aseados, cabello corto en los varones y sujeto en las niñas.",
        "El buzo del colegio, se usa una sola vez por semana y días que lo autorice la Dirección del Colegio. Queda terminantemente prohibido venir con buzo si no le toca psicomotricidad.",
        "En los intercambios de hora y después de la merienda  y recreo, deben de estar en sus aulas esperando al profesor  quien les dará una tolerancia  de hasta 3 minutos;  caso contrario el profesor  le llamará la atención al alumno que llegue tarde a clases, de seguir con esa conducta se llamará al padre de familia.",
        "Si el estudiante necesita ir al baño será en el intercambio de profesores, salvo casos urgentes.",
        "Los estudiantes por ningún motivo podrán salir  de las aulas en horas que no sean de merienda o de recreo.",
        "Los alumnos deben tener el cabello corto y las alumnas deberán usar el cabello bien sujeto, no deberán usar cadenas, pulseras, aretes largos y de colores ya que no son parte del uniforme de ser asi se les decomisará y no se devolverá.",
        "No deberán traer celulares, audífonos, MP3 y otros pues serán decomisados, de perderse  alguno de estos objetos el colegio no se responsabiliza.",
        "Los educandos son responsables de su material de trabajo.",
        "En el uniforme de los alumnos deberá bordarse  el nombre para evitar pérdidas y confusiones, de lo contrario el colegio no se responsabiliza.",
        "Queda terminantemente prohibido tener enamorado dentro del colegio y/o mostrar conductas que no van de acuerdo a su edad."],
    title: "Convivencia",
    sideRight: false,
},
{
    image: Inmobiliario,
    data: ["Cada alumno es responsable de su carpeta, no podrán escribir en ellas ni pegar stickers, deberán cuidarlas y cualquier destrozo será subsanado por el padre de familia."],
    title: "Cuidado del Mobiliario",
    sideRight: true,
},
{
    image: EstimulosSanciones,
    data: ["Son acreedores de estímulos los alumnos que constantemente cumplen sus deberes: tareas, puntualidad, comportamiento, buenos modales.",
        "Los estímulos serán: Mención honrosa, felicitación escrita, diploma de honor.",
        "Las sanciones serán de acuerdo a las faltas: Espacio de reflexión, amonestación verbal, observación en la agenda, disminución de puntaje en el comportamiento, amonestación por parte de la dirección, advertencia a los padres de familia, matrícula condicional, suspensión temporal, separación definitiva del plantel."],
    title: "Estimulos y Sanciones",
    sideRight: false,
}
]

const Normas: React.FC = () => {
    return (
        <div className="bg-gray-100 p-5">
            <h1 className="text-3xl font-bold mb-4 text-center py-3">
                Normas de Convivencia
            </h1>
            <div className="text-2xl text-justify">
                Las normas están destinadas a la formación de los alumnos como personas capaces de poder vivir con los demás,
                formar hábitos, moldear su personalidad, perfeccionar actitudes para una correcta conducta individual y grupal,
                orientadas a una responsabilidad con respeto y colaboración.
            </div>
            {
                Secciones.map((item) => (
                    <Seccion image={item.image}
                        data={item.data}
                        title={item.title}
                        sideRight={item.sideRight} />
                ))
            }
        </div>
    )
}

export default Normas;