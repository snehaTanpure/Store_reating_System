import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Owner from './owner/owner'
import Admin from './admin/admin'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
       <div className="container-fluid w-100 p-0">
        
        <Admin/>
        {/* <Owner/> */}
     
       </div>
        </BrowserRouter>
    </>   
  )
}

export default App
