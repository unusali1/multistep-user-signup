import React from 'react'
import { useNavigate } from 'react-router-dom'
import Progress from './Progress';

const PersonalStep = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/imageStep")
  }
  const handleBack = () => {
    navigate("/")
  }
  return (
    <div className='App'>
      <Progress activeStep={1} /> 
      <div className="inputcontainer">
        <label className="firstnamelabel">First Name:*</label>
        <div >
          <input

            name="firstname"
            placeholder="First Name"
            type="text"
            className="inputfield"
          />
        </div>
      </div>
      <div className="inputcontainer">
        <label className="firstnamelabel">Last Name:*</label>
        <div >
          <input

            name="lastname"
            placeholder="Last Name"
            type="text"
            className="inputfield"
          />
        </div>
      </div>

      <div className="inputcontainer">
        <label className="contactlabel">Contact No:*</label>
        <div >
          <input

            name="contact"
            placeholder="Contact No"
            type="number"
            className="inputfield"
          />
        </div>
      </div>

      <div className="inputcontainer">
        <label className="altercontact">Alternative Contact No:*</label>
        <div>
          <input

            name="alternativecontact"
            placeholder="Alternative Contact No"
            type="number"
            className="inputfield"
          />
        </div>
      </div>


      <div className='inputcontainer'>

        <button className='next-btn' onClick={handleChange} >Next</button>
      </div>
      <div className='inputcontainer' >
        <button className='previous-btn' onClick={handleBack} >Previous</button>
      </div>
    </div>
  )
}

export default PersonalStep