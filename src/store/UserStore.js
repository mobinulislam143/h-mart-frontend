import axios from 'axios';
import Cookie from "js-cookie";
import { create } from 'zustand';
import { getEmail, setEmail, unauthorized } from '../utility/utility';

const BaseUrl = "https://h-mart-api.onrender.com";

const UserStore = create((set) => ({
    isLogin: () => {
        return !!Cookie.get('token');
    },

    LoginFormData: { email: "" },
    LoginFormOnChange: (name, value) => {
        set((state) => ({
            LoginFormData: {
                ...state.LoginFormData,
                [name]: value
            }
        }));
    },

    isFormSubmit: false,

    UserOtpRequest: async (email) => {
        try {
            set({ isFormSubmit: true });
            const res = await axios.post(`${BaseUrl}/api/userOtp/${email}`);
            setEmail(email);
            set({ isFormSubmit: false });
            console.log(email)
            return res.data.status === 'success';
        } catch (err) {
            set({ isFormSubmit: false });
            return false;
        }
    },

    OTPFormData: { otp: "" },
    OTPFormOnChange: (name, value) => {
        set((state) => ({
            OTPFormData: {
                ...state.OTPFormData,
                [name]: value
            }
        }));
    },

    VerifyLoginRequest: async (otp) => {
            set({ isFormSubmit: true });
            const email = getEmail();
            const res = await axios.post(`${BaseUrl}/api/VerifyLogin/${email}/${otp}`, null, {
                headers: {
                    'token': Cookie.get('token')
                }
            });
            if (res.data.status === 'success') {
                const token = res.data.token;
                Cookie.set('token', token, { expires: 7 }); 
            }
            set({ isFormSubmit: false });
            return res.data.status === "success";  
    },

    UserLogoutRequest: async () => {
            set({ isFormSubmit: true });
            const res = await axios.get(`${BaseUrl}/api/UserLogout`, {
                headers: {
                    'token': Cookie.get('token') 
                }
            });
            Cookie.remove('token');
            set({ isFormSubmit: false });
            return res.data.status === "success";
   
    },

    ProfileForm: {
        cus_add: "",
        cus_city: "",
        cus_country: "",
        cus_fax: "",
        cus_name: "",
        cus_phone: "",
        cus_postcode: "",
        cus_state: "",
        ship_add: "",
        ship_city: "",
        ship_country: "",
        ship_name: "",
        ship_phone: "",
        ship_postcode: "",
        ship_state: ""
    },
    ProfileFormChange: (name, value) => {
        set((state) => ({
            ProfileForm: {
                ...state.ProfileForm,
                [name]: value
            }
        }));
    },

    ProfileDetails: null,
    ProfileDetailsRequest: async () => {
            const res = await axios.get(`${BaseUrl}/api/ReadProfile`, {
                headers: {
                    'token': Cookie.get('token') 
                }
            });
            if (res.data.data.length > 0){
                set({ ProfileDetails: res.data.data[0] });
                set({ ProfileForm: res.data.data[0] });
            } else {
                set({ ProfileDetails: [] });
            }
    },

    ProfileSaveRequest: async (PostBody) => {
        try {
            set({ ProfileDetails: null });
            const res = await axios.post(`${BaseUrl}/api/UpdateProfile`, PostBody, {
                headers: {
                    'token': Cookie.get('token') 
                }
            });
            return res.data.status === "success";
        } catch (e) {
            unauthorized(e.response.status);
            return false;
        }
    }
}));

export default UserStore;
