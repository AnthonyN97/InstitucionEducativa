import React, { useState } from 'react';

interface SeccionType {
    titulo: string,
    texto: string,
    imagen: string,
}

const Nivel: React.FC<SeccionType> = ({ titulo, texto, imagen }) => {
    const [desplegado, setDesplegado] = useState(false);

    return (
        <div onClick={() => setDesplegado(!desplegado)} className="m-4 p-4 bg-blue dark:bg-blue-dark dark:text-white rounded-2xl hover:scale-105 transform transition-transform duration-500">
            <h1 className="text-center text-2xl font-bold mb-4">
                <i className={`pi ${desplegado ? 'pi-angle-up' : 'pi-angle-down'} hover:scale-110`} /> CLICK - {titulo}
            </h1>
            {desplegado && (
                <div className="flex flex-col sm:flex-row bg-blue-DEFAULT p-4 rounded-lg">
                    <div className="h-full sm:w-1/2 text-xl p-2">
                        {texto}
                    </div>
                    <div className="h-full sm:w-1/2 p-2">
                        <img src={imagen} alt={titulo} className="object-contain w-full h-64" />
                        <img src={imagen} alt={titulo} className="object-cover w-full h-64" />
                        <img src={imagen} alt={titulo} className="object-contain w-full h-full" />
                    </div>
                </div>
    )
}
        </div >
    );
};

export default Nivel;