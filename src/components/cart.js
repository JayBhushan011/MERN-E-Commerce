import React, { useState } from 'react'
import Axios from 'axios'
import CartComp from './cartcomponent'

export default function Cart(props){
    const [finalinfo,setfinalinfo]=useState([])
    console.log(props.match.params.id)
    console.log(props.match.params.qty)
    if(finalinfo.length===0){
    Axios.post('http://localhost:5000/user/addToCart',{"productId":props.match.params.id})
    .then(res=>setfinalinfo(res.data))
    .then(console.log('Final info:'+finalinfo))
    .catch()
    }
    
    return(
        <div>
            <h1>Shopping Cart</h1>
            <div align="right">
            <h3>Total: {999*props.match.params.qty}</h3>
            <button>Proceed to Checkout</button>
            </div>
            <CartComp key={props.match.params.id} id={props.match.params.id} price="999" simgurl="http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL160_.jpg" title="Assassin's creed I & II" qty={props.match.params.qty}/>
        </div>
    )
}