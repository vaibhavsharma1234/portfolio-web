
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleProject from './components/SingleProject';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the individual project pages */}
        <Route path="/project/:projectName" element={<SingleProject />} />

        {/* Default route for the main project page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
