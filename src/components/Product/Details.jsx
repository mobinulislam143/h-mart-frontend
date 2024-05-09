import { useState } from "react";
import parse from 'html-react-parser';
import ProductStore from "../../store/ProductStore.js";
import ProductImage from "./ProductImage.jsx";
import Reviews from "./Reviews.jsx";
import CartStore from "../../store/CartStore.js";
import DetailsSkeleton from "../../ProductSkeleton/DetailsSkeleton.jsx";
import toast from 'react-hot-toast'
import CartSubmitButton from "../Cart/CartSubmitButton.jsx";
import WishSubmitButton from "../Wish/WishSubmitButton.jsx";
import WishStore from "../../store/WishStore.js";

const Details = () => {

    const {Details}= ProductStore()
    const {CartSaveRequest, CartListRequest,  } = CartStore()
    const {SaveWishListRequest,WishListRequest} = WishStore()

    const [CartForm, SetCartForm] = useState({productID: "", color: "", qty: "1", size: ""})
    const CartFormOnChange = (key, value)=>{
        SetCartForm({
            ...CartForm,
            [key]:value
        })
    }

    const incrementqty=()=>{
        SetCartForm({
            ...CartForm,
            qty: parseInt(CartForm.qty, 10) +1
        })
    }

    const decrementqty=()=>{
        if(CartForm.qty>1){
            SetCartForm({
                ...CartForm,
                qty: parseInt(CartForm.qty,10)-1
            })
        }
    }

    const AddCart = async(productID) =>{
        let res = await CartSaveRequest(CartForm, productID)
        if(res){
            toast.success("Cart Item Added")
            await WishListRequest()
        }else{
            toast.error("Please fill up form!!!")
        }
    }
    const AddWish = async(productId)=> {
        let res =await SaveWishListRequest(productId)
        if(res){
            toast.success("Product is add in your wishlist.")
            await CartListRequest()
        }else{
            toast.error("Please fill up form!!!")
        }
    }


    if(Details===null){
         return   <DetailsSkeleton/> 
    }
    else {
        return (
            <div>
                <div className="container mt-2">
                   <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImage/>
                        </div>
                        <div className="col-md-5 p-3">
                                <h4>{Details[0]['title']}</h4>
                                <p className="text-muted bodySmal my-1">Category: {Details[0]['category']['categoryName']}</p>
                                <p className="text-muted bodySmal my-1">Brand: {Details[0]['brand']['brandName']}</p>
                                <p className="bodySmal mb-2 mt-1">{Details[0]['shortDes']}</p>

                                    {
                                        Details[0]['discount']?(
                                            <span className="bodyXLarge">Price: <strike class="text-secondary">{Details[0]['price']}</strike> {Details[0]['discountPrice']} </span>
                                        ):(
                                            <span className="bodyXLarge">Price: {Details[0]['price']}</span>
                                        )
                                    }


                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Size</label>
                                        <select value={CartForm.size} onChange={(e)=>{CartFormOnChange('size', e.target.value)}} className="form-control my-2 form-select">
                                            <option value="">Size</option>
                                            {
                                                Details[0]['details']['size'].split(",").map((item,i)=>{
                                                    return  <option key={i+1} value={item}>{item}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4  p-2">
                                        <label className="bodySmal">Color</label>
                                        <select value={CartForm.color} onChange={(e)=>{CartFormOnChange('color', e.target.value)}} className="form-control my-2 form-select">
                                            <option value="">Color</option>
                                            {
                                                Details[0]['details']['color'].split(",").map((item,i)=>{
                                                    return  <option key={i+1} value={item}>{item}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4  p-2">
                                        <label className="bodySmal">qty</label>
                                        <div className="input-group my-2">
                                            <button onClick={decrementqty} className="btn btn-outline-secondary">-</button>
                                            <input value={CartForm.qty} type="text" className="form-control bg-light text-center" readOnly />
                                            <button onClick={incrementqty}  className="btn btn-outline-secondary">+</button>
                                        </div>
                                    </div>
                                    <div className="col-4  p-2">

                                        <CartSubmitButton  onClick={async ()=>{await AddCart(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Cart" />
                                    </div>
                                    <div className="col-4  p-2">

                                        <WishSubmitButton  text="Add to Wish" onClick={async () => {await AddWish(Details[0]['_id'])}} className="btn w-100 btn-success" />
                                    </div>
                                </div>
                        </div>
                   </div>
                   <div className="row mt-3">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">Specifications</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                                {
                                    parse(Details[0]['details']['des'])
                                }
                            </div>
                            <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">
                               <Reviews/>
                            </div>
                        </div>                  
                   </div>
                </div>
            </div>
        );
    }

};
export default Details;