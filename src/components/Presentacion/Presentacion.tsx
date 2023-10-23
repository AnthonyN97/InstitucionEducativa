import logo from '../../assets/logo.jpg';

const Presentacion: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-96"
      style={{ backgroundImage: `url(${logo})` }} // Usamos ${logo} para insertar la URL de la imagen
    >
      <div className="flex justify-end items-center h-full">
        <div className="text-white text-2xl md:text-4xl font-semibold p-4 md:p-8">
          Tu texto a la derecha
        </div>
      </div>
    </div>
  );
};

export default Presentacion;