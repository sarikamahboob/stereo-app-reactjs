import React, { useEffect, useState } from 'react';
import Headphone from '../Headphone/Headphone';
import './Headphones.css';

const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedOne, setSelectedOne] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setHeadphones(data));
    }, [])
    const handleCart = (headphone) =>{
        const newCart = [...cart, headphone];
        setCart(newCart);
    }
    const chooseOne = (cart) =>{
        const fullCartList = [...cart];
        const selectingOne = Math.floor(Math.random()* fullCartList.length);
        const randomOne = [cart[selectingOne]];
        console.log(randomOne);
        setSelectedOne(randomOne);
        setCart([]);
    }
    const chooseAgain = () =>{
        const clearCart = [];
        setSelectedOne([]);
        setCart(clearCart);
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
                    <h1 className='cart-header'>Your Cart</h1>
                    {
                        cart.map(product=> <div className='cart-item' key={product.id} >
                            <img src={product.image} alt="" />
                            <h1> {product.name} </h1>
                            
                        </div> )
                    }
                    {
                        selectedOne.map(chosenOne => <div className='cart-item' >
                            <img src={chosenOne.image} alt="" />
                            <h1 key={chosenOne.id}  > {chosenOne.name} </h1>
                        </div>
                             )
                    }
                    <button onClick={()=>chooseOne(cart)} style={ { marginBottom: "20px", marginRight: "10px" }  }  >Choose One</button>
                    <button onClick={()=>chooseAgain()}>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Headphones;