import React from 'react';
import ProductStore from '../../store/ProductStore';
import { Link } from 'react-router-dom';
import BrandSkeleton from '../../ProductSkeleton/BrandSkeleton'
import './styles.css'


function Brands(props) {
  const { BrandList } = ProductStore();

  if (BrandList.length === 0) {
    return < BrandSkeleton/>;
  } else {
    return (
      <div className="section">
        <div className="container mt-4">
          <div className="row">
            <h2
              style={{ fontWeight: '700', fontSize: '35px', margin: '40px 0px' }}
              className="headline-4 text-center my-2 p-0"
            >
              Top Brands
            </h2>
            <span className="bodySmal mb-5 text-center">
              Explore a World of Choices Across Our Most Popular <br /> Shopping Categories
            </span>
            {BrandList.map((item, i) => {
              return (
                <div key={i+1} className="col-md-2 col-lg-2 text-center p-2 zoom-effects" >
                  <Link to={'/by-brand/' + item['_id']} className="card h-100 rounded-3 bg-white">
                    <div className="card-body">
                      <div className='card-headers'  style={{  height: '100px', objectFit: "cover" }}>
                        <img
                          className="w-75"
                          src={item['brandImg']}
                          alt={item['brandName']}
                        />
                      </div>
                      <p className="bodySmal mt-3">{item['brandName']}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
