import React from 'react';
import ProductStore from '../../store/ProductStore.js'
import {Link} from "react-router-dom";
import CategorySkeleton from '../../ProductSkeleton/CategorySkeleton.jsx';
import './styles.css'



function Categorys(props) {
    const {CategoryList} = ProductStore()

    if(CategoryList.length === 0){
        <CategorySkeleton/>
    }else{
        return (
            <div className='section'>
                <div className='container mt-4'>
                    <div className='row'>
                        <h1 style={{fontWeight:'700', fontSize:'35px', margin:'40px 0px'}} className='text-center my-2 p-0'>Top Categories</h1>
                        <span className='bodysmall mb-5 text-center'>Explore a World of Choices Across Our Most Popular <br/>Shopping Categories</span>
                        {
                                CategoryList.map((item,i)=>{
                                    return(
                                        <div key={i+1} className="col-md-2 text-center mt-3 zoom-effects">
                                            <Link to={`/by-category/${item['_id']}`} className="card h-100 rounded-3 bg-white">
                                                <div className="card-body">
                                                    <img alt="" className="w-75" src={item['categoryImg']}/>
                                                    <p className="bodySmal mt-3">{item['categoryName']}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                                   
                        }
                    </div>
                </div>            
            </div>
        );
    }
}

export default Categorys;