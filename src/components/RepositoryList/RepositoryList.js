import React from 'react';
import RepositoryRow from '../RepositoryRow';

const RepositoryList = ({ repositories, onRepositorySelect }) => {
  if (!repositories || repositories.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div className="repository-list">
      {repositories.map((repo) => (
        <div key={repo.id} onClick={() => onRepositorySelect && onRepositorySelect(repo)}>
          <RepositoryRow repository={repo} />
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
