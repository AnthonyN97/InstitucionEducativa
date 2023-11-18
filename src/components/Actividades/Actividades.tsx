import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './PhotoService';


const Actividades: React.FC = () => {
    const [images, setImages] = useState([])

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
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
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <>
            <div className="card flex justify-center items-center">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5}
                    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} circular autoPlay transitionInterval={3000}/>
            </div>
        </>
    )
}

export default Actividades;