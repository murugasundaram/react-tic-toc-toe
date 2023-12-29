import React from 'react';
import { useNavigate } from 'react-router-dom';

const GradientButton = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    background: 'linear-gradient(rgb(205 255 236), #1eae52)',
    border: 'none',
    color: 'rgb(255 255 255)', // Adjust text color as needed
    padding: '8px 45px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={() => navigate('/newgame')}>
      Start
    </button>
  );
};

export default GradientButton;
