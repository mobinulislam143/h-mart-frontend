import React from 'react';
import img1 from '../assets/logo.png'

function ThankYouPage(props) {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center align-items-center text-center'>
                    <div className='col-md-8'>
                        <img src={img1} alt='logo' />
                        <p className='my-4'>Thank you for ordering in our store. You will receive a confirmation email shortly.</p>
                        <button className='btn btn-outline-primary my-4'>Continue Shopping</button>
                        <h3 style={{fontSize:'35px'}}>Call Us for Quick Order</h3>
                        <h4 className='text-danger'>01647135496</h4>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default ThankYouPage;