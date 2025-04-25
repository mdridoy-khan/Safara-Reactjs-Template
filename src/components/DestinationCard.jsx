import React from "react";

const DestinationCard = ({ image, title, price, duration }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-md lg:text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <span>🕒</span> {duration}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
