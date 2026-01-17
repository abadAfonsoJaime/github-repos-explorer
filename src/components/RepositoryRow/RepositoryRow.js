import React from 'react';
import GithubAvatar from '../GithubAvatar';
import ExternalLink from '../ExternalLink';

const RepositoryRow = ({ repository }) => {
  return (
    <div className="repository-row">
      <div className="repository-row__header">
        <GithubAvatar url={repository.owner.avatar_url} alt={repository.owner.login} />
        <div className="repository-row__info">
          <h3>
            <ExternalLink href={repository.html_url}>{repository.name}</ExternalLink>
          </h3>
          <p>{repository.description}</p>
          <p>Stars: {repository.stargazers_count}</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryRow;
