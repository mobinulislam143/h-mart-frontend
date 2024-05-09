import React, { useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ProductStore from '../../store/ProductStore.js';
import './AppNavbar.css'
import UserStore from '../../store/UserStore.js';
import { useNavigate } from 'react-router-dom';
import CartStore from '../../store/CartStore.js';
import WishStore from '../../store/WishStore.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

function AppNavbar(props) {
    const {SearchKeyword, SetSearchKeyword} = ProductStore()
    const {isLogin, UserLogoutRequest} = UserStore()
    const {CartCount,CartListRequest} = CartStore()
    const {WishListRequest,WishCount} = WishStore()

    let navigate = useNavigate()

    const onLogout = async() => {
        await UserLogoutRequest()
        sessionStorage.clear()
        localStorage.clear()
        navigate('/')
    }


    useEffect(() => {
        (async () => {
            if (isLogin()) {
                try {
                    await CartListRequest();
                    await WishListRequest();
                } catch (error) {
                    console.error('Error fetching cart or wish list:', error);
                }
            }
        })();
    }, []);


    
   
    
    return (
        <div>
                 <div className='navbarTop text-light' style={{backgroundColor:"#234E70"}}>
         <div className='container py-4'>
            <div className='row align-items-center'>
                <div className='col-md-3'>
                    <h2 style={{fontSize:'55px'}}> <span style={{color:"#006de3"}}>H</span>mart</h2>
                </div>
                <div className='col-md-4'>
                    <div className="input-group">
                            <input onChange={(e)=>SetSearchKeyword(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                       
                            <Link  className="btn btn-outline-light" type="submit" to={SearchKeyword.length>0?`/by-keyword/${SearchKeyword}`:`/`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </Link>
                      
                    </div>
                </div>
                <div className='col-md-5 flex text-end '>
               

                   
                        { 
                            isLogin()?(
                                 <>
                                 <Link to="/wish-list" type='button' className="btn position-relative">
                                    <FaRegHeart className='icons' />
                                    <span className="position-absolute translate-middle badge rounded-pill">
                                            {WishCount}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                    
                                </Link>
                                 <Link to="/order-list" type='button' className="btn position-relative">
                                    <FontAwesomeIcon className='icons' icon={faTruck} />
                                </Link>
                                <Link to="/cart" type='button' className="btn position-relative">
                                    <FaBagShopping className='icons' />
                                    <span className="position-absolute translate-middle badge rounded-pill">
                                            {CartCount}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                                    <Link to="/profile" className='btn btn-secondary mx-2 loginBtn' >Profile</Link>
                                    <Link onClick={onLogout} className='btn btn-secondary mx-2 loginBtn' >Log out</Link>
                                 </>
                            ):(
                                 <Link to="/login" className='btn btn-secondary mx-2 loginBtn'>Login</Link>)
                        }

                        
                    </div>
            </div>
        </div>

       
        <div className='container rounded-2'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
                    <ul className='d-flex navbar-nav'>
                        <li className='nav-item'><Link  className='nav-link  font-weight-bold mx-3' to={'/'}>Home</Link></li>
                        <li className='nav-item'><Link  className='nav-link  font-weight-bold mx-3' to={'/'}>About</Link></li>

                        <li className="nav-item dropdown ">
                        <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Page  </a>
                            <ul className='dropdown-menu fade'>
                                <div className='row' style={{width: '800px'}}>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>Inner Page</li>
                                        <li><Link className="dropdown-item" to={"*"}> 404 Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/privacy"}> privacy policy and <br/> terms of use </Link></li>
                                        <li><Link className="dropdown-item" to={"/faq"}> FAQ Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/review"}> Review Page </Link></li>
                                    </ul>
                                    </div>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>Other Shop Page</li>
                                        <li><Link className="dropdown-item" to={"/cart"}> Cart Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/checkout"}> Checkout Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/product"}> Product Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/search"}> Search Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/blog"}> Blog Page </Link></li>
                                    </ul>
                                    </div>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>User Manager</li>
                                        <li><Link className="dropdown-item" to={"/login"}> Login / Register Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/thank-you"}> Thank you Page </Link></li>
                                        <li><Link className="dropdown-item" to={"/contact"}> Contact Page </Link></li>
                                    </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className='nav-item'><Link className='nav-link  font-weight-bold mx-3' to={'/'}>Shop</Link></li>
                        <li className='nav-item'><Link className='nav-link  font-weight-bold mx-3' to={'/blog'}>Blog</Link></li>
                        <li className='nav-item'><Link className='nav-link  font-weight-bold mx-3' to={'/contact'}>Contact</Link></li>
                    
                    </ul>
            
                
                </div>
            </nav>
        </div>
                  
            
        </div>
        </div>
    );
}

export default AppNavbar;