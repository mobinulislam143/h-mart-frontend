import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import '../styles/CartPage.css'
import CartStore from '../../store/CartStore';
import { Link } from 'react-router-dom';
import CartSkeleton from '../../ProductSkeleton/CartSkeleton';
import toast from 'react-hot-toast';
import CartSubmitButton from './CartSubmitButton';


function Cart(props) {
    const {CartList ,CartTotal ,CartVatTotal ,CartPayableTotal ,CartListRequest ,RemoveCartListRequest , CreateInvoiceRequest } = CartStore()

    useEffect(()=>{
        (async()=>{
            await CartListRequest()
        })()
    },[])

    const RemoveCart = async(cartId)=>{
        try {
            await RemoveCartListRequest(cartId);
            await CartListRequest();
            toast.success("Cart Remove Successfully.")
          } catch (error) {
            toast.success("Cart can't Remove.")

            console.error('Error in RemoveCart:', error);
          }

    }

    if(CartList===null){
        return <CartSkeleton/>
    }else if(CartList.length===0){
        return( <>
            <div className='container text-center'>
                <h2>404</h2>
                <h3>No product added in cart</h3>
            </div>
        </>)
    }else{
        return (
            <>
                <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                    <div className='container'>
                        <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                            <div className='title text-center'>
                                <h2 style={{fontWeight:'400', fontSize:'60px',}}>Cart</h2>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                    <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                    <span>//</span>
                                    <span className='carts'> Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-4'>
                    <h3 className='cart-page-title justify-start'>Your Cart items</h3>
                    <div className='table-content table-responsive cart-table-content'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   CartList?(
                                    CartList.map((item , index)=> {

                                        let price = item['product']['price']
                                        if(item['product']['discount']===true){
                                            price = item['product']['discountPrice']
                                        }
                                        return(
                                            <tr key={index}>
                                                <td className='align-middle'>
                                                    <a href={`/details/${item['productID']}`}>
                                                        <img src={item['product']['image']} style={{ maxWidth: '100px', height: 'auto' }} />
                                                    </a>
                                                </td>
                                                <td className='align-middle title'>
                                                <a href={`/details/${item['productID']}`}>
                                                   <span>{item['product']['title']}</span> <br/>
                                                   
                                                </a>
                                                </td>
                                                <td className='align-middle'>৳{item['product']['price']}<br/>
                                                </td>

                                                <td className='text-center align-middle'>
                                                    <div className='btn-group' role='group'>
                                                    
                                                        <span>{item['qty']}</span>
                                                    
                                                    </div>
                                                </td>
                                                <td className='text-center align-middle'>
                                                    <div className='btn-group' role='group'>
                                                    
                                                        <span>৳{parseInt(price)*parseInt(item['qty'])}</span>
                                                    
                                                    </div>
                                                </td>
                                              
                                                
                                                <td className='align-middle text-center'>
                                                    <div className='icon'>
                                                    <Link onClick={(e) => { e.preventDefault(); RemoveCart(item['_id'], item['productID']) }} className='btn btn-outline-danger'>
                                                        Delete
                                                    </Link>
                                                        
    
                                                       
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                       
                                    })
                                   ):(
                                    <tr>
                                        <td colSpan="6"><CartSkeleton/></td>
                                    </tr>
    
                                   )
                                }
                            </tbody>
                        </table>
                                <div className="my-4 check" style={{background: '#fff' , width: "100%"}}>
                                    <ul className="list-group bg-transparent  list-group-flush w-100">
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                            <span className="float-end">Total: <i className="bi bi-currency-dollar"/>{CartTotal} </span>
                                        </li>
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                            <span className="float-end"> Vat(5%): <i className="bi bi-currency-dollar"/>{CartVatTotal}</span>
                                        </li>
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                           <span className="float-end">  Payable: <i className="bi bi-currency-dollar"/>{CartPayableTotal}</span>
                                        </li>
                                        <li className="list-group-item bg-transparent ">
                                            <span className="float-end">
                                                
                                                <CartSubmitButton text="Check Out" onClick={async() =>{await CreateInvoiceRequest()}} className="btn btn-success" />
                                            </span>
                                        </li>
                                    </ul>

                                </div>
                    </div>
                   <div className='row my-4'>
                    <div className='col-md-4'>
                        <button className='btn same-btn mr-auto'>Continue Shopping</button>
                    </div>
                    <div className='col-md-8 text-end'>
                        <button className='btn same-btn mr-auto mx-4 '>Continue Shopping</button>
                        <button className='btn others mr-auto'>Continue Shopping</button>
                    </div>
                   </div>
                    <div className='row my-4 cartTax'>
                        <div className='col '>
                            <div className='cart-tax'>
                                <h4 className='cart-bottom-title section-bg-gray'> Estimate Shipping And Tax </h4>
                                <div className='tax-wrapper'>
                                    <p>Enter your destination to get a shipping estimate.</p>
                                    <label> * Country</label>
    
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Bangladesh</option>
                                        <option value="1">Afganistan</option>
                                        <option value="2">Philistin</option>
                                        <option value="3">Iran</option>
                                        <option value="3">Irak</option>
                                        <option value="3">Syria</option>
                                        <option value="3">Pakistan</option>
                                        <option value="3">Turkie</option>
                                    </select>
                                    <label> * Region / State</label>
    
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Bangladesh</option>
                                        <option value="1">Afganistan</option>
                                        <option value="2">Philistin</option>
                                        <option value="3">Iran</option>
                                        <option value="3">Irak</option>
                                        <option value="3">Syria</option>
                                   
                                    </select>
                                    <label> * Country</label>
    
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>4702</option>
                                        <option value="1">5241</option>
                                        <option value="2">24254</option>
                                        <option value="3">1414</option>
                                        <option value="3">9672</option>
                                        <option value="3">3752</option>
                                        <option value="3">97272</option>
                                        <option value="3">2172</option>
                                    </select>
                                    <button type='button' className='cart-tax-btn my-4'>GET A QUOTE</button>
                                </div>
                            </div>
                        </div>
                        <div className='col mx-4'>
                            <div className='cart-tax'>
                                <h4 className='cart-bottom-title section-bg-gray'> Estimate Shipping And Tax </h4>
                                <div className='tax-wrapper'>
                                    <p>Enter your coupon code if you have one.</p>
                                    <input type='text' className='form-control' />
                                    <button type='button' className='cart-tax-btn my-4'>APPLY COUPON</button>
                                </div>
                            </div>
                        </div>
                        <div className='col  '>
                            <div className='cart-tax'>
                                <h4 className='cart-bottom-title section-bg-gray'>  Cart Total  </h4>
                                <div className='tax-wrapper'>
                                    <h5>Total products <span>${CartTotal}</span></h5>
                                    <div className='totalShipping'>
                                        <h5 className='font-weight-bold'>Total Shipping</h5>
                                        <ul>
                                            <li>Vat (5%): <span> ${CartVatTotal}</span></li>
                                            <li>Payable:   <span> ${CartPayableTotal}</span></li>
                                        </ul>
                                    </div>
                                    <h4>Grand Total <span> ${CartPayableTotal}.00</span></h4>
                                    <CartSubmitButton text="Check Out" onClick={async() =>{await CreateInvoiceRequest()}} className="btn btn-success" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Cart;
