import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-lg bg-white p-2 my-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar habitaciones o servicios"
        className="flex-1 px-4 py-2 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
