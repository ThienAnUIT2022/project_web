import React from "react";
import Schedule from "./Pages/Schedule";
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App()
{
    return(
      <div>
       <Header />
        <BrowserRouter>
          <Routes>
            <Route path='Schedule' element ={<Schedule/>}/>
          </Routes>
        </BrowserRouter>
        <Footer /> 
        </div>
    )
}

export default App;
