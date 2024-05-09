import React from 'react';
import img1 from '../assets/image1.jpg'
import '../components/styles/BlogPage.css'
function BlogPage(props) {
    return (
        <div>
            <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>Blog</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-xl-4 my-4'>
                        <div className='blog-image'>
                            <img src={img1} alt='image' />
                        </div>
                        <div className='blog-text'>
                            <div className='blog-date'>
                                <span>posted on: <b>27,Jun 2030</b></span>
                                <span style={{padding:'0 15px'}}>Posted by: <b>Wild Nick</b></span>
                            </div>
                            <div className='blog-des'>
                                <h5><a href='#'>The Pros and Cons of Smart Product</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <button> Read More</button>
                            </div>

                        </div>

                    </div>
                    <div className='col-lg-6 col-md-6 col-xl-4 my-4'>
                        <div className='blog-image'>
                            <img src={img1} alt='image' />
                        </div>
                        <div className='blog-text'>
                            <div className='blog-date'>
                                <span>posted on: <b>27,Jun 2030</b></span>
                                <span style={{padding:'0 15px'}}>Posted by: <b>Wild Nick</b></span>
                            </div>
                            <div className='blog-des'>
                                <h5><a href='#'>The Pros and Cons of Smart Product</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <button> Read More</button>
                            </div>

                        </div>

                    </div>
                    <div className='col-lg-6 col-md-6 col-xl-4 my-4'>
                        <div className='blog-image'>
                            <img src={img1} alt='image' />
                        </div>
                        <div className='blog-text'>
                            <div className='blog-date'>
                                <span>posted on: <b>27,Jun 2030</b></span>
                                <span style={{padding:'0 15px'}}>Posted by: <b>Wild Nick</b></span>
                            </div>
                            <div className='blog-des'>
                                <h5><a href='#'>The Pros and Cons of Smart Product</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <button> Read More</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;