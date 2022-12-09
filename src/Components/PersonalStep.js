import React from 'react'

const PersonalStep = () => {
  return (
    <div className='App'>
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

        <button className='next-btn' >Next</button>
      </div>
      <div className='inputcontainer' >
        <button className='previous-btn'  >Previous</button>
      </div>
    </div>
  )
}

export default PersonalStep