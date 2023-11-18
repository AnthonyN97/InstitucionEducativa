import { motion } from "framer-motion";
import { useState } from "react";

interface Images {
  url: string;
  text: string;
  titulo:string;
}

interface CompHoverProps {
  images: Images[];
}

const CompHover2: React.FC<CompHoverProps> = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="flex flex-col sm:flex-row">
      {images.map((image, index) => (
        <motion.div className="card sm:basis-1/2" 
        onMouseOver={() => setHoveredImage(index)} 
        onMouseOut={() => setHoveredImage(null)}>
          <div className="flex justify-center m-5 inline-block align-middle flex-col rounded-lg dark:bg-blue-dark dark:text-white">
            <div className="text-center font-bold text-2xl lg:text-4xl">{image.titulo}</div>
            <div
              key={index}
              className={`flex flex-col m-2 rounded-lg dark:bg-blue-dark bg-corn-light sm:flex-row ${hoveredImage === index ? "hovered" : ""
                }`}
              onMouseOver={() => setHoveredImage(index)}
              onMouseOut={() => setHoveredImage(null)}
            >
              <img
                src={image.url}
                alt=""
                className="w-1/4 h-1/4 object-cover basis-1 mx-auto"
              />
            </div>
            <motion.h2 layout>
              {(hoveredImage === index || window.innerWidth <= 768)  && (
                <div className="m-2 p-2 bg-blue-dark shadow-md basis-2/3 rounded-lg text-lg text-justify inline-block align-middle dark:text-white items-center">
              {image.text}
          </div>
          )}
        </motion.h2>
        </div >
      </motion.div >
      ))}
    </div>
  );
};

export default CompHover2;