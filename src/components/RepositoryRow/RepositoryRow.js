import React from 'react';
import GithubAvatar from '../GithubAvatar';
import ExternalLink from '../ExternalLink';

const RepositoryRow = ({ repository, onSelectReleases }) => {
  return (
    <div className="repository-row">
      <div className="repository-row__header">
        <GithubAvatar url={repository.owner.avatar_url} alt={repository.owner.login} />
        <div className="repository-row__info">
          <div className="repository-row__title-section">
            <h3>
              <ExternalLink href={repository.html_url}>{repository.name}</ExternalLink>
            </h3>
            <button 
              className="repository-row__releases-btn"
              onClick={() => onSelectReleases && onSelectReleases(repository)}
            >
              View Releases
            </button>
          </div>
          <p>{repository.description}</p>
          <p>Stars: {repository.stargazers_count}</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryRow;
