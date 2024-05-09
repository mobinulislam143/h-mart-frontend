import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import ProductList from '../components/Product/ProductList.jsx';
import ProductStore from '../store/ProductStore.js';


function ProductByBrand() {
    const {ListByBrandRequest} = ProductStore()
    const  {id} = useParams() 

    useEffect(() => {
        (async()=>{
            await ListByBrandRequest(id)
        })()
    },[id])
    
    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
}

export default ProductByBrand;