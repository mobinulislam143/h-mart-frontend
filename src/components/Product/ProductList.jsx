import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import ProductStore from '../../store/ProductStore.js';
import ProductsSkeleton from '../../ProductSkeleton/product-skeleton.jsx';
import './ProductLists.css'

function ProductList() {
    const {BrandList,CategoryList,BrandListRequest,CategoryListRequest, ListByFilterRequest, ListProduct}=ProductStore();

    let [Filter, SetFilter] = useState({brandID: "", categoryID:"",maxPrice: "", minPrice: "", })

    useEffect(() => {
        (async ()=>{
                await BrandListRequest();
                await CategoryListRequest();
                let isEveryFilterPropertyEmpty = Object.values(Filter).every(value => value === "")
                !isEveryFilterPropertyEmpty?await ListByFilterRequest(Filter):null
        })()
    }, [Filter]);
    
    const inputOnChange=async (name,value)=>{
        SetFilter((data)=>({
            ...data,
            [name]:value,

        }))
    }

    
   


return (
<div className="container mt-3">
    <div className="row">
        <div className="col-md-3 p-2">
            <div className="card vh-100 p-3 shadow-sm" style={{background:"#234e70", color: "#FFFDDB"}}>
                  
           
                  <label className="form-label mt-3"> <b>Price Range</b></label>

                  <label className='form-label mt-3'>Maximum Price ${Filter.maxPrice}</label>
                  <input  value={Filter.maxPrice} onChange={async (e)=>{await inputOnChange('maxPrice',e.target.value)}} min={0} max={100000} step={1000} type="range" className='form-range' />
                  
                  <label  className='form-label mt-3'>Minimum Price ${Filter.minPrice}</label>
                  <input  value={Filter.minPrice} onChange={async (e)=>{await inputOnChange('minPrice',e.target.value)}} min={0} max={100000} step={1000} type="range" className='form-range' />
                  
                  <label className="form-label mt-3">Brands</label>
                  <select value={Filter.brandID} onChange={async(e) =>{await inputOnChange('brandID', e.target.value)}} className="form-control form-select">
                      <option value="">Choose Brand</option>
                      {BrandList!==null?(
                          BrandList.map((item,i)=>{
                             return(<option  key={i+1} value={item['_id']}>{item['brandName']}</option>)
                          })
                      ):(<option></option>)}
                  </select>
                  <label className="form-label mt-3">Categories</label>
                    <select value={Filter.categoryID} onChange={async (e)=>{await inputOnChange('categoryID',e.target.value)}} className="form-control form-select">
                    <option value="">Choose Category</option>
                    {CategoryList!==null?(
                        CategoryList.map((item,i)=>{
                            return(<option key={i+1} value={item['_id']}>{item['categoryName']}</option>)
                        })
                    ):(<option></option>)}
                    </select>
            </div>
        </div>
        <div className="col-md-9 p-2">
            <div className="container">
                <div className="row">
                    {
                        (()=>{
                            if(ListProduct!==null){
                               return  ListProduct.map((item,i)=>{
                                    let price=<p className="bodyMedium  text-dark my-1">Price: ${item['price']} </p>
                                    if(item['discount']===true){
                                        price=<p className="bodyMedium  text-dark my-1">Price: <strike>${item['price']}</strike> ${item['discountPrice']}</p>
                                    }
                                    return(
                                        <div key={i+1} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                            <Link to={"/details/"+item['_id']} className="card shadow-sm h-100 rounded-3 ">
                                                <div className='bg-image hover-zoom'>
                                                    <img style={{objectFit:"cover", height: "200px"}} className="w-100 rounded-top-2 zoom-effect" src={item['image']}/>
                                                </div>
                                                <div className="card-body" style={{background:"#FBF8BE"}}>
                                                    <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                    {price}
                                                    <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px"/>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }else {
                                return <ProductsSkeleton/>
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    </div>
</div>
    );

}

export default ProductList;