import React from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Quicktips from './pages/Quicktips';
import Destination from './pages/Destination';
import FAQs from './pages/FAQs';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx'
import Profile from './pages/Profile/Profile.jsx';
import { AuthProvider } from './context/AuthContext.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App(props) {
  return (
    <div> 
      <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/quicktips" element={<Quicktips />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;