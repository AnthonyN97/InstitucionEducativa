// PhotoService.js

// Importa todas las imágenes de la carpeta 'actividades'
function importAll(r) {
    return r.keys().map(r);
  }
  
  export const PhotoService = {
    getImages: function() {
      // Esto importará todas las imágenes en formato .jpg de la carpeta 'actividades'
      const images = importAll(require.context('../../assets/AreaDeportes', false, /\.(png|jpe?g|svg)$/));
      
      // Esto convertirá la lista de imágenes en el formato que espera tu componente
      const formattedImages = images.map((src, index) => {
      
        // Buscar el objeto correspondiente en el arreglo existente
      
        return {
          itemImageSrc: src,
          thumbnailImageSrc: src,
        };
      });
  
      return Promise.resolve(formattedImages);
    }
  };
  