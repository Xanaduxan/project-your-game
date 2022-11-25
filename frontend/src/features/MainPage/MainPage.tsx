import React from 'react';
import { useSelector } from 'react-redux';


import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

import './MainPage.css';

function MainPage(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.userState);
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
