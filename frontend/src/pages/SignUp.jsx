import { useState } from 'react';
import signUp from '../assets/signUp.png';
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();

    return <div>
        <div className="flex flex-col sm:flex-row justify-center pt-5">
                <img className = "sm:w-1/2 ml-10 mt-3" src={signUp} alt="" />
            <div className="w-half sm:w-1/3 mt-5 shadow-md bg-white p-4 rounded-lg">
                <div className="flex justify-between" > 
                    <h1 className="text-3xl font-bold text-myPurple">Let us know <span className="text-myRed text-3xl">!</span></h1>
                    <button className="font-bold text-myPurple underline" onClick={()=> navigate('/signin')}>Sign <span className="text-myRed">in</span></button>
                </div>
                <br />
                <br />
                <input type="text" className="shadow-md w-full pb-1" placeholder="First Name" />
                <br />
                <br />
                <input type="text" className="shadow-md w-full pb-1" placeholder="Last Name" />
                <br />
                <br />
                <input type="text" className="shadow-md w-full pb-1" placeholder="Password" />
                <br />
                <br />
                <input type="text" className="shadow-md w-full pb-1 " placeholder="Retype Password" />
                <br />
                <br />
                <select className="shadow-md w-full pb-1 font-weight-lighter" name="Contact Mode" >
                    <option  value="">Contact Mode</option>
                   <option value="email">Email</option>
                </select>
                <br />
                <br />
                <input type="text" className="shadow-md w-full pb-1" placeholder="Enter Email" required/>
                <br />
                <br />
                <br />
                <button className="w-full bg-myPurple text-white font-bold rounded-lg p-3"> Sign Up</button>
            </div>
        </div>
    </div>
}