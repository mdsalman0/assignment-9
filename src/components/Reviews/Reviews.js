import React from 'react';
import { useParams } from 'react-router-dom';
import useReviews from '../../hook/useReviews';
import './Reviews.css'
import ReviewDatials from '../ReviewDatials/ReviewDatials';

const Reviews = () => {
    const {id} = useParams()
    const [reviews,setReviews] = useReviews()

    return (
        <div>
            {/* <h1>this is Reviews:{id}</h1> */}
            <div className='reviews-container'>
                {
                    reviews.map(review => <ReviewDatials
                     review={review}
                    ></ReviewDatials>)
                }
            </div>
        </div>
    );
};

export default Reviews;