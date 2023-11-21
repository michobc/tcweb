import React from 'react';
import './index.css';

const BigButtons = () => {
  return (
    <div className="button-container">
      <button className="big-button blue" onClick={() => window.location.href = '/User'} >USER</button>
      <button className="big-button pink" onClick={() => window.location.href = '/Admin'} >ADMIN</button>
    </div>
  );
};

export default BigButtons;
