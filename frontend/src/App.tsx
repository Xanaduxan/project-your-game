import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './features/Header/Header';
import Login from './features/Login/Login';
import MainPage from './features/MainPage/MainPage';
// import QuestionPage from './features/QuestionPage/QuestionPage';
import Registration from './features/Registration/Registration';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="main" element={<MainPage />} />

      {/* <Route path="play/:id" element={<QuestionPage />} /> */}

      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />

    </Route>
  </Routes>
  );
}

export default App;
