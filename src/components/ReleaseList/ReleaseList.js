import React from 'react';
import ReleaseRow from '../ReleaseRow';

const ReleaseList = ({ releases }) => {
  if (!releases || releases.length === 0) {
    return <p>No releases found.</p>;
  }

  return (
    <div className="release-list">
      {releases.map((release) => (
        <ReleaseRow key={release.id} release={release} />
      ))}
    </div>
  );
};

export default ReleaseList;
