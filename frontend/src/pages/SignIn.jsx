import signIn from '../assets/signIn.png'
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();

    return <div>
    <div className="flex flex-col sm:flex-row justify-center pt-5">
        <img className = " w-full sm:w-1/2 ml-10 mt-3" src={signIn} alt="" />
        <div className="w-half sm:w-1/3 h-1/2   mt-12 shadow-md bg-white p-4 rounded-lg">
            <div className="flex justify-between" > 
                <h1 className="text-3xl font-bold text-myPurple">Fill What we Know <span className="text-myRed text-3xl">!</span></h1>

            </div>
            <br />
            <input type="text" className="shadow-md w-full pb-1" placeholder="Email" />
            <br />
            <br />
            <input type="text" className="shadow-md w-full pb-1 " placeholder="Password" />
            <br />
            <br />
            <button className="w-full bg-myPurple text-white font-bold rounded-lg p-3"> Sign Up</button>
            <br />
            <br />
            <button className="w-full bg-white border border-myPurple text-myPurple font-bold rounded-lg p-3"
                onClick = {()=> navigate('/')}> Sign Up</button>
        </div>
   
        
    </div>
</div>
}