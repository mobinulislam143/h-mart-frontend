import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import Layout from '../components/Layout/Layout';
import Brands from '../components/Product/Brands';
import Categories from '../components/Product/Categorys';
import Product from '../components/Product/Product';
import ProductStore from '../store/ProductStore';



function HomePage(props) {
  const {CategoryListRequest, ProductListRequest, BrandListRequest, ListByRemarkRequest} = ProductStore()
  
  useEffect(() => {
    (async() => {
      await ProductListRequest()
      await CategoryListRequest()
      await BrandListRequest()
      await ListByRemarkRequest("new")
    })()
  }, []);
    return (
        <Layout>          
              <Carousel/> 
              <Product/> 
              <Categories/> 
              <Brands/>
        </Layout>
    );
}

export default HomePage;