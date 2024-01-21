import React, { useState, useEffect, useRef } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './PhotoService';
import { Button } from 'primereact/button';


const Actividades: React.FC = () => {
    const [images, setImages] = useState([])
    const galleria = useRef<Galleria | null>(null);
    const [expanded, setExpanded] = useState(true);

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


    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const isMobile = window.innerWidth <= 767;

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="w-full max-h-96 object-cover"
            />
        );
    };

    const itemTemplate2 = (item: any) => {
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="w-full max-h-[32rem] object-cover"
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


    const caption = (item: any) => {
        return (
            <>
                <div onClick={toggleExpand}>
                    <div className="text-lg mb-2 font-bold">{item.title}</div>
                    <p
                        className={`text-base text-white text-justify ${expanded && isMobile ? 'overflow-hidden overflow-ellipsis whitespace-nowrap' : 'whitespace-normal'}`}
                    >
                        {item.alt}
                    </p>
                </div>
            </>
        );
    }

    const captionSecond = (item: any) => {
        return (
            <>
                <div onClick={toggleExpand}>
                    <div className="text-lg mb-2 font-bold">{item.title}</div>
                </div>
            </>
        );
    }

    return (
        <React.Fragment>
            <h1 className="bg-gray-100 text-3xl font-bold text-center py-4">
                Actividades
            </h1>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" value={images} responsiveOptions={responsiveOptions} numVisible={4}
                    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '100%' }} circular autoPlay 
                    showItemNavigators transitionInterval={10000} />
            </div>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={4}
                    item={itemTemplate2} thumbnail={thumbnailTemplate} caption={captionSecond} circular autoPlay 
                    fullScreen showItemNavigators transitionInterval={10000} />
            </div>
            <div className="bg-gray-100 card flex justify-center items-center py-4">
                <Button label="Ver Fotos Completas" icon="pi pi-external-link" onClick={() => galleria.current?.show()} />
            </div>

        </React.Fragment>
    )
}

export default Actividades;
