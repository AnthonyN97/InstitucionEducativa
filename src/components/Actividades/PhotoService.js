// PhotoService.js

// Importa todas las imágenes de la carpeta 'actividades'
function importAll(r) {
  return r.keys().map(r);
}

export const PhotoService = {
  getImages: function() {
    // Esto importará todas las imágenes en formato .jpg de la carpeta 'actividades'
    const images = importAll(require.context('../../assets/actividades', false, /\.(png|jpe?g|svg)$/));
    const existingArray = [
      { iden: 'Los MUN' ,title: 'Los MUN', alt: 'Los MUN ( Modelo de Naciones Unidas) es un proyecto liderado por estudiantes, con  fines educativos y formativos. A través del debate y argumentación  los alumnos representan a países miembros de la ONU poniéndose en la piel del delegado del país que les ha tocado para encontrar soluciones a problemas de la agenda internacional.' },
      { iden: 'Feria de Ciencias' ,title: 'Feria de Ciencias', alt: 'La divulgación de la ciencia  genera espacios  de encuentro  entre los estudiantes y el público y fortalece el desarrollo del pensamiento científico tomando como punto de partida la observación de su entorno con el fin de ser testigos analíticos e identificar fenómenos o problemas que necesitan respuestas o soluciones.' },
      { iden: 'Senor de los Milagros' ,title: 'Señor de los Milagros' , alt: 'El Señor de los Milagros constituye la principal celebración católica de nuestro país. Su imagen original fue  pintada por un esclavo de casta angoleña en el barrio de Pachacamilla y los niños  más pequeños del colegio Corpaidos  salieron también a rendir su homenaje al Cristo moreno en una linda procesión.'},
      { iden: 'Campeonato de atletismo' ,title: 'Campeonato de atletismo', alt: 'En la final del campeonato de atletismo, organizado por el IPD, felicitamos a nuestros alumnos por su destacada participación, logrando muchos de ellos un podio.'},
      { iden: 'Dia del estudiante' ,title: 'Día del estudiante', alt: 'Compartir y actuación por el día del estudiante, nuestros niños y adolescentes se divirtieron mucho y nosotros nos sentimos felices por ello.'},
      { iden: 'Ensamble musical CORPAIDINO' ,title: 'Ensamble musical CORPAIDINO', alt: 'En CORPAIDOS estamos convencidos que el desarrollo artistico musical favorece el desarrollo intelectual y social.'}
    ];
    
    // Esto convertirá la lista de imágenes en el formato que espera tu componente
    const formattedImages = images.map((src, index) => {
      const fileName = src.replace(/^.*[\\/]/, '').split('.')[0];
    
      // Buscar el objeto correspondiente en el arreglo existente
      const existingObject = existingArray.find(obj => obj.iden === fileName);
    
      return {
        itemImageSrc: src,
        thumbnailImageSrc: src,
        title: existingObject ? existingObject.title : `Image ${index + 1}`,
        alt: existingObject ? existingObject.alt : `Image ${index + 1}`
      };
    });

    return Promise.resolve(formattedImages);
  }
};
