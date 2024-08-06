import React from 'react';

const Filters = ({ onFilterChange }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Tipo de Habitación</label>
        <select 
          onChange={(e) => onFilterChange('roomType', e.target.value)} 
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="">Todos</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Presidential Suite">Suite Presidencial</option>
          <option value="Standard">Estándar</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Rango de Precio</label>
        <select 
          onChange={(e) => onFilterChange('priceRange', e.target.value)} 
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="">Todos</option>
          <option value="low">Bajo</option>
          <option value="medium">Medio</option>
          <option value="high">Alto</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
