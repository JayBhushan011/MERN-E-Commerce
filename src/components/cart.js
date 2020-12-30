import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import CartComp from './cartcomponent'
import './cart.css'

export default function Cart(props){
    const [finalinfo,setfinalinfo]=useState([])
    if(finalinfo.length===0){
        Axios.post('http://localhost:5000/product/getProduct',{"id":props.match.params.id})
        .then(res=>setfinalinfo(res.data))
        .catch()
        }
        Axios.get('http://localhost:5000/user/userCart').then(res=>console.log(res.data))
    
    return(
        <div>
            <h1>Shopping Cart</h1>
            <div className="./cart.css"></div>
            <CartComp key={props.match.params.id} id={props.match.params.id} price={finalinfo.price} simgurl={finalinfo.simgurl} title={finalinfo.title} qty={props.match.params.qty}/>
            <div className="container">
            <h3>Total: {finalinfo.price*props.match.params.qty}</h3>
            <Link to={`/checkout/${finalinfo.price*props.match.params.qty}`}><button className="btn btn-one">Proceed to Checkout</button></Link>
            </div>
        </div>
    )
}