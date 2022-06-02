import React from 'react';
import './ReviewDatials.css'

const ReviewDatials = (props) => {
    const {name,review,rating} = props.review;
    return (
        <div className='review-container'>
            <h4>Name: {name}</h4>
            <p>Review: {review}</p>
            <p>rating: {rating}</p>
        </div>
    );
};

export default ReviewDatials;