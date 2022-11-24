import React from 'react'
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  function onHandleNavigate(): void {
    navigate(`/play`);
  }
  return (
    <button onClick={onHandleNavigate}>Играть</button>
  )
}

export default MainPage