
import React from 'react';

const Card = ({ title, text, image, type, price }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{text}</p>
        <p className="text-green-600 font-semibold mb-2">{type}</p>
        <p className="text-gray-800 font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
