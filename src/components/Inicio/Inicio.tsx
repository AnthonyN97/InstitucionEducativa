import fondo from '../../assets/fondo.png';

const Inicio: React.FC = () => {
    return (
        <img src={fondo} alt='Corpaidos' className="bg-cover bg-center bg-no-repeat w-full h-120 md:h-120 relative" />
    );
};

export default Inicio;