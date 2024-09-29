import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'; 
import Login from './components/Login';
import GoogleMap from './components/Googlemaps';
import Cards from './components/Cards';
import QRCodeGenerator from './components/Qrcode';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/map" element={<GoogleMap />} />
          <Route path="/qrcode" component={QRCodeGenerator} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
