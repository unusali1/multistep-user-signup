import React from 'react'
import "./App.css";
import AccountStep from "./Components/AccountStep"
import PersonalStep from './Components/PersonalStep';
import ImageStep from './Components/ImageStep';
import FinishStep from './Components/FinishStep';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
 

  return (
  <BrowserRouter>
   <div className='App'>
    <header>
    <h3 style={{textAlign: "center"}}>SIGN UP YOUR USER ACCOUNT</h3>
     <p style={{textAlign: "center"}}>Fill all form field to go to next step</p>
      </header>
     
   </div>
   <Routes>
     <Route path='/' element= {< AccountStep />}></Route>
     <Route path='/personalStep' element= {< PersonalStep />}></Route>
     <Route path='/imageStep' element= {< ImageStep />}></Route>
     <Route path='/finishStep' element= {< FinishStep />}></Route>
   </Routes>
  
  </BrowserRouter>

  )
}

export default App