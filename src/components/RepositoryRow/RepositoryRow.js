import React, { useState } from 'react';
import GithubAvatar from '../GithubAvatar';
import ExternalLink from '../ExternalLink';
import ReleaseList from '../ReleaseList';
import Paginator from '../Paginator';

const RepositoryRow = ({ repository, onSelectReleases }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReleases, setTotalReleases] = useState(0);
  
  const RELEASES_PER_PAGE = 3;

  const handleViewReleases = async () => {
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }

    if (releases.length === 0) {
      await fetchReleases(1);
    }

    setIsExpanded(true);
    onSelectReleases && onSelectReleases(repository);
  };

  const fetchReleases = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repository.owner.login}/${repository.name}/releases?per_page=${RELEASES_PER_PAGE}&page=${page}`
      );
      const data = await response.json();
      setReleases(data || []);
      
      // Try to get total count from Link header
      const linkHeader = response.headers.get('Link');
      if (linkHeader) {
        const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
        if (lastPageMatch) {
          setTotalReleases(parseInt(lastPageMatch[1]) * RELEASES_PER_PAGE);
        } else if (data.length < RELEASES_PER_PAGE) {
          setTotalReleases((page - 1) * RELEASES_PER_PAGE + data.length);
        }
      } else if (data.length < RELEASES_PER_PAGE) {
        setTotalReleases((page - 1) * RELEASES_PER_PAGE + data.length);
      } else {
        setTotalReleases(page * RELEASES_PER_PAGE + 1);
      }
      
      setCurrentPage(page);
    } catch (err) {
      console.error('Failed to fetch releases:', err);
      setReleases([]);
      setTotalReleases(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    fetchReleases(page);
  };

  const totalPages = Math.ceil(totalReleases / RELEASES_PER_PAGE);

  return (
    <div className="repository-row">
      <div className="repository-row__header">
        <GithubAvatar url={repository.owner.avatar_url} alt={repository.owner.login} />
        <div className="repository-row__info">
          <div className="repository-row__title-section">
            <h3>
              <ExternalLink href={repository.html_url}>{repository.name}</ExternalLink>
            </h3>
          </div>
          <p>{repository.description}</p>
          <p className="repository-row__stars"><span className="repository-row__stars-icon">⭐</span> <strong>{repository.stargazers_count}</strong></p>
        </div>
        <button 
          className="repository-row__releases-btn"
          onClick={handleViewReleases}
          title={isExpanded ? 'Hide Releases' : 'View Releases'}
        >
          <span className="repository-row__releases-icon">
            {isExpanded ? '\u25bc' : '\u25b6'}
          </span>
          <span className="repository-row__releases-text">
            {isExpanded ? 'Hide' : 'View'} Releases
          </span>
        </button>
      </div>
      {isExpanded && (
        <div className="repository-row__releases">
          {loading && <p>Loading releases...</p>}
          {!loading && releases.length === 0 && <p>No releases found for this repository.</p>}
          {!loading && releases.length > 0 && (
            <>
              <ReleaseList releases={releases} />
              {totalPages > 1 && (
                <Paginator 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={handlePageChange} 
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RepositoryRow;
