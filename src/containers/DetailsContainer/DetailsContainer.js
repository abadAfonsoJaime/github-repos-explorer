import React, { useState } from 'react';
import ReleaseList from '../../components/ReleaseList';
import Paginator from '../../components/Paginator';

const DetailsContainer = ({ selectedRepository }) => {
  const [releases, setReleases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const PER_PAGE = 10;

  React.useEffect(() => {
    if (selectedRepository) {
      fetchReleases(selectedRepository.owner.login, selectedRepository.name, 1);
    } else {
      setReleases([]);
      setTotalPages(0);
      setCurrentPage(1);
    }
  }, [selectedRepository]);

  const fetchReleases = async (owner, repo, page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${PER_PAGE}&page=${page}`
      );
      const data = await response.json();
      setReleases(data || []);
      
      // GitHub doesn't provide total count in releases endpoint, so estimate from response length
      // If we get less than PER_PAGE items, we're on the last page
      if (data.length < PER_PAGE) {
        setTotalPages(page);
      } else {
        // Assume there might be more pages
        setTotalPages(page + 1);
      }
      setCurrentPage(page);
    } catch (err) {
      console.error('Failed to fetch releases:', err);
      setReleases([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (selectedRepository) {
      fetchReleases(selectedRepository.owner.login, selectedRepository.name, page);
    }
  };

  return (
    <div className="details-container">
      {loading && <p>Loading releases...</p>}
      <ReleaseList releases={releases} />
      {releases.length > 0 && totalPages > 1 && (
        <Paginator 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default DetailsContainer;
