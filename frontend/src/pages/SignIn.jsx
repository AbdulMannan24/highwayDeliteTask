import signIn from '../assets/signIn.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { Api } from '../apiConfig';

export function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignIn() {
        try {
            let response = await axios.post(Api + '/signIn', {
                email,
                password
            })
            if (response.data.message == "success") {
                window.alert("Login Successfull!!!");
                localStorage.setItem("token", response.data.token);
            } else {
                window.alert(response.data.details);
            }
        } catch (error) {
            console.log(error);
            window.alert("Backend Error");
        }
    }

    return <div>
    <div className="flex flex-col sm:flex-row justify-center pt-5">
        <img className = " w-full sm:w-1/2 ml-10 mt-3" src={signIn} alt="" />
        <div className="w-half sm:w-1/3 h-1/2   mt-12 shadow-md bg-white p-4 rounded-lg">
            <div className="flex justify-between" > 
                <h1 className="text-3xl font-bold text-myPurple">Fill What we Know <span className="text-myRed text-3xl">!</span></h1>

            </div>
            <br />
            <input type="text" className="shadow-md w-full pb-1" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password" className="shadow-md w-full pb-1 " placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <br />
            <button className="w-full bg-myPurple text-white font-bold rounded-lg p-3" onClick = {handleSignIn}> Sign In</button>
            <br />
            <br />
            <button className="w-full bg-white border border-myPurple text-myPurple font-bold rounded-lg p-3"
                onClick = {()=> navigate('/')}> Sign Up</button>
        </div>
   
        
    </div>
</div>
}