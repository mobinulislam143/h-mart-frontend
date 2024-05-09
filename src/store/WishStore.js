import {create} from 'zustand'
import axios from 'axios'
import { unauthorized } from '../utility/utility'
import Cookie from "js-cookie";


const BaseUrl = "https://h-mart-api.onrender.com"
// const BaseUrl = "https://h-mart.vercel.app"


const WishStore = create((set) => ({
    isWishSubmit: false,

   SaveWishListRequest : async(productId)=>{
        try{
            set({isWishSubmit: true})
            let res = await axios.post(BaseUrl+'/api/saveWishList/',{productID: productId}, { headers: {
                'token': Cookie.get('token') 
            }})
            return res.data['status'] === "success";
        }catch(error){
            console.log(error)

            if (error.response) {
                unauthorized(error.response.status);
            } else {
                console.error('Network error or server did not respond:', error.message);
            }
        }
        finally {
            set({isWishSubmit:false})
        }
    },
    
    WishList: null,
    WishCount: 0,
    WishTotal: 0,
    WishListRequest: async()=>{
        // try{
            let res = await axios.get(`${BaseUrl}/api/WishList`,{ headers: {
                'token': Cookie.get('token') 
            }})
            set({WishList: res.data['data']})
            set({WishCount: (res.data['data']).length})
       
    },
    RemoveWishListRequest: async(productID) => {
        try{
            set({WishList: null})
            await axios.post(`${BaseUrl}/api/RemoveWishList/`, {"productID":productID},{ headers: {
                'token': Cookie.get('token') 
            }});

        }
        catch(error){
            console.log(error)
            if (error.response) {
                unauthorized(error.response.status);
            } else {
                console.error('Network error or server did not respond:', error.message);
            }

        }
    }




}))

export default WishStore