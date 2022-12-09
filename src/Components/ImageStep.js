import React from 'react'

const ImageStep = () => {
  return (
    <div className='App'>


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
        <button className='next-btn' >Submit</button>
      </div>
      <div className='inputcontainer' >
        <button className='previous-btn'  >Previous</button>
      </div>


    </div>
  )
}

export default ImageStep