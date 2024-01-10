import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import { useEffect, useState } from "react";
import { PhotoService } from "../../pages/AreaDeportes/PhotoService";

const AreaDeportes: React.FC = () => {
    const [images, setImages] = useState([])
    const beneficios = [
        'Combate el sedentarismo',
        'Muestra los beneficios de una vida activa',
        'Enseña a trabajar en equipo',
        'Aumenta la creatividad',
        'Muestra maneras de aprovechar el tiempo libre',
        'Ayuda a disminuir la ansiedad, el estrés o la depresión.'
    ];

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1024px',
            numVisible: 4
        },
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 2
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="w-full h-full object-cover"
            />
        );
    };

    const thumbnailTemplate = (item: any) => {
        return (
            <img
                src={item.thumbnailImageSrc}
                alt={item.alt}
                className="object-contain h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
        );
    };

    return (
        <div className="p-5 sm:p-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center py-3">
                Área Deportiva
            </h1>
            <div className="text-lg text-justify">
                La educación física se contempla como un área esencial de la formación educativa por todo lo que aporta a las personas. Lo más básico sería recalcar que ayuda a mantener la salud gracias al ejercicio físico, pero más allá y aporta otro tipo de ventajas muy importantes para el desarrollo integral de las personas.
                <br />
                A través de la educación física se aprenden ciertos valores como la responsabilidad, la solidaridad, la tolerancia y el respeto. Los beneficios que aporta la educación física son:
            </div>
            <ul className="py-2 list-disc list-inside text-lg text-justify">
                {beneficios.map((beneficio, index) => (
                    <li key={index} className="mb-2">{beneficio}</li>
                ))}
            </ul>
            <div className="text-lg text-justify">
                Las clases de educación física debe llevarlas a cabo un profesor de educación física que enseñe las diferentes disciplinas deportivas que son requeridas para el desarrollo de los individuos. Para esto, el profesor debe tener una formación que le haya proporcionado todos los conocimientos necesarios para llevar a cabo las clases de manera correcta. Un ejemplo de este tipo de formaciones es realizar un Grado Superior de Enseñanza y Animación Sociodeportiva.
                <br/>
                Son muchas las ventajas y los beneficios asociados a la realización de actividades físicas. Las prácticas deportivas en general, previenen enfermedades, ayudan a desarrollar el organismo de manera adecuada y estimulan los hábitos saludables. Además, la educación física es una de las pocas asignaturas escolares que educan desde la propia experiencia del niño en relación con un equipo.
            </div>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" value={images} responsiveOptions={responsiveOptions} numVisible={4}
                    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '75%' }} circular autoPlay
                    showItemNavigators transitionInterval={10000} />
            </div>
        </div>
    );
};

export default AreaDeportes;
