import React from 'react';
import UserSubmitButton from './UserSubmitButton';
import UserStore from '../../store/UserStore';
import ValidityHelper from '../../utility/ValidityHelper';
import toast from "react-hot-toast"
import { useNavigate } from 'react-router';

function Register(props) { 
    let navigate = useNavigate()
    
    const {LoginFormData, LoginFormOnChange, UserOtpRequest} = UserStore()

    const onFormSubmit = async () => {
        try {
            if (!ValidityHelper.IsEmail(LoginFormData.email)) {
                toast.error("Valid email address required");
            } else {
                await UserOtpRequest(LoginFormData.email);
                    navigate('/otp');
              
                console.log(LoginFormData.email);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred. Please try again.");
        }
    };
    
    

    return (
        <div>
            <div className='container my-4'>
                <div className='card  p-4 col-8 m-auto'>
                   <div className='login-area col-8 m-auto py-4 text-center'>
                        <h3 style={{color: "#234E70", fontSize:"33px", fontWeight:"bold", }}>Login</h3>
                        <input value={LoginFormData.email} onChange={(e) => {LoginFormOnChange("email", e.target.value)}} type='email' placeholder='Email' className='form-control p-2 my-2' />
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success w-100" text="Next"/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Register;