import React, { useState } from 'react';
import ReleaseList from '../../components/ReleaseList';
import Paginator from '../../components/Paginator';

const DetailsContainer = () => {
  const [releases, setReleases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="details-container">
      <ReleaseList releases={releases} />
      <Paginator 
        currentPage={currentPage} 
        totalPages={1} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default DetailsContainer;
