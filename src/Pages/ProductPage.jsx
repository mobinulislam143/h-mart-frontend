import React, { useEffect } from 'react';
import Product from '../components/Product/Product';
import Layout from '../components/Layout/Layout';
import ProductStore from '../store/ProductStore';

function ProductPage(props) {
    const {ProductListRequest} = ProductStore()
    useEffect(() => {
        (async()=> {
            await ProductListRequest()
        })()
    })
    return (
        <Layout>
            <Product/>
        </Layout>
    );
 }

export default ProductPage;