import WhatsAppButton from "../../assets/whatsapp/WhatsAppButtonGreenLarge.svg"

function replaceSpacesWithPercent20(text: string): string {
  return text.split(' ').join('%20');
}

const textoDelMensaje= "Estoy interesado en información de la institución educativa."
const numeroDeTelefono = "51957966686"
const link = `https://wa.me/${numeroDeTelefono}?text=${replaceSpacesWithPercent20(textoDelMensaje)}`

const WhatsAppB: React.FC = () => {
  return (
    <>
        <a aria-label="Chat on Whatsapp" href={link}>
          <img alt="Chat on WhatsApp" src={WhatsAppButton} />
        </a>
    </>
  )
}

export default WhatsAppB;