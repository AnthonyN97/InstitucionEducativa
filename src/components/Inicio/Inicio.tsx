import fondo from '../../assets/fondo.png';
import Corpaidos from '../TextoEditado/Corpaidos';

const Inicio: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-96 relative" // Agregamos la clase `relative` para posicionar elementos hijos
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-end items-end h-full relative hover:backdrop-blur-sm">
                <h1 className="text-white uppercase text-4xl md:text-6xl font-semibold p-4 md:p-8">
                    <Corpaidos/>
                </h1>
                <p className="text-white text-md font-semibold md:text-4xl p-4 md:p-8">
                    Inicial - Primaria - Secundaria
                </p>
            </div>
        </div>
    );
};

export default Inicio;