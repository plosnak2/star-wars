import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
