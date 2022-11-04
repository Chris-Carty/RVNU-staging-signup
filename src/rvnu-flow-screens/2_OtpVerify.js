import React, { useState, useEffect } from 'react'
import SmsIcon from '@mui/icons-material/Sms';
import FormWrapper from '../rvnu-components/FormWrapper'
import Subtitle from '../rvnu-components/Subtitle'
import HelperText from '../rvnu-components/HelperText'
import FormButton from '../rvnu-components/Button'
import Emoji from '../rvnu-components/Emoji'
import ErrorMsg from '../rvnu-components/ErrorMsg';
import api from '../utils/api'
import OtpInput from 'react-otp-input';


export default function VerifyOtp({activeStep, setActiveStep}) {

  // Loading Spinner for button
  const [loading, setLoading] = useState(false);
  // Error messages
  const [error, setError] = useState(false);
  // OTP Entered must be six digits
  const [inputOtp, setInputOtp] = useState();
  // Disbale button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Remove error text
    setError(false)
    // Disable button whilst OTP input legnth < 6
    if (inputOtp == null) {
        setIsButtonDisabled(true);
    } else if (inputOtp.length === 6) {
        setIsButtonDisabled(false);
    } else {
        setIsButtonDisabled(true);
    }
  }, [inputOtp]);

  // If OTP lenght equals 6, verfiy it. 
  const isValidOtp = () => {

    if (inputOtp == null) {
      setError(true)
    } else if (inputOtp.length === 6) {
      console.log(inputOtp)
      setLoading(true)
    } else {
      setError(true)
    }
  }


  /*
  Hey {firstName} <Emoji symbol="👋"/> 
  <span> </span>
  enter the 6-digit code sent to: 
  <span> </span>
  <span style={{fontWeight: 'bold', color: 'black'}}>
    {phoneNumber} 
  </span>.
  */


  return (

    <FormWrapper>
      <Subtitle subtitleText={"Verify one-time passcode"} >
        <SmsIcon margin-right={10}/>
      </Subtitle>
      <HelperText text={"Enter the 6-digit code sent to your phone."} />
      <OtpInput
        value={inputOtp}
        onChange={e => setInputOtp(e)}
        numInputs={6}
        separator={false}
        shouldAutoFocus={true}
        isInputNum={true}
        hasErrored={error}

         inputStyle={{
                  width: "100%",
                  height: "3rem",
                  margin: "20px 4px",
                  fontSize: "20px",
                  borderRadius: 5,
                  border: "2px solid rgba(0,0,0,0.9)"
                }}
          
         errorStyle={{
                  border: "2px solid rgba(255, 0, 0, 0.7)"
                }}
      />
      <FormButton
      loading={loading}
      isButtonDisabled={isButtonDisabled}
      buttonText={"Next"}
      onClick={ () => isValidOtp() }
      >
      </FormButton>
      { error ? <ErrorMsg errorText={'Invalid code, please try again.'} /> : <p></p> }
    </FormWrapper>

  )
}