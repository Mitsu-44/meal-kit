import React from 'react';
import Main from './pages/main';
import Menu from './pages/menu';
import MealDetail from "./pages/menu/details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<MealDetail />} />
      </Routes>
    </Router>
  );
}