import React from 'react'
import { useNavigate } from 'react-router-dom';
import './MainPage.css'


const MainPage = () => {
  const navigate = useNavigate();
  function onHandleNavigate(): void {
    navigate(`/play`);
  }
  return (
    <button className="btn" onClick={onHandleNavigate}>Играть</button>
  )
}

export default MainPage