import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const navigate = useNavigate()
    const {name,review,rating,_id}=props.item;
    
    return (
        <div className='items'>
            <h4>name: {name}</h4>
            <p>review: {review}</p>
            <p><small>rating: {rating}</small></p>
            {/* <button onClick={()=>navigate(`/reviews/${_id}`)}>click</button> */}
        </div>
    );
};

export default Cart;