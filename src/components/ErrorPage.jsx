import React from 'react';
import './styles/ErrorPage.css'
import Layout from './Layout/Layout';

function ErrorPage(props) {
    return (
        <Layout>
            <div>
            <div className='container'>
                <div className='errors' style={{margin: '30px 0'}}>
                    <h1>Oops!</h1>
                    <h2>Page not found!</h2>
                    <p>You could either go back or go to homepage</p>
                    <alert className='btnGo'>Go Back</alert>
                    <a href='/' className='btnHomePage'>HomePage</a>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default ErrorPage;