import React from 'react';
import RepositoryRow from '../RepositoryRow';

const RepositoryList = ({ repositories }) => {
  if (!repositories || repositories.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div className="repository-list">
      {repositories.map((repo) => (
        <RepositoryRow key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
