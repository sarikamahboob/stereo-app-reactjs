import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Headphone.css';

const Headphone = ({headphoneData, handleCart }) => {
    const {image, name, price} = headphoneData;
    return (
        <div className='single-headphone' >
            <img src={image} alt="" />
            <h2> {name} </h2>
            <p>Price: ${price} </p>
            <button onClick={() => handleCart(headphoneData)} >Add to Cart
                <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>
        </div>
    );
};

export default Headphone;