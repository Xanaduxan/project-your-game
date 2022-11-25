
import React from 'react';
// import QuestionPage from '../QuestionPage/QuestionPage';

import { useNavigate } from 'react-router-dom';
import './MainPage.css'



const MainPage = () => {
  const navigate = useNavigate();
  function onHandleNavigate(): void {
    navigate(`/play`);
  }
  return (

    <>

    {/* <QuestionPage /> */}
  

    <button className="btn" onClick={onHandleNavigate}>Играть</button>
  </>
  )
}

export default MainPage