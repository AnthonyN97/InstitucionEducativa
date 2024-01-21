import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import { useEffect, useState, useRef } from "react";
import { PhotoService } from "../../pages/AreaDeportes/PhotoService";
import { Button } from "primereact/button";

const AreaDeportes: React.FC = () => {
    const [images, setImages] = useState([])
    const galleria = useRef<Galleria | null>(null);
    const beneficios = [
        'Social',
        'Emocional',
        'Físico',
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
                className="w-full max-h-screen object-contain"
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
                En <text className="font-bold">CORPAIDOS</text> el deporte es uno de los pilares fundamentales en la formación de nuestros alumnos, ya que es beneficiosa para su salud, convirtiendose en una herramienta efectiva en la educación y en el desarrollo y mejoramiento de las capacidades físicas que facilitan en nuestros estudiantes la integración de aspectos indispensables para el bienestar humano:
            </div>

            <div className="grid grid-cols-2 py-2">
                <ul className="py-2 list-disc list-inside text-lg text-justify">
                    {beneficios.map((beneficio, index) => (
                        <li key={index} className="mb-2">{beneficio}</li>
                    ))}
                </ul>
                <div className="text-2xl font-semibold text-justify">
                    ¡En CORPAIDOS todos practican deporte, nadie se queda atrás!
                </div>
            </div>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" value={images} responsiveOptions={responsiveOptions} numVisible={4}
                    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '100%', maxHeight: '80%' }} circular autoPlay
                    showItemNavigators transitionInterval={10000} />
            </div>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={4}
                    item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay 
                    fullScreen showItemNavigators transitionInterval={10000} />
            </div>
            <div className="bg-gray-100 card flex justify-center items-center py-4">
                <Button label="Ver Fotos Completas" icon="pi pi-external-link" onClick={() => galleria.current?.show()} />
            </div>
        </div>
    );
};

export default AreaDeportes;
