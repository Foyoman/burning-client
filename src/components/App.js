import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import BurningAirlines from './BurningAirlines';
import ShowAirplane from './ShowAirplane';
import FlightBooker from './FlightBooker';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flights" element={<BurningAirlines class="BurningAirlines" />} />
          <Route path="search" element={<FlightBooker />} />
          <Route path="airplanes" element={<ShowAirplane/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}