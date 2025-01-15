import React, { useState } from 'react'
import Loader from '../Loader/loader'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
const ForgotPassword = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [otpValidate,setOtpValidate] = useState(false);
    const [loader,setLoader] = useState(false)
    const [contentVal,setContentValue] = useState("Submit Your Email")

    const [inputField, setInputField] = useState({ email: "", otp: "", newPassword: "" });

    const handleSubmit = () => {
        if (!emailSubmit) {

            sendOtp();
        }else if(emailSubmit && !otpValidate){
            
            verifyOTP();

        }else{
            changePassword()
        }
    }

    const changePassword = async()=>{
        setLoader(true)
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }


    const verifyOTP = async()=>{
        setLoader(true);
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }

    const sendOtp = async()=>{
        setLoader(true);
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
    }



    const handleOnChange =(event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
    }
    return (
        <div className='w-full'>
            {/* // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // . */}

            <div className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer border-2 hover:bg-white hover:text-black' onClick={() => handleSubmit()}>{contentVal}</div>
            {loader && <Loader />}
            <ToastContainer/>
        </div>
    )
}

export default ForgotPassword