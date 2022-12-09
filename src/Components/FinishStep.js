import React from 'react'
import Progress from './Progress'

const FinishStep = () => {
    return (
        <div className="App">
            <Progress activeStep={3} />
            <div>
                <h4>SUCCESS!</h4>
                <h6> Your Have <br></br>Successfully <br></br>Signed Up.</h6>
            </div>
        </div>
    )
}

export default FinishStep