import MisionVision from "../../components/MisionVision/MisionVision";
import PrincipiosRectores from "../../components/Principios/PrincipiosRectores";
import Actividades from "../../components/Actividades/Actividades";
import fondo from '../../assets/home/fondo.png';

const Home: React.FC = () => {
    return(
        <>
            <img src={fondo} alt='Corpaidos' className="bg-cover bg-center bg-no-repeat w-full h-120 md:h-120 relative" />
            <MisionVision/>
            <PrincipiosRectores/>
            <Actividades/>
        </>
    );
};

export default Home;