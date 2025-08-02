import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Owner from './owner/owner'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
       <div className="container-fluid w-100 p-0">
        <BrowserRouter>
        
        <Owner/>
     
        </BrowserRouter>
       </div>
        
    </>   
  )
}

export default App;