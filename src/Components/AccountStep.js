import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Progress from './Progress';
import { multistepContext } from '../StepContext'

const AccountStep = () => {
  const navigate = useNavigate();
  const { setStep,userData,setUserData} = useContext(multistepContext)
  const {currentStep}= useContext(multistepContext);

  const handleChange = (e) => {
    e.preventDefault();
    navigate("/personalStep");
  };
  return (
    <div className='App' >
      <Progress activeStep={0} />
      <div className="progressbar">
        <div
          style={{ width: currentStep=== 1 ? "25%" : "50%"  }}
        ></div>
       <section className='step'>
       <h5>Account Information :</h5>
       <p>step: {setStep(1)}1 - 4</p>
      
       </section>
      </div>
      <div>
       <label className="inputfiledlebel">Email:*</label>
        <div >
          
          <input
            type="email"
            onChange={(e)=>setUserData({...userData, "email" : e.target.value})}
            value={userData["email"]}
            name="email"
            placeholder="Email Id"
            pattern="/\S+@\S+\.\S+/"
            className="inputfield"
            required
          />
        </div>
      </div>
      <div className="inputcontainer">
      <label className="namelebel">UserName:*</label>
        <div>
          <input
          onChange={(e)=>setUserData({...userData, "username" : e.target.value})}
          value={userData["username"]}
            name="username"
            placeholder="Username"
            pattern="([A-Z])[\w+.]{1,}"
            className="inputfield"
            required
          />
        </div>
      </div>
      <div className="inputcontainer">
      <label className="passwordlabel">Password:*</label>
        <div>
          <input
          onChange={(e)=>setUserData({...userData, "password" : e.target.value})}
          value={userData["password"]}
            name="password"
            placeholder="Password"
            type="password"
            className="inputfield"
            required
          />
        </div>
      </div>
      <div className="inputcontainer">
      <label className="confirmlebel">Confirm Password:*</label>
        <div >
          <input
          onChange={(e)=>setUserData({...userData, "confirmpassword" : e.target.value})}
          value={userData["confirmpassword"] || ""}
           name="confirmpassword"
            placeholder="Confirm Password"
            type="password"
            className="inputfield"
            required
          />
        </div>
      </div>
      
       <div className='inputcontainer'>
       <button className='next-btn' onClick={handleChange}  >Next</button>
       </div>    
    </div>
  )
}

export default AccountStep