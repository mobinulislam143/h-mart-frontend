import axios from 'axios'
import { create } from 'zustand'

const BaseUrl = "https://h-mart-api.onrender.com"
// const BaseUrl = "https://h-mart.vercel.app"


const ProductStore = create((set) =>({
    BrandList:[],
    CategoryList:[],
    SliderList:[],
    ListBySmilier:[],
    ListByRemark:[],
    ProductList:[],

    SearchKeyword:"",
    SetSearchKeyword:async(keyword)=>{
        set({SearchKeyword:keyword})
    },

   

    ProductListRequest: async () => {
        try {
            let res = await axios.get(`${BaseUrl}/api/AllProduct`); // Using absolute URL
            if (res.data['status'] === 'success') {
                set({ ProductList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    },
    BrandListRequest:async() =>{
        
        try {
            let res = await axios.get(`${BaseUrl}/api/ProductBrandList`); 
            if (res.data['status'] === 'success') {
                set({BrandList:res.data['data']})
            }
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    },
    CategoryListRequest:async()=>{
        let res = await axios.get(`${BaseUrl}/api/ProductCategoryList`)
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']})
        }
    },
 
// product
    ListProduct: null,
    ListByBrandRequest:async(BrandID)=>{
        set({ListProduct:null})
        let res= await axios.get(`${BaseUrl}/api/ProductListByBrand/${BrandID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByKeywordRequest:async (Keyword)=>{
        set({ListProduct:null})
        let res=await axios.get(`${BaseUrl}/api/ProductListByKeyword/${Keyword}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByCategoryRequest:async (CategoryID)=>{
        set({ListProduct:null})
        let res= await axios.get(`${BaseUrl}/api/ProductListByCategory/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']}) 
        }
    },
    ListByFilterRequest:async(postBody)=>{
        try{
            set({ListProduct:null})
            let res=await axios.post(`${BaseUrl}/api/ProductListByFilter`,postBody);
            if(res.data['status']==="success"){
                set({ListProduct:res.data['data']})
            }
        }catch(err){
            console.error("Error in Axios request:", err.toString());
        }
    },

    ListByRemarkRequest:async(Remark)=>{
        let res = await axios.get(`${BaseUrl}/api/ProductListByRemark/${Remark}`)
        if(res.data['status']==='success'){
            set({ListByRemark:res.data['data']})
        }
    },

    Details:null,
    DetailsRequest:async(id)=>{
        let res=await axios.get(`${BaseUrl}/api/ProductDetails/${id}`);
        if(res.data['status']==="success"){
            console.log("Mahi")
            set({Details:res.data['data']})
        }
    },
    
    ReviewList:null,
    ReviewListRequest:async(id)=>{
        let res=await axios.get(`${BaseUrl}/api/ProductReviewList/${id}`);
        if(res.data['status']==="success"){
            set({ReviewList:res.data['data']})
        }
    },

    ListBySmilierRequest:async(CategoryID)=>{
        let res = await axios.get(`${BaseUrl}/api/ProductListBySmilier/${CategoryID}`)
        if(res.data['status']==='success'){
            set({ListBySmilier:res.data['data']})
        }
    },
    
    
}))

export default ProductStore