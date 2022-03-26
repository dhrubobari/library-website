import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let name = '';
    console.log(name);
    for(const data of cart){
        name = name + data.name;
    }
    return (
        <div>
            {
                cart.map(cart => <ul><li>{cart.name}</li></ul>)
            }
        </div>
    );
};

export default Cart;