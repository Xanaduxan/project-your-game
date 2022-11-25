import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './features/Header/Header';
import MainPage from './features/MainPage/MainPage';
import QuestionPage from './features/QuestionPage/QuestionPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="main" element={<MainPage />} />
      <Route path="play/:id" element={<QuestionPage />} />
    </Route>
  </Routes>
  );
}

export default App;
