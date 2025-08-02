import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Owner from './owner/owner'
import './App.css'
import Start from './home/start'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
       <div className="container-fluid w-100 p-0">
        <BrowserRouter>
        <Routes>

          <Route path="/*" element={<Start/>} />
          <Route path="/owner/*" element={<Owner />} />
        </Routes>
        </BrowserRouter>
       </div>
        




    </>   
  )
}

export default App;