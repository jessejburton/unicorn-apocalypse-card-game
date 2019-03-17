import React from 'react';

const LoadingPage = () => (
  <div className="loader content-container">
    <span className="loader-tag">preparing you for the...</span>
    <h1 className="logo-font">Unicorn Apocalypse</h1>
    <img className="loader__image" src="/images/loader.gif" />
  </div>
);

export default LoadingPage;
