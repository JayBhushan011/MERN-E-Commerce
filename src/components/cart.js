import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './cart.css'
import CartComp from './cartcomponent'

export default function Cart(props){
    const [finalinfo,setfinalinfo]=useState([])
    const [total,settotal]=useState(String)

    useEffect(function effect(){
        async function getArray(){
            const res = await Axios.get('http://localhost:5000/user/userCart')
            await setfinalinfo(res.data)

            const total = await Axios.get('http://localhost:5000/product/priceCalculate')
            await settotal(total.data)
            console.log(total.data)
        }
        getArray()
    },[])
    
    return(
        <div>
            <h1>Shopping Cart</h1>
            <div className="./cart.css"></div>
            {finalinfo.map(data=><CartComp qty={data.quantity} id={data.productId}/>)}
            <div className="container">
            <h3>Subtotal: {total}</h3>
            <Link to={`/checkout/${total}`}><button className="btn btn-one">Proceed to Checkout</button></Link>
            </div>
        </div>
    )
}