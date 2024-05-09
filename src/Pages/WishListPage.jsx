import React from 'react';
import Layout from '../components/Layout/Layout'
import WishList from '../components/Wish/WishList';

function WishListPage(props) {
    return (
       <Layout>
            <WishList/>
       </Layout>
    );
}

export default WishListPage;