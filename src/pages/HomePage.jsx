import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
//import Card from '../components/Card';
import Paginated from '../components/Paginated';

import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';


const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({
    roomType: '',
    priceRange: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda

  const roomsPerPage = 6; 
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage); // Calcula el número total de páginas
  

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/rooms'); // Asegúrate de que esta ruta esté correctamente configurada
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const result = rooms.filter(room => {
        const matchesType = filters.roomType === '' || room.type === filters.roomType;
        const matchesPrice = filters.priceRange === '' ||
            (filters.priceRange === 'low' && room.price <= 100) ||
            (filters.priceRange === 'medium' && room.price > 100 && room.price <= 200) ||
            (filters.priceRange === 'high' && room.price > 200);

            const matchesSearch = searchQuery === '' || room.title.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesType && matchesPrice && matchesSearch;
      });
      setFilteredRooms(result);
    };
    applyFilters();
  }, [filters, rooms, searchQuery]);

  const currentRooms = filteredRooms.slice(
    (currentPage - 1) * roomsPerPage,
    currentPage * roomsPerPage
  );

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar onSearch={handleSearch} />
        <Filters onFilterChange={handleFilterChange} />
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-6">Habitaciones Disponibles</h2>
          <Cards rooms={currentRooms} />
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredRooms.map((room, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <Card 
                  title={room.title} 
                  text={room.text} 
                  image={room.image} 
                  type={room.type} 
                  price={room.price} 
                />
              </div>
            ))}
          </div> */}
        </div>
        <Paginated currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    
    </div>
  );
};

export default HomePage;
