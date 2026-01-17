import React from 'react';
import './Paginator.css';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="paginator">
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span className="paginator__info">
        Page {currentPage} of {totalPages}
      </span>
      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
