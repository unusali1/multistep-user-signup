import React, { useState } from 'react'

import App from "./App";

export const multistepContext = React.createContext();
const StepContext = () => {
    const [currentStep ,setStep ] = useState(1);
    const [userData, setUserData] = useState([]);
   

  return (
    <div>
        <multistepContext.Provider value={{currentStep, setStep,userData, setUserData}}>
         <App />
        </multistepContext.Provider>
    </div>
  )
}

export default StepContext