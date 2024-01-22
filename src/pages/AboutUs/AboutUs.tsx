import divinoNino from "../../assets/divinoNino.png";
import niñosMundo from "../../assets/sobreNosotros2.webp";
import brochure1 from "../../assets/sobreNosotrosBrochure.webp";
import brochure2 from "../../assets/sobreNosotrosBrochure2.webp";

const AboutUs: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100 flex flex-col lg:flex-row">
                <div className="basis-2/5 content-center p-6 rounded-lg justify-items-center">
                    <img src={divinoNino} alt="Divino Niño" className="object-cover w-full h-full" />
                </div>
                <div className="basis-3/5">
                    <div className="container flex-col mx-auto p-4 sm:p-6 md:p-8 text-justify">
                        <h1 className="text-3xl font-bold mb-4">
                            Presentación
                        </h1>
                        <p className="text-lg text-gray-700 uppercase py-5">
                            Estimados padres y madres de alumnos/as
                        </p>
                        <p className="text-base leading-7 py-1">
                            Una de las características de un buen gobierno, sea en el hogar, en la empresa, en la oficina y particularmente en el colegio es sin duda la planificación.
                            <br />
                            El colegio Divino Niño CORPAIDOS asume la planificación como un medio, como un trazo, el derrotero que nos proponemos alcanzar juntos: Familia – colegio, durante un periodo de tiempo relativamente corto: el año 2024.
                            Por consiguiente, al puerto al que queremos llegar a partir de lo que planeamos lo que somos: una comunidad educativa en crecimiento y convencida, que sí es posible impartir la mejor educación escolar cuando padres y profesores trabajan juntos, con un solo objetivo: Educar para vivir y trascender.
                            <br />
                            Les damos la más cordial bienvenida a este año electivo, que estamos seguros será exitoso.
                            <br />
                            Con afecto.
                        </p>
                        <p className="text-sm text-gray-500 py-5">
                            Prof. Rosa María Huaco de la Cruz
                            <br />
                            DIRECTORA
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 flex flex-col">
                <div className="basis-3/5">
                    <div className="container flex-col mx-auto p-4 sm:p-6 md:p-8 text-justify">
                        <h1 className="text-3xl font-bold mb-4">
                            Reseña Historica
                        </h1>
                        <p className="text-base leading-7 py-1">
                            La institución Educativa Privada CORPAIDOS se encuentra ubicada en la Av. Venezuela 738, Urb. Santa Isabel - Cercado, fue creada por Resolución Directoral 0251-2004, depende funcionalmente de la Dirección Regional de Educación y pertenece a la jurisdicción de la UGEL Norte de la provincia y región Arequipa. En la actualidad atiende a niños del nivel inicial en las edades de 3, 4 y 5 años, primaria y secundaria completa.
                            <br />
                            La palabra Paidos proviene del vocablo griego que significa niño. Eran los niños que eran educados en la Pahideia, en la antigua Grecia, cuna de la civilización actual.
                            <br />
                            La institución educativa CORPAIDOS tiene como patrono al Divino Niño, por lo que en el año 2007 decidió incorporar el nombre del patrono al nombre del colegio, llamándose desde entonces “ Divino Niño Corpaidos” y cuyo aniversario es el 28 de agosto.
                            <br />
                            Su nominación y logotipo reflejan su vocación humanística y el reconocimiento a la virtuosidad humana en la creación de cultura y ciencia, estrechamente unidas a la fe católica, representada por el Divino Niño. Los perfiles de salida en el nivel inicial, primaria y secundaria apuntan a la formación ciudadana plena y comprometida con el desarrollo de la región y del país.
                            <br />
                            En el año 2011 egresa la primera promoción, conformada por 13 alumnos los cuales llenan de orgullo a la institución debido a que el 100% en la actualidad son profesionales exitosos.
                            <br />
                            En CORPAIDOS, se brinda un servicio educativo acorde a los tiempos actuales de tecnología y en un ambiente que favorece el desarrollo personal, cultural, científico y religioso de nuestros alumnos. Asimismo, se practican principios morales dentro de un marco de justicia, libertad, verdad y solidaridad que los lleva a obtener las metas trazadas, ofreciendo a la sociedad niños y adolescentes con capacidad crítica, creadora, culta, justa, piadosa y solidaria.
                            <br />
                            El colegio Corpaidos prioriza en sus educandos el desarrollo social y emocional como base para obtener aprendizajes de calidad y una personalidad armoniosa defensora de la vida por lo que lleva por lema:
                            <p className="text-xl font-bold">“Las buenas acciones vienen de los buenos pensamientos, en Corpaidos enseñamos a pensar”</p>
                            <br />
                            El colegio Corpaidos está dirigido por la profesora y psicóloga Mg. Rosa María Huaco de la cruz.
                        </p>
                    </div>
                </div>
                <div className="basis-2/5 p-2 rounded-lg h-screen flex justify-center">
                    <img src={niñosMundo} alt="Nuestro futuro" className="items-center object-cover lg:w-4/5 lg:h-6/7" />
                </div>
                <div className="flex flex-col sm:flex-row bg-blue-DEFAULT p-4 rounded-lg">
                    <div className="h-full sm:w-1/2 p-2 text-justify">
                        <text className="lg:text-xl font-bold">
                            Descarga Nuestro Folleto Oficial - ( Brochure )
                        </text>
                        <br />
                        <text className='lg:text-xl'>
                            ¡Explora todo lo que nuestro colegio tiene para ofrecer! Descarga nuestro folleto oficial para obtener información detallada sobre horarios, precios, niveles y descubre nuestro enfoque único de las 4A. Este folleto es tu guía completa para conocer todo lo que necesitas para empezar tu viaje de aprendizaje con nosotros.
                        </text>
                        <br />
                        <a href='./CORPAIDOS.pdf' download rel="noopener noreferrer" className="p-button font-bold">
                            Descarga Aquí<i className="pl-2 pi pi-download"></i>
                        </a>
                    </div>
                    <div className="h-full sm:w-1/2 lg:p-2 grid grid-cols-2 justify-items-center">
                        <img src={brochure1} alt={"Brochure"} className="object-contain max-h-80 py-2" />
                        <img src={brochure2} alt={"Brochure"} className="object-contain max-h-80 py-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;