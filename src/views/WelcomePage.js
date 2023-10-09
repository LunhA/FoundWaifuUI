import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1>Chào mừng đến với ứng dụng!</h1>
      <Link to="/question">
        <button>Bắt đầu</button>
      </Link>
    </div>
  );
}

export default WelcomePage;