import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './features/Header/Header';
import MainPage from './features/MainPage/MainPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="main" element={<MainPage />} />
    </Route>
  </Routes>
  );
}

export default App;
