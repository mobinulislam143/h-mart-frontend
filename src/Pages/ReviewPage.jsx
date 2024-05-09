// ReviewPage.js
import React from 'react';
import Review from './Review'; // Adjust the path based on your file structure

function ReviewPage() {
    // Dummy data for reviews
    const reviews = [
        { id: 1, author: 'John Doe', rating: 4, content: "The Flatlogic One Bootstrap Template stands out with its highly customizable design and wide range of features. Its Bootstrap 4 foundation ensures a responsive and mobile-friendly performance. The user experience was seamless and efficient due to the easily navigable layout. The theme genuinely enhances the admin dashboard functionality, resulting in productivity improvement. " },
        { id: 2, author: 'Jane Smith', rating: 5, content: 'Good bootstrap admin theme ' },
        { id: 3, author: 'Mobinul Mahi', rating: 3, content: 'not bad service.' },
        { id: 4, author: 'Haniful Islam', rating: 3, content: 'nice template, but had to change color scheme, too vibrant ' },
    ];

    return (
        <div>
            <div className='container'>
                <div className='review' style={{width:'80%'}}>
                    <h5 style={{fontWeight:'bold', margin:'10px 0'}}>Customer Reviews</h5><hr/>
                    {reviews.map((review) => (
                        <Review key={review.id} {...review} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;
