import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './cart.css'
import WishComp from './wishcomponent'

export default function Cart(props){
    const [finalinfo,setfinalinfo]=useState([])

    useEffect(function effect(){
        async function getArray(){
            const res = await Axios.get('http://localhost:5000/user/userWishList')
            await setfinalinfo(res.data)
        }
        getArray()
    },[])
    
    return(
        <div>
            <h1>Wishlist</h1>
            <div className="./cart.css"></div>
            {finalinfo.length!==0&&finalinfo.map(data=><WishComp id={data.productId}/>)}
            <div className="container">
            {finalinfo.length===0&&<h4>Your wishlist is empty</h4>}
            </div>
        </div>
    )
}