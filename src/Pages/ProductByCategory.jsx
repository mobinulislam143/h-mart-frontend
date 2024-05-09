import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Product/ProductList';
import ProductStore from '../store/ProductStore';

function ProductByCategory(props) {
    const { ListByCategoryRequest } = ProductStore();
    const { id } = useParams();

    useEffect(() => {
        (async ()=>{
            await  ListByCategoryRequest(id);
        })()
    }, [id]);

    return (
        <Layout>
            <ProductList />
        </Layout>
    );
}

export default ProductByCategory;
