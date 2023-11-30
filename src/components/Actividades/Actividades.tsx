import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './PhotoService';


const Actividades: React.FC = () => {
    const [images, setImages] = useState([])

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
            numVisible: 1
        }
    ];
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const isMobile = window.innerWidth <= 767;

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

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

    return (
        <React.Fragment>
            <h1 className="bg-gray-100 text-3xl font-bold text-center py-4">
                Actividades
            </h1>
            <div className="bg-gray-100 card flex justify-center items-center">
                <Galleria className="p-5 lg:w-5/6" value={images} responsiveOptions={responsiveOptions} numVisible={5}
                    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} circular autoPlay transitionInterval={10000} />
            </div>
        </React.Fragment>
    )
}

export default Actividades;
