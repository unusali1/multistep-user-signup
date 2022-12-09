import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Progress from './Progress';
import { multistepContext } from '../StepContext'

const ImageStep = () => {
  const navigate = useNavigate();
  const { setStep, userData, setUserData } = useContext(multistepContext)
  const { currentStep } = useContext(multistepContext);
  const handleChange = () => {
    navigate("/finishStep")
  }
  const handleBack = () => {
    navigate("/personalStep")
  }
  return (
    <div className='App'>
      <Progress activeStep={2} />
      <div className="progressbar">
        <div
          style={{ width: currentStep === 3 ? "75%" : "70%" }}
        ></div>
        <section className='step'>
          <h5>Image Upload :</h5>
          <p>step: {setStep(1)}3 - 4</p>

        </section>
      </div>
      <div className="inputcontainer">
        <label className="imagelabel">Upload Your Photo:</label>
        <div>
          <input
            onChange={(e) => setUserData({ ...userData, "image": e.target.value })}
            value={userData["image"]}
            name="image"
            type="file"
            className="imageinput"
          />
        </div>
      </div>

      <div className="inputcontainer">
        <label className="signaturelabel"> Upload Signature Photo:</label>
        <div>
          <input
            onChange={(e) => setUserData({ ...userData, "signature": e.target.value })}
            value={userData["signature"]}
            name="signature"
            type="file"
            className="imageinput"
          />
        </div>
      </div>

      <div className='inputcontainer'>
        <button className='next-btn' onClick={handleChange} >Submit</button>
      </div>
      <div className='inputcontainer' >
        <button className='previous-btn' onClick={handleBack} >Previous</button>
      </div>


    </div>
  )
}

export default ImageStep