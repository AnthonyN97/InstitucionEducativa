import React, { useState } from 'react';
import Niveles from "../../assets/niveles/niveles.jpg";

interface SeccionType {
    titulo: string,
    parrafo1: string,
    parrafo2: string,
    frase: string,
    imagen1: string,
    imagen2: string,
}

const Nivel: React.FC<SeccionType> = ({ titulo, parrafo1, parrafo2, frase, imagen1, imagen2 }) => {
    const [desplegado, setDesplegado] = useState(false);

    return (
        <div onClick={() => setDesplegado(!desplegado)} className="m-4 p-4 bg-blue-dark text-white rounded-2xl hover:scale-105 transform transition-transform duration-500">
            <h1 className="text-center text-2xl font-bold mb-4">
                <i className={`pi ${desplegado ? 'pi-angle-up' : 'pi-angle-down'} hover:scale-110`} /> CLICK - {titulo}
            </h1>
            {desplegado && (
                <div className="flex flex-col sm:flex-row bg-blue-DEFAULT p-4 rounded-lg">
                    <div className="h-full sm:w-1/2 p-2 text-justify">
                        <text className='lg:text-xl'>{parrafo1}</text> 
                        <br />
                        <text className='lg:text-xl'>{parrafo2}</text> 
                        <br />
                        <div className='text-right pt-3'>
                            {(titulo==='Inicial'?<img src={Niveles} alt="Salvador" className="object-contain w-full h-64 py-2" /> : <></>)}   
                            <text className='text-xl lg:text-2xl font-bold'>{frase}</text>
                        </div>
                        
                    </div>
                    <div className="h-full sm:w-1/2 lg:p-2 grid grid-rows-2">
                        <img src={imagen1} alt={titulo} className="object-contain w-full h-64 py-2" />
                        <img src={imagen2} alt={titulo} className="object-contain w-full h-64 py-2" />
                    </div>
                </div>
    )
}
        </div >
    );
};

export default Nivel;