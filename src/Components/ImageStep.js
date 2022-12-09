import React from 'react'
import { useNavigate } from 'react-router-dom';
import Progress from './Progress';

const ImageStep = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/finishStep")
  }
  const handleBack = () => {
    navigate("/personalStep")
  }
  return (
    <div className='App'>
      <Progress activeStep={2} />
    <div className="inputcontainer">
        <label className="imagelabel">Upload Your Photo:</label>
        <div>
          <input

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