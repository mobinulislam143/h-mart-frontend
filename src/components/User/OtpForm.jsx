import React from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ValidityHelper from '../../utility/ValidityHelper';
import UserSubmitButton from './UserSubmitButton';
import UserStore from '../../store/UserStore';

const OtpForm = () => {
    const { OTPFormData, OTPFormOnChange, VerifyLoginRequest, LoginFormData } = UserStore();

    const navigate = useNavigate();

    const onFormSubmit = async () => {
        if (ValidityHelper.IsEmpty(OTPFormData.otp)) {
            toast.error("Valid PIN Required")
        } else {
            const res = await VerifyLoginRequest(OTPFormData.otp);
            if (res) {
                navigate("/");
            } else {
                toast.error("Something Went Wrong !");
            }
        }
    };

    return (
        <div className="container my-4">
            <div className="card p-4 col-8 m-auto">
                <div className="login-area col-8 m-auto py-4 text-center">
                    <h4 style={{ color: "#234E70", fontSize: "33px", fontWeight: "bold" }}>Enter Verification Code</h4>
                    <p>A verification code has been sent to the <b>{LoginFormData.email}</b> address you provide</p>
                    <input value={OTPFormData.otp} onChange={(e) => { OTPFormOnChange("otp", e.target.value) }} placeholder="Verification" type="text" className="form-control" />

                    <UserSubmitButton onClick={onFormSubmit} submit={false} className="btn mt-3 btn-success w-100" text="Submit" />
                </div>
            </div>
        </div>
    );
};

export default OtpForm;
