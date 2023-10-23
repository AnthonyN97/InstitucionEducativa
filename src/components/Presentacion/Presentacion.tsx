import student from '../../assets/student.jpg';

const Presentacion: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-96 relative" // Agregamos la clase `relative` para posicionar elementos hijos
            style={{ backgroundImage: `url(${student})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-end items-end h-full relative">
                <h1 className="text-white text-4xl md:text-6xl font-semibold p-4 md:p-8">
                    Escuela Corpaidos 
                </h1>
                <p className="text-white text-2xl md:text-4xl p-4 md:p-8">
                    Dedicados a la educación desde 19xx
                </p>
            </div>
        </div>
    );
};

export default Presentacion;