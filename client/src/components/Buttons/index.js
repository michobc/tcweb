import React from 'react';
import './index.css';
// import Admin from './Admin'
// import User from './User'

const BigButtons = () => {
  return (
    <div className="button-container">
      <button className="big-button blue" onClick={() => window.location.href = '/User'} >USER</button>
      <button className="big-button pink" onClick={() => window.location.href = '/Admin'} >ADMIN</button>
    </div>
  );
};

export default BigButtons;
