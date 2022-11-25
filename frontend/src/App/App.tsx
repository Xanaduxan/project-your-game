import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as api from '../App/api';
import './App.css';
import Header from '../features/Header/Header';
import MainPage from '../features/MainPage/MainPage';
import QuestionList from '../features/QuestionList/QuestionList';
import { useDispatch } from 'react-redux';
import Login from '../features/Login/Login';
import Registration from '../features/Registration/Registration';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadQuestion().then((questions) => dispatch({ type: 'INIT_QUESTION', payload: questions }));
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="main" element={<MainPage />} />
        {/* <Route path="play/:id" element={<QuestionPage />} /> */}
        <Route path="play" element={<QuestionList />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />

      </Route>
    </Routes>
  );
}

export default App;
