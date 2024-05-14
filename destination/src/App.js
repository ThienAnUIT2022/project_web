import React from 'react'
import Destination from './pages/destination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/destination' element={<Destination/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
 