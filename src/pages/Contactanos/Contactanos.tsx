import WhatsAppB from "../../components/WhatsAppB/WhatsAppB";

const ubicacionFrontal = "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2spe!4v1700932315791!5m2!1ses-419!2spe!6m8!1m7!1sG7Gx8xMwVrMtPNjYPlumTQ!2m2!1d-16.40734807141846!2d-71.52511473002731!3f326.39956122811805!4f0.6276393148316544!5f0.7481052591083299"
const ubicacionSatelital = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.2091024333902!2d-71.5251522809535!3d-16.40726316294613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424afe26cbd12f%3A0xab57aa0dda798fe9!2sColegio%20Divino%20Ni%C3%B1o%20Corpaidos!5e0!3m2!1ses-419!2spe!4v1700932438214!5m2!1ses-419!2spe"

const Contactanos: React.FC = () => {
    return (
        <>
            <div className="flex flex-row">
                Si quiere saber acerca de nuestras matriculas a traves de este número 
                (054) 226773 o también a través de WhatsApp:
                <WhatsAppB/>
            </div>
            <div>Puede encontrarnos en la siguiente direccion: Avenida Venezuela 738 Urb. Santa Isabel Cercado 04002 Arequipa, Peru</div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 px-5">
                <iframe title="Vista Frontal" src={ubicacionFrontal} className="rounded-lg w-full md:w-1/2 h-96 md:h-96" loading="lazy"></iframe>
                <iframe title="Vista Satelital" src={ubicacionSatelital} className="rounded-lg w-full md:w-1/2 h-96 md:h-96" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Contactanos;