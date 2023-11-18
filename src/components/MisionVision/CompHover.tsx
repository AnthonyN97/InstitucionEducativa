import { useState } from "react";

interface Images {
  titulo: string;
  url: string;
  text: string;
}

interface CompHoverProps {
  images: Images[];
}

const CompHover: React.FC<CompHoverProps> = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <>
      {images.map((image, index) => (
        <div
          onMouseOver={() => setHoveredImage(index)}
          onMouseOut={() => setHoveredImage(null)}>
          <div className="flex justify-center m-5 inline-block align-middle flex-col rounded-lg dark:bg-blue-dark dark:text-white">
            <div className="text-center font-bold text-2xl lg:text-4xl">{image.titulo}</div>
            <div
              key={index}
              className={`flex flex-col m-2 rounded-lg dark:bg-blue-dark bg-corn-light sm:flex-row ${hoveredImage === index ? "hovered" : ""
                }`}
            >
              <img
                src={image.url}
                alt=""
                className="w-1/4 h-1/4 object-cover basis-1/3 mx-auto"
              />
              <div className="flex flex-row-reverse sm:flex-row-reverse">
                {(hoveredImage === index || window.innerWidth <= 768) && (
                  <div className="m-2 p-2 shadow-md rounded-lg text-base text-justify inline-block align-middle lg:text-2xl">
                    {image.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompHover;
