import React from 'react';
import Skeleton from "react-loading-skeleton";

function CartSkeleton(props) {
    return (
        <div className=" mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card p-4">
                        {
                            Array.from({length:5}).map((item,i)=>{
                                return(
                                    <Skeleton key={i+1} count={3}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSkeleton;