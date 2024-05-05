import React from "react";
import Schedule from "./Pages/Schedule";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Destination from "./Pages/Destination";
import FAQs from "./Pages/FAQs";
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Formlogin from "./Pages/Form_login";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App()
{
    return(
      <div>
       <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='FormLogin' element ={<Formlogin/>}/>
            <Route path='Login' element ={<Login/>}/>
            <Route path='Schedule' element ={<Schedule/>}/>
            <Route path='Profile' element ={<Profile/>}/>
            <Route path='FAQs' element ={<FAQs/>}/>
            <Route path='Destination' element ={<Destination/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
        </div>
    )
}

export default App;
