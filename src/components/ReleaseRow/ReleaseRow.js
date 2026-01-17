import React from 'react';
import FormattedDate from '../FormattedDate';
import ExternalLink from '../ExternalLink';

const ReleaseRow = ({ release }) => {
  return (
    <div className="release-row">
      <h3>{release.name}</h3>
      <p>Published: <FormattedDate date={release.published_at} /></p>
      {/* <p>{release.body}</p> */}
      <ExternalLink href={release.html_url}>View on GitHub</ExternalLink>
    </div>
  );
};

export default ReleaseRow;
