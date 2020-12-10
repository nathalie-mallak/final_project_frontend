import React from 'react'

export default function Basket(props) {
    const {cartItems} = props;
    return (
        <div>
            <h2>Cart Items</h2>
           {/* <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>  */}
        </div>
    )
}
