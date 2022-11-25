import React from 'react';


import { useNavigate } from 'react-router-dom';

import './MainPage.css';

function MainPage():JSX.Element {
  const navigate = useNavigate();
  function onHandleNavigate(): void {
    navigate('/play');
  }
  return (
<div className='fatherBtn'>
    <button type="button" className="btn" onClick={onHandleNavigate}>Играть</button>
</div>
  );
}

export default MainPage;
