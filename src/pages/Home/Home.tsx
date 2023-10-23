import Mision from "../../components/MisionVision/Mision";
import Presentacion from "../../components/Presentacion/Presentacion";
import Vision from "../../components/MisionVision/Vision";

const Home: React.FC = () => {
    return(
        <>
            <Presentacion/>
            <Mision/>
            <Vision/>
        </>
    );
};

export default Home;