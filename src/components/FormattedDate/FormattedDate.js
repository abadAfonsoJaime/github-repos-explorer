import React from 'react';

const FormattedDate = ({ date }) => {
  const formatted = new Date(date).toLocaleDateString();
  return <span>{formatted}</span>;
};

export default FormattedDate;
