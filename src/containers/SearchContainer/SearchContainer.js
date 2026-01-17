import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';

const SearchContainer = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&per_page=10`
      );
      const data = await response.json();
      setRepositories(data.items || []);
    } catch (err) {
      setError('Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>}
      <RepositoryList repositories={repositories} />
    </div>
  );
};

export default SearchContainer;
