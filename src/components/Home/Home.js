import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Asstes/Image/img.jpg'
import useReviews from '../../hook/useReviews';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const [reviews,setReviews] = useReviews()
    
    return (
        <div>
            <div className='book-container'>
                <div className='element-style'>
                    <h1>The Best Book</h1>
                    <h1>Out Of Touch</h1>
                    <p>The book is very good,I feel very good reading the book,The book will be very useful in the course of life, very good book...The book is very good,I feel very good reading the book,The book will be very useful in the course of life, very good book</p>
                    <Link to='/about'>
                    <button>Book Related</button>
                    </Link>
                </div>
                <div>
                    <h2></h2>
                    <img width={400} src={Image} alt="" />
                </div>
            </div>
            <div className='customer-review'><h1>Customer Review ({reviews.length})</h1></div>
            <div className='items-container'>
                {
                    reviews.slice(0,3).map(item => <Cart
                     key={item._id}
                     item={item}
                    ></Cart>)
                }
            </div>
            <div className='add-reviews'>
            <Link to='/reviews'>See All Reviews</Link>
            </div>
            
        </div>
    );
};

export default Home;