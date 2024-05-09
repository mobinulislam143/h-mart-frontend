// Review.js
import React from 'react';
import StarRatings from 'react-star-ratings';

function Review({ author, rating, content }) {
    return (
        <div className="review">
            <h4>{author}</h4>
            <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
            />
            <p>{content}</p>
        </div>
    );
}

export default Review;
