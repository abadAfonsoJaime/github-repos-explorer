import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';
import Paginator from '../../components/Paginator';

const SearchContainer = ({ onRepositorySelect }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentQuery, setCurrentQuery] = useState('');

  const PER_PAGE = 10;

  const handleSearch = async (query) => {
    setCurrentQuery(query);
    setCurrentPage(1);
    await fetchRepositories(query, 1);
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    await fetchRepositories(currentQuery, page);
  };

  const fetchRepositories = async (query, page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&per_page=${PER_PAGE}&page=${page}`
      );
      const data = await response.json();
      setRepositories(data.items || []);
      
      // Calculate total pages from total_count
      const totalCount = data.total_count || 0;
      const pages = Math.ceil(totalCount / PER_PAGE);
      setTotalPages(pages);
    } catch (err) {
      setError('Failed to fetch repositories');
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>}
      <RepositoryList repositories={repositories} onRepositorySelect={onRepositorySelect} />
      {repositories.length > 0 && totalPages > 1 && (
        <Paginator 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default SearchContainer;
