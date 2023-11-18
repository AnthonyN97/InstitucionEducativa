import MisionVision from "../../components/MisionVision/MisionVision";
import Inicio from "../../components/Inicio/Inicio";
import PrincipiosRectores from "../../components/Principios/PrincipiosRectores";
import Actividades from "../../components/Actividades/Actividades";

const Home: React.FC = () => {
    return(
        <>
            <Inicio/>
            <MisionVision/>
            <PrincipiosRectores/>
            <Actividades/>
        </>
    );
};

export default Home;