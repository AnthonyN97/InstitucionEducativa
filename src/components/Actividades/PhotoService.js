// PhotoService.js

// Importa todas las imágenes de la carpeta 'actividades'
function importAll(r) {
  return r.keys().map(r);
}

export const PhotoService = {
  getImages: function() {
    // Esto importará todas las imágenes en formato .jpg de la carpeta 'actividades'
    const images = importAll(require.context('../../assets/actividades', false, /\.(png|jpe?g|svg)$/));
    
    // Esto convertirá la lista de imágenes en el formato que espera tu componente
    const formattedImages = images.map((src, index) => ({
      itemImageSrc: src,
      thumbnailImageSrc: src,
      title: `Title ${src}`,
      alt: `Image ${index+1}`
    }));

    return Promise.resolve(formattedImages);
  }
};
