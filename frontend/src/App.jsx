import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Show from './Components/Show'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/show" element={<Show/>} />
      </Routes>
    </BrowserRouter>
  
  
  </>
  )
}

export default App
