import React from 'react';
import './Paginator.css';

const Paginator = ({ currentPage, totalPages, onPageChange, previousLabel = 'Previous', nextLabel = 'Next' }) => {
  return (
    <div className="paginator">
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        {previousLabel}
      </button>
      <span className="paginator__info">
        Page {currentPage} of {totalPages}
      </span>
      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        {nextLabel}
      </button>
    </div>
  );
};

export default Paginator;
