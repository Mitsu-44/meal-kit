import React from 'react';
import WeeklyMenu from "../components/WeeklyMenu";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";


export default function Main() {
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 min-h-screen">
      <Navbar />
      <Hero />
      <WeeklyMenu />
      <HowItWorks />
      <Footer />
    </div>
  );
}