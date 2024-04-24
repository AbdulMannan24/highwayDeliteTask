import axios from 'axios';
import { useState } from 'react';
import { Api } from '../apiConfig';
import { useNavigate } from 'react-router-dom';

export function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  
  async function verifyOtp() {
    try{
      let token = 'Bearer ' + localStorage.getItem("token");
      let response = await axios.get(Api + '/otp/verify/' + otp, { 
        headers: { authorization: token}
      })
      if (response.data.message == "success") {
        window.alert("Email Verified!!!");
        navigate('/signin');
      } else {
        window.alert(response.data.details);
      }
    } catch(error) {
        console.log(error);
        window.alert("Backend Error");
    }
  }

  async function resendOtp() {
    try{
      let token = 'Bearer ' + localStorage.getItem("token");
      let response = await axios.get(Api + '/otp/resend/' + otp, { 
        headers: { authorization: token}
      })
      if (response.data.message == "success") {
        window.alert("Otp sent to Email");
      } else {
        window.alert(response.data.details);
      }
    } catch(error) {
        console.log(error);
        window.alert("Backend Error");
    }
  }

  return <div className="flex justify-center m-20 p-10 ">
        <div className="sm:w-1/3 text-center border p-10 shadow">
            <h1 className="text-3xl font-bold text-myPurple">Enter OTP</h1>
            <br />
            <input type="text" placeholder="Enter 6 Digit OTP" className="border border-myPurple w-full" 
              onChange={(e)=> setOtp(e.target.value)}/>
            <br />
            <br />
            <button className="border bg-myPurple text-white mx-5 px-5 rounded-lg" onClick={verifyOtp}>Verify</button>
            <button className="border bg-white text-myPurple mx-5 px-5 rounded-lg" onClick={resendOtp}>Resend</button>
        </div>
  </div>

}