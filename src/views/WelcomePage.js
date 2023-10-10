import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Chào mừng đến với FoundCharacter!</h1>
        <Link to="/question">
          <button className='btn-info'>Bắt đầu</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
