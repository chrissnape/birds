import { FC } from "react";
import CardProps from "./card.types";

const Card: FC<CardProps> = ({ id, name, sciName, images }) => {
  const renderImage = images.length
    ? (
      <img
        alt={name}
        className="hover:scale-105 h-full w-full object-cover transition"
        src={images[Math.floor(Math.random() * images.length)]}
      />
    )
    : (
      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No image available</span>
      </div>
    );

  return (
    <div data-testid={`card--${id}`}className="border border-gray-200 rounded-sm cursor-pointer overflow-hidden">
      <div className="overflow-hidden h-40 w-full">
        {renderImage}
      </div>
      <div className="p-2 bg-white">
        <h2 className="text-emerald-900 font-bold">{name}</h2>
        <p className="text-xs italic">{sciName}</p>
      </div>
    </div>
  );
}

export default Card;