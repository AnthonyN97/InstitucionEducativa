import { useState } from "react"

interface Images {
    url: string,
    text: string
}

interface CompHoverProps {
    images: Images[]
}

const CompHover: React.FC<CompHoverProps> = ({ images }) => {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    return (
        <div className="flex justify-center m-5 flex-col rounded-lg">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="flex flex-col m-2 rounded-lg dark:bg-blue-dark bg-corn-light sm:flex-row "
                    onMouseOver={() => setHoveredImage(index)}
                    onMouseOut={() => setHoveredImage(null)}
                >
                    <img src={image.url} alt="" className="w-1/4 h-1/4 object-cover basis-1 mx-auto" />
                    {hoveredImage === index && (
                        <div className="ml-4 p-2 shadow-md basis-2/3 rounded-lg text-xl text-justify inline-block align-bottom dark:text-white">
                            {image.text}
                        </div>
                    )}
                </div>

            ))}
        </div>
    );
};

export default CompHover;
