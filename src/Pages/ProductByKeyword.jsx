import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Product/ProductList.jsx';
import ProductStore from '../store/ProductStore.js';
import { useParams } from 'react-router-dom';

function ProductByKeyword(props) {
    const {keyword}=useParams();
    const {SearchKeyword ,ListByKeywordRequest}=ProductStore();


    useEffect(() => {
        (async ()=>{
            await ListByKeywordRequest(keyword);
            await ListByKeywordRequest(SearchKeyword);

        })()
    }, [keyword, SearchKeyword]);


    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
}

export default ProductByKeyword;