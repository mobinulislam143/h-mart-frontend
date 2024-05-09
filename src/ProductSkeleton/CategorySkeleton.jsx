import React from 'react';
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../data/image.json"

function CategorySkeleton(props) {
    return ( 
        <div className="section">
        <div className="container">
            <div className="row">
               
                {
                    Array.from({length:18}).map(( item,id)=>{
                        return(
                            <div key={i+1} className="col-2 col-lg-8r text-center col-md-8r p-2">
                                <div className="card h-100 rounded-3 bg-white">
                                    <div className="card-body">
                                        <Lottie className="w-100" animationData={ImagePlaceholder} loop={true} />
                                        <Skeleton count={1} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>

    );
}

export default CategorySkeleton;