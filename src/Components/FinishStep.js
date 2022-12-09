import React, { useContext } from 'react'
import Progress from './Progress'
import { multistepContext } from '../StepContext'

const FinishStep = () => {
    const { setStep} = useContext(multistepContext)
    const {currentStep}= useContext(multistepContext);
    return (
        <div className="App">
            <Progress activeStep={3} />
            <div className="progressbar">
        <div
          style={{ width: currentStep=== 1 ? "100%" : "100%"  }}
        ></div>
       <section className='step'>
       <h5>Finish :</h5>
       <p>step: {setStep(1)}4 - 4</p>
      
       </section>
      </div>
            <div>
                <h4>SUCCESS!</h4>
                <h6> Your Have <br></br>Successfully <br></br>Signed Up.</h6>
            </div>
        </div>
    )
}

export default FinishStep