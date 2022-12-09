import React from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';

const Progress = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Account</Typography>,
      icon: <LockOpenRoundedIcon  />,
    },
    {
      label: <Typography>Personal</Typography>,
      icon: <AccountCircleRoundedIcon />,
    },
    {
      label: <Typography>Image</Typography>,
      icon: <CameraAltRoundedIcon />,
    },
    {
      label: <Typography>Finish</Typography>,
      icon: <CheckCircleOutlineRoundedIcon />,
    },
  ];


  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} className="stppercontainer"  >
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
           
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "rgb(23, 223, 57)" : "rgba(0, 0, 0, 0.649)",
                  
              }}
              icon={item.icon }
            >
              {item.label}
            </StepLabel>
           
          </Step>
        ))}
      </Stepper>
 
    </>
  );
};

export default Progress;