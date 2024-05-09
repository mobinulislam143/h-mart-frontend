import React from 'react';
import '../styles/Checkout.css'

function Checkout(props) {
    return (
        <div>
            <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>Checkout</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row my-6'>
                    <div className='col-lg-7 my-4'>
                        <h3 > Billing Details</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label> First Name</label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-md-6'>
                                <label> Last Name</label>
                                <input className='form-control' type='text' />
                            </div>
                        </div>
                        <label>Company Name</label>
                        <input className='form-control' type='text' />
                        <label>Country</label>
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
                        <label>Street Address</label>
                        <input className='form-control' type='text' placeholder='House number and street name' />
                        <input className='form-control' type='text' placeholder='Apartment, Suite, unit etc.'/>
                        <label>Town / City</label>
                        <input className='form-control' type='text' />
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <label>State / Country</label>
                                <input type='text' className='form-control'/>
                                <label>Phone</label>
                                <input type='text' className='form-control'/>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <label>Postcode / ZIP</label>
                                <input type='text' className='form-control'/>
                                <label>Email Address</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>
                        <label><input type='checkbox' className='mx-2' /> <span>  Create an account? </span></label>
                        <div className='additional-info-wrap my-4'>
                            <h4 className='my-4'> Additional Information</h4>
                            <label> Order Notes</label>
                            <textarea className='form-control my-4' placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                            <label><input type='checkbox' className='mx-2' /> <span>  Ship to a different address?  </span></label>
                        </div>


                    </div>
                    <div className='col-lg-5 my-4'>
                        <h3> Your Order </h3>
                        <div className='your-order-wrap gray-bg-4'>
                            <div className="your-order-top">
                                <ul>
                                    <li>Product</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            <div className='your-order-middle'>
                                <ul>
                                    <li>
                                        <span>Product Name X 1</span>
                                        <span>$100 </span>
                                    </li>
                                    <li>
                                        <span>Product Name X 1</span>
                                        <span>$100 </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="your-order-bottom">
                                <ul>
                                    <li>Shipping</li>
                                    <li>Free shipping</li>
                                </ul>
                            </div>
                            <div className='your-order-total'>
                                <ul>
                                    <li>Total</li>
                                    <li>$100</li>
                                </ul>
                            </div>
                            <div className="payment-method">
                                <div className="payment-accordion element-mrg">
                                    <div id="faq" className="panel-group">
                                        <div className="panel panel-default single-my-account m-0">
                                            <div className="panel-heading my-account-title">
                                                <h4 className="panel-title">
                                                    <a data-bs-toggle="collapse" href="#my-account-1" className="collapsed" aria-expanded="false">Direct bank transfer</a>
                                                </h4>
                                            </div>
                                            <div id="my-account-1" className="panel-collapse collapse" data-bs-parent="#faq" style={{}}>
                                                <div className="panel-body">
                                                    <p>Please send a check to Store Name, Store Street, Store Town,
                                                        Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default single-my-account m-0">
                                            <div className="panel-heading my-account-title">
                                                <h4 className="panel-title">
                                                    <a data-bs-toggle="collapse" href="#my-account-2" className="collapsed" aria-expanded="false">Check payments</a>
                                                </h4>
                                            </div>
                                            <div id="my-account-2" className="panel-collapse collapse" data-bs-parent="#faq" style={{}}>
                                                <div className="panel-body">
                                                    <p>Please send a check to Store Name, Store Street, Store Town,
                                                        Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default single-my-account m-0">
                                            <div className="panel-heading my-account-title">
                                                <h4 className="panel-title">
                                                    <a data-bs-toggle="collapse" href="#my-account-3" className="collapsed" aria-expanded="false">Cash on delivery</a>
                                                </h4>
                                            </div>
                                            <div id="my-account-3" className="panel-collapse collapse" data-bs-parent="#faq" style={{}}>
                                                <div className="panel-body">
                                                    <p>Please send a check to Store Name, Store Street, Store Town,
                                                        Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className='Placebtn my-4' type='button'>PLACE ORDER</button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Checkout