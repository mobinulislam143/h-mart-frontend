import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Layout from '../components/Layout/Layout';
import Details from '../components/Product/Details';
import Brands from '../components/Product/Brands';
import ProductStore from '../store/ProductStore';

function ProductDetails(props) {
    const {DetailsRequest, ReviewListRequest, BrandListRequest, ReviewList }=ProductStore();
    const {id}=useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                await ReviewListRequest(id);
                await DetailsRequest(id);
                await BrandListRequest()
            } catch (error) {
                console.error("Error fetching data:", error.toString());
            }
        };
        fetchData();
    }, []);
    
    return (
            <Layout>
                <Details/>
                <Brands/>
            </Layout>
    );
}

export default ProductDetails;