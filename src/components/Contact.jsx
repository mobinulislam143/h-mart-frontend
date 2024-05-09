import React, { useRef, useState } from 'react';
import { FaHome, FaPhone } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import emailjs from '@emailjs/browser';


function Contact(props) {
    const stylis = {
        backgroundColor:'#f5f5f5',
        position:'relative', 
    }
    const [message, setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      emailjs
        .sendForm(
          'service_78u6hyn',
          'template_u6748rs',
          formRef.current,
          'riMlUvx_eS5ivAWtU'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      e.target.reset();
    };
    return (
        <div>
            <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>Contact</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='contact-wrappers py-4' style={stylis}>
                    
                    <div className="row" style={{padding:"50px 0 80px 0"}}>
                        <h2 className='font-weight-bold text-center'>Send A Quest</h2>
                        <div className='col-12'>
                            <div className='contact-form' style={{width:'80%', margin:"auto"}}>
                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className="col-lg-6">
                                            <input type='text' placeholder='Your Full Name'
                                            name='from_name' 
                                            className='form-control bg-white' />
                                        </div>
                                        <div className="col-lg-6 ">
                                            <input type="text"
                                            placeholder="Your Email"
                                            name="from_email" className='form-control bg-white' />
                                        </div>
                                    </div>
                                    <div className='col-lg-12 text-center'>
                                       
                                        <textarea className='form-control' placeholder="Your message"
                                            rows="7"
                                            name="message"
                                            required></textarea>
                                        <button className='btn btn-outline-primary my-4 text-center'>Send message</button>
                                        {message && <span>Message sent successfully :)</span>}

                                    </div>
                                </form>
                                <div className='row' style={{position:'absolute',bottom: "-149px", left: "15%"}}>
                                    <div className='col-md-4 text-center justify-content-center p-4'>
                                        <div className='card p-4 text-center' style={{width:'240px'}}>
                                            <FaHome style={{fontSize:'55px', margin:'auto'}} />
                                            <h5>Address</h5>
                                            <p>Your address goes here. <br/> 123 Your Location</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 text-center justify-content-center p-4'>
                                        <div className='card p-4 text-center' style={{width:'240px'}}>
                                            <FaPhone  style={{fontSize:'55px', margin:'auto'}} />
                                            <h5>Phone no</h5>
                                            <p>+012 345 67 89 <br/> +012 345 67 89</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 text-center justify-content-center p-4'>
                                        <div className='card p-4 text-center' style={{width:'240px'}}>
                                            <MdMarkEmailUnread  style={{fontSize:'55px', margin:'auto'}} />
                                            <h5>Email/Web</h5>
                                            <p>demo@example.com. <br/> www.example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;