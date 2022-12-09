import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Progress from './Progress';
import { multistepContext } from '../StepContext'

const PersonalStep = () => {
  const navigate = useNavigate();
  const { setStep, userData, setUserData } = useContext(multistepContext)
  const { currentStep } = useContext(multistepContext);
  const handleChange = () => {
    navigate("/imageStep")
  }
  const handleBack = () => {
    navigate("/")
  }
  return (
    <div className='App'>
      <Progress activeStep={1} />
      <div className="progressbar">
        <div
          style={{ width: currentStep === 2 ? "50%" : "50%" }}
        ></div>
        <section className='step'>
          <h5>Personal Information :</h5>
          <p>step: {setStep(1)}2 - 4</p>

        </section>
      </div>
      <div className="inputcontainer">
        <label className="firstnamelabel">First Name:*</label>
        <div >
          <input
            onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })}
            value={userData["firstname"]}
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
            onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })}
            value={userData["lastname"]}
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
            onChange={(e) => setUserData({ ...userData, "contact": e.target.value })}
            value={userData["contact"]}
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
            onChange={(e) => setUserData({ ...userData, "alternativecontact": e.target.value })}
            value={userData["alternativecontact"]}
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