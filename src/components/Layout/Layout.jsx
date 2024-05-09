import React from 'react';
import AppNavbar from './AppNavbar.jsx';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer.jsx';


function Layout(props) {

    return (
        <div>
        <AppNavbar/>
            {props.children}
            <Toaster position="top-right" reverseOrder={false}/>
        <Footer/>
            
        </div>
    );
}

export default Layout;