import React from 'react';
import './GithubAvatar.css';

const GithubAvatar = ({ url, alt }) => {
  return <img src={url} alt={alt} className="github-avatar" />;
};

export default GithubAvatar;
