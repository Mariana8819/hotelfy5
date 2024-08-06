import React from 'react';

const Paginated = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l"
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-800">{currentPage} de {totalPages}</span>
      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r"
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginated;
