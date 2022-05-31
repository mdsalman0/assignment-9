import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const [items,setCarts] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div>
            <div className='book-container'>
                <div className='element-style'>
                    <h1>The Best Book</h1>
                    <h1>Best Free Book</h1>
                    <p>The book is very good,I feel very good reading the book,The book will be very useful in the course of life, very good book...The book is very good,I feel very good reading the book,The book will be very useful in the course of life, very good book</p>
                    <Link to='/about'>
                    <button>Book Related</button>
                    </Link>
                </div>
                <div>
                    <h2>this is image</h2>
                    <img src='../Home/image/book.jpg' alt="" />
                </div>
            </div>
            <div className='customer-review'><h1>Customer Review ({items.length})</h1></div>
            <div className='items-container'>
                {
                    items.map(item => <Cart
                     key={item.id}
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