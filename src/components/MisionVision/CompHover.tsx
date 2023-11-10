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
        <div className="items-center">
            <div className="flex flex-row justify-center px-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="basis-1/2 justify-center"
                        onMouseOver={() => setHoveredImage(index)}
                        onMouseOut={() => setHoveredImage(null)}
                    >
                        <img src={image.url} alt="" className="w-32 h-32 object-cover" />
                        {hoveredImage === index && (
                            <div className="absolute left-full ml-4 p-2 bg-white shadow-md">
                                {image.text}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompHover;
