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
    }, []);
    const removeDuplicates = (data) =>{
        return data.filter ((value, index) => data.indexOf(value) === index);
    }
    // if(cart.length <= 4){

    // }
    const handleCart = (headphone) =>{
       if(cart.length < 4){
        const newCart = removeDuplicates([...cart, headphone]);
        setCart(newCart);
       }
       else{
           console.log('Nothing');
       }
    }
    const chooseOne = (cart) =>{
        if(cart.length === 0){
            console.log('Cart is Empty');
        }
        else{
            const fullCartList = [...cart];
        const selectingOne = Math.floor(Math.random()* fullCartList.length);
        const randomOne = [cart[selectingOne]];
        console.log(randomOne);
        setSelectedOne(randomOne);
        setCart([]);
        }
        
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
                        cart.map(product=> 
                        <div className='cart-item' key={product.id} >
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
                    <div className='buttons' >
                    <button onClick={()=>chooseOne(cart)}   >Choose One</button>
                    <button onClick={()=>chooseAgain()}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headphones;