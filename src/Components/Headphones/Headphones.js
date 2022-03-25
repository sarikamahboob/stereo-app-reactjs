import React, { useEffect, useState } from 'react';
import Headphone from '../Headphone/Headphone';
import './Headphones.css';

const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setHeadphones(data));
    }, [])
    const handleCart = (headphone) =>{
        const newCart = [...cart, headphone];
        setCart(newCart);
    }
    return (
        <div className='main-container' >
            <div className="products-container">
                <div className='headphones-container' >
                    {
                        headphones.map( headphone => <Headphone
                        key={headphone.id}
                        headphoneData={headphone}
                        handleCart={handleCart}
                        ></Headphone> )
                    }
                </div>
                <div className='cart-container' >
                    <h1 className='cart-header' >Your Cart</h1>
                    {
                        cart.map(product=> <div className='cart-item' >
                            <img src={product.image} alt="" />
                            <h1> {product.name} </h1>
                        </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Headphones;