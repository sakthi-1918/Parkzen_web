import './App.css';
import React, { useState } from 'react'; 
import { Routes, Route } from "react-router-dom";
// import LoginSignup from './pages/signin.js';
import ParkingLot from './components/ParkingLot.js';
import Options from './pages/Options.js';
import Home from './pages/Home.js';
import ProfilePage from './pages/ProfilePage.js';
import SignIn from './pages/signin.js';
import Signup from './pages/Signup.js';
import AboutPage from './pages/Aboutpage.js';
import View from './pages/View.js';
import BooksPage from './pages/Book.js';



const App = () => {
  const [email, setEmail] = useState('');

  const handleLogin = (email) => {
      setEmail(email); // Store the email after login
  };

  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slots" element={<ParkingLot />} />
        <Route path="/loc" element={<Options />} />
        {/* <Route path="/profile" element={<ProfilePage email />} /> */}
        <Route path="/profile" element={<ProfilePage email={email} />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/view" element={<View />} />  {/* Profile route */}
        <Route path="/book" element={<BooksPage />} />
      </Routes>
  );
}

export default App;
