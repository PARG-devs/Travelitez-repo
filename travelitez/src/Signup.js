import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import './Signup.css';

const Singup = () => {
  const [toggle,settoggle]=useState(false)
  const [input1,setInput1]=useState("")
  const [a,seta]=useState('')
  return (
    <div className="appName">
          <p className='mainHeading'>Travelitez</p>
          <p className='subHeading'>Make your trip in minutes</p>
          <div className='truck'></div>
          <div className='userIcon'></div>
          <div className='totalLogin'></div>
          {toggle ? <div>
                      <p className='welcome'>Verification</p>
                      <form className='mobileNumber'> 
                           <label htmlFor='OTP'>OTP</label>
                           <input id='OTP' type='tel' placeholder='Enter OTP' required></input>
                           <button className="confirmButton" type='submit'>Confirm</button>
                      </form>
                      <p className='resentOtp'>Resend OTP</p>
                      </div>
           :
           <div>
                <p className='welcome'>Welcome</p>
                      <p className='loginTitle'>Signup or Login</p>
                      <form className='mobileNumber' onSubmit={()=> settoggle(true)}>
                          <label htmlFor='mobileNumber'>Mobile Number</label>
                          <input 
                              id='mobileNumber' 
                              type='text' 
                              pattern='[0-9]{10}'
                              placeholder='Enter mobile number' 
                              required
                              value={input1}
                              onChange={(e)=>{setInput1(e.target.value)}}
                          ></input>
                          <button className='confirmButton' type='submit'>Confirm</button>
                      </form>
                      
                      <p className='or'><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /> OR <TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid /></p>
            </div>
          }
          <p className='agreeMent'>By proceeding,you agree to Travelitez <a  href='aihub.netlify.app' style={{color:'blue',textDecoration:'none'}}>privacy policy,user agreement,T&Cs.</a></p>
          <div className='googleImg'><GoogleLogin
                onSuccess={credentialResponse => {
                  const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                  seta(credentialResponseDecoded)
                  console.log(credentialResponseDecoded)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              </div>
    </div>
  )
}

export default Singup