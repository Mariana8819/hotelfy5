
import React from 'react';
import Card from './Card';
 // Asegúrate de que la ruta sea correcta

const Cards = ({ rooms }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {rooms.map((room, index) => (
        <Card 
          key={index}
          title={room.title}
          text={room.text}
          image={room.image}
          type={room.type}
          price={room.price}
        />
      ))}
    </div>
  );
};

export default Cards;
