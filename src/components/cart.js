import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './cart.css'
import CartComp from './cartcomponent'

export default function Cart(props){
    const [finalinfo,setfinalinfo]=useState([])

    useEffect(function effect(){
        async function getArray(){
            const res = await Axios.get('http://localhost:5000/user/userCart')
            await setfinalinfo(res.data)
        }
        getArray()
    },[])
    
    return(
        <div>
            <h1>Shopping Cart</h1>
            <div className="./cart.css"></div>
            {finalinfo.map(data=><CartComp qty={data.quantity} id={data.productId}/>)}
            <div className="container">
            <h3>Subtotal: Need to calculate</h3>
            <Link to={`/checkout/${finalinfo.price*props.match.params.qty}`}><button className="btn btn-one">Proceed to Checkout</button></Link>
            </div>
        </div>
    )
}