import MisionVision from "../../components/MisionVision/MisionVision";
import PrincipiosRectores from "../../components/Principios/PrincipiosRectores";
import Actividades from "../../components/Actividades/Actividades";
import fondo from '../../assets/home/fondo.png';
import { useRef } from "react";
import { Button } from "primereact/button";

const Home: React.FC = () => {
    const div = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (div.current) {
            div.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };

    return(
        <div ref={div}>
            <img src={fondo} alt='Corpaidos' className="bg-cover bg-center bg-no-repeat w-full h-120 md:h-120 relative" />
            <MisionVision/>
            <PrincipiosRectores/>
            <Actividades/>
            <Button icon="pi pi-angle-double-down" className="fixed bottom-4 right-4" severity="info" onClick={scrollToBottom}>Ir al final</Button>
        </div>
    );
};

export default Home;