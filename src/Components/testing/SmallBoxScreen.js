import React, { useState } from 'react';
import './small.css';
import { useNavigate } from 'react-router-dom';

const SmallBoxScreen = () => {
  const [showBox, setShowBox] = useState(true);
    const nav = useNavigate();
  const handleYesClick = () => {
    
    setShowBox(false);
        nav("/login");
  };

  const handleNoClick = () => {
    setShowBox(false);

    nav("/");
    
  };

  return (
    <>
    {showBox && (
    <div className="small-box-screen">
      
        <div className="small-box">
          <h2>Your are not Authorized for this Action! You have to Login</h2>
          <br />
          <h2>Would You like to Login </h2>
          <div className="options">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button>
          </div>
        </div>
      

      
      
    </div>)}
    </>
  );
};

export default SmallBoxScreen;
