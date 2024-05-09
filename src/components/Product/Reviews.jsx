import React from 'react';
import ProductStore from '../../store/ProductStore';
import StarRatings from 'react-star-ratings';


function Reviews(props) {
    const {ReviewList} = ProductStore() 
    console.log("review is  "+ReviewList)
    return (

        <div>
            <ul className="list-group mt-4 list-group-flush">
                {
                    ReviewList!==null?(ReviewList.map((item,i)=>{
                      return <li key={i+1} className="list-group-item bg-transparent">
                          <h6 className="m-0 p-0"><i className="bi bi-person"></i> {item['profile']['cus_name']}</h6>
                          <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                          <p> {item['des']}</p>
                      </li>
                    })):(<span></span>)
                }
            </ul>
        </div>
    );
}

export default Reviews;
