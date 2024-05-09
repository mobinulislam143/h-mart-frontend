import axios from "axios";
import {create} from "zustand"
import { unauthorized } from "../utility/utility";
const BaseUrl = "https://h-mart-api.onrender.com"
import Cookie from "js-cookie";

// const BaseUrl = "https://h-mart.vercel.app"



const CartStore = create((set) => ({


    isCartSubmit: false,
   
    CartSaveRequest: async(postBody, productID)=> {
        try{
            set({isCartSubmit: true})
            postBody.productID = productID
            let res = await axios.post(`${BaseUrl}/api/SaveCartList`, postBody,{ headers: {
                'token': Cookie.get('token') 
            }})
            // const res = await axios.get(`${BaseUrl}/api/UserLogout`, {
                
            // });
            return res.data['status'] === "success";
        }catch(error){
            console.error('Error while removing cart list:', error);
            if (error.response) {
                unauthorized(error.response.status);
            } else {
                console.error('Network error or server did not respond:', error.message);
            }
          
        }finally{
            set({isCartSubmit: false})
        }
    }, 

    CartList: null,
    CartCount: 0,
    CartTotal: 0,
    CartVatTotal:0,
    CartPayableTotal: 0,

    CartListRequest: async () => {
        // try {
            let res = await axios.get(`${BaseUrl}/api/CartList`, { headers: {
                'token': Cookie.get('token') 
            }});
            set({ CartList: res.data['data'] });
            set({ CartCount: res.data['data'].length });
            let total = 0;
            let vat = 0;
            let payable = 0
            res.data['data'].forEach((item,i)=>{
                if(item['product']['discount']===true){
                    total = total+parseInt(item['qty'])*parseInt(item['product']['discountPrice'])
                }else{
                    total = total+parseInt(item['qty'])*parseInt(item['product']['price'])
                }
            })

            vat = total*0.05
            payable = vat+total
            set({CartTotal: total})
            set({CartVatTotal: vat})
            set({CartPayableTotal: payable})

        // } catch (error) {
        //        console.error('Error while removing cart list:', error);
        // if (error.response) {
        //     unauthorized(error.response.status);
        // } else {
        //     console.error('Network error or server did not respond:', error.message);
        // }
           
        // } 
    },
    

    RemoveCartListRequest : async (cartId) => {
        try {
            set({CartList: null})
            await axios.post(`${BaseUrl}/api/RemoveCartList/`, { '_id': cartId }, { headers: {
                'token': Cookie.get('token') 
            }});
        } catch (error) {
            console.error('Error while removing cart list:', error);
        if (error.response) {
            unauthorized(error.response.status);
        } else {
            console.error('Network error or server did not respond:', error.message);
        }
        }
    },

    CreateInvoiceRequest: async()=>{
        try{
            set({isCartSubmit: true})
            let res =await axios.get(`${BaseUrl}/api/CreateInvoice`,{ headers: {
                'token': Cookie.get('token') 
            }});
            window.location.href = res.data['data']['GatewayPageURL']
        }catch(error){
            console.error('Error while removing cart list:', error);
        if (error.response) {
            unauthorized(error.response.status);
        } else {
            console.error('Network error or server did not respond:', error.message);
        }
        }finally{
            set({isCartSubmit: false})
        }
    },

    InvoiceList: null,
    InvoiceListRequest: async()=>{
        try{
            let res =await axios.get(`${BaseUrl}/api/InvoiceListService`, { headers: {
                'token': Cookie.get('token') 
            }})
            set({InvoiceList: res.data['data']})

        }catch(error){
           console.error('Error while removing cart list:', error);
        if (error.response) {
            unauthorized(error.response.status);
        } else {
            console.error('Network error or server did not respond:', error.message);
        }
            
        }
    },

    InvoiceDetails: null,
    InvoiceDetailsRequest: async(id)=> {
        try{
            let res =await axios.get(`${BaseUrl}/api/invoiceProductList/${id}`, { headers: {
                'token': Cookie.get('token') 
            }});
            set({InvoiceDetails: res.data['data']})
        }catch(error){
            console.error('Error while removing cart list:', error);
            if (error.response) {
                unauthorized(error.response.status);
            } else {
                console.error('Network error or server did not respond:', error.message);
            }

        }
    }


}))

export default CartStore