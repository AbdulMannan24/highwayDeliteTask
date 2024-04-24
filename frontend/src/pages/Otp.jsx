export function Otp() {
return <div className="flex justify-center m-20 p-10 ">
        <div className="w-1/3 text-center border p-10 shadow">
            <h1 className="text-3xl font-bold text-myPurple">Enter OTP</h1>
            <br />
            <input type="text" placeholder="Enter 6 Digit OTP" className="border border-myPurple w-full" />
            <br />
            <br />
            <button className="border bg-myPurple text-white mx-5 px-5 rounded-lg">Verify</button>
            <button className="border bg-white text-myPurple mx-5 px-5 rounded-lg">Resend</button>
        </div>
  </div>

}