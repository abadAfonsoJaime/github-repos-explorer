import React from 'react';
import './HintMessage.css';

const HintMessage = ({ message, type = 'info' }) => {
  return <div className={`hint-message hint-message--${type}`}>{message}</div>;
};

export default HintMessage;
