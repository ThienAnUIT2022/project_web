import React from 'react'
import Destination from './pages/destination'
import Centralhighlands from './pages/centralhighlands'
import Mekongdelta from './pages/mekongdelta'
import Northcentral from './pages/northcentral'
import Northeast from './pages/northeast'
import Northwest from './pages/northwest'
import Redriver from './pages/redriver'
import Southcentral from './pages/southcentral'
import Southeast from './pages/southeast'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/centralhighlands' element={<Centralhighlands/>}/>
      <Route path='/mekongdelta' element={<Mekongdelta/>}/>
      <Route path='/northcentral' element={<Northcentral/>}/>
      <Route path='/northeast' element={<Northeast/>}/>
      <Route path='/northwest' element={<Northwest/>}/>
      <Route path='/redriver' element={<Redriver/>}/>
      <Route path='/southcentral' element={<Southcentral/>}/>
      <Route path='/southeast' element={<Southeast/>}/>
    </Routes> 
  </BrowserRouter>
  )
}

export default App
