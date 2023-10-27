import MisionVision from "../../components/MisionVision/MisionVision";
import Inicio from "../../components/Inicio/Inicio";
import PrincipiosRectores from "../../components/Principios/PrincipiosRectores";

const Home: React.FC = () => {
    return(
        <>
            <Inicio/>
            <MisionVision/>
            <PrincipiosRectores/>
        </>
    );
};

export default Home;