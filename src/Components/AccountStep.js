import React from 'react'

const AccountStep = () => {
  return (
    <div className='App' >
      <div className="mx-2 w-full flex-1">
       <label className="inputfiledlebel">Email:*</label>
        <div >
          
          <input
            type="email"
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
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
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
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
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
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
           name="confirmpassword"
            placeholder="Confirm Password"
            type="password"
            className="inputfield"
            required
          />
        </div>
      </div>
      
       <div className='inputcontainer'>
       <button className='btn'  >Next</button>
       </div>    
    </div>
  )
}

export default AccountStep