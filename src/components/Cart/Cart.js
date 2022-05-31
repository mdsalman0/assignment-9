import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,review,rating}=props.item;
    return (
        <div className='items'>
            <h4>name: {name}</h4>
            <p>review: {review}</p>
            <p><small>rating: {rating}</small></p>
        </div>
    );
};

export default Cart;