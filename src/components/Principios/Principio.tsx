interface Principios {
    nombre: string,
    descripcion: string,
    imagen: string
}

const Principio: React.FC<{ Principios: Principios }> = ({ Principios }) => {
    return (
        <div className="flex flex-col m-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row ease-in duration-300 hover:scale-110 ">
            {Principios.imagen !== "/" ? (
                <img className="h-86 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Principios.imagen} alt="" />
            ) : <></>}
            <div className="flex flex-col items-start justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {Principios.nombre}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-justify">
                    {Principios.descripcion}
                </p>
            </div>
        </div>
    );
}

export default Principio;