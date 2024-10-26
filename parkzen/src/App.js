import './App.css';
import React, { useState } from 'react'; 
import { Routes, Route } from "react-router-dom";
// import LoginSignup from './pages/signin.js';
//import ParkingLot from './components/ParkingLot.js';
import Options from './pages/Options.js';
import Home from './pages/Home.js';
import ProfilePage from './pages/ProfilePage.js';
import SignIn from './pages/signin.js';
import Signup from './pages/Signup.js';
// import AboutPage from './pages/Aboutpage.js';
import View1 from './pages/View1.js';
import BooksPage from './pages/Book.js';
import Bookdetails from './pages/BookingDet.js';



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
        {/* <Route path="/slots" element={<ParkingLot />} /> */}
        <Route path="/loc" element={<Options />} />
        {/* <Route path="/profile" element={<ProfilePage email />} /> */}
        <Route path="/profile" element={<ProfilePage email={email} />} />
        {/* <Route path="/about" element={<AboutPage />} />  */}
        <Route path="/view1/:slotId" element={<View1 />} />  {/* Profile route */}
        <Route path="/book" element={<BooksPage />} />
        <Route path="/details" element={<Bookdetails/>}/>
      </Routes>
  );
}

export default App;
