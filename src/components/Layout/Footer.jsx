import React from 'react';
import '../styles/Footer.css'
function Footer(props) {
    return (
        <div>
            <div className="footer mt-5"> 
            <footer className="text-center text-lg-start ">
                <section className="d-flex justify-content-between p-4" >
              

                <div>
                    <a href="" className="me-4">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className=" me-4">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4">
                    <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4">
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4">
                    <i className="fab fa-github"></i>
                    </a>
                </div>
                </section>

                <section className="footerSec">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h2 style={{fontSize:'55px'}}> <span style={{color:"#006de3"}}>H</span>mart</h2>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                           
                            />
                        <p>
                        Here you can use rows and columns to organize your footer
                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6  className="text-uppercase">Service</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                           
                            />
                        <p>
                        <a href="/" >My Account</a>
                        </p>
                       
                        <p>
                        <a href="/cart" >Shopping cart</a>
                        </p>
                        <p>
                        <a href="/blog" >Blog</a>
                        </p>
                        <p>
                        <a href="/privacy" >Privacy and terms</a>
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6  className="text-uppercase">My Account</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                           
                            />
                        <p>
                        <a href="#!" >My Account</a>
                        </p>
                        <p>
                        <a href="/contact" >Contact</a>
                        </p>
                        <p>
                        <a href="#!" >Shopping cart</a>
                        </p>
                        <p>
                        <a href="/product" >Shop</a>
                        </p>
                        <p>
                        <a href="/login" >User Login</a>
                        </p>
                    </div>
                    
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6  className="text-uppercase">Contact</h6>

                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto"
                           
                            />
                        <p><i className="fas fa-home mr-3"></i>Cox'sBazar, Bangladesh</p>
                        <p><i className="fas fa-envelope mr-3"></i> mobinulislammahi@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> +880 1647135496</p>
                        <p><i className="fas fa-print mr-3"></i> +880 1585853295</p>
                    </div>
                    </div>
                </div>
                </section>

                <div
                    className="text-center p-3"
                   
                    >
                © All right are reserved by:
                <a href="https://mahi-lac.vercel.app/" target='_blank'
                    >Mobinul Islam Mahi</a
                    >
                </div>
            </footer>

            </div>
        </div>
    );
}

export default Footer;