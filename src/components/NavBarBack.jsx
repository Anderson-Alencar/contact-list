import React from 'react';
import ArrowLeft from '../assets/arrow-left.svg';

function NavBarBack() {
  return (
    <nav className="back-bar">
      <button type="button" onClick={() => window.history.back()} className="btn-back">
        <img src={ArrowLeft} className="back-icon" alt="back icon" />
        <p className="back-text">Voltar</p>
      </button>
    </nav>
  );
}

export default NavBarBack;
