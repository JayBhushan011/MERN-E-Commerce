import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './cartcomponent.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function CartComp(props){
    const [finalinfo,setfinalinfo]=useState([])

    async function getArray(id){
        if(finalinfo.length===0){
        const res = await Axios.post('http://localhost:5000/product/getProduct',{"id":id})
        await setfinalinfo(res.data)
        }
}getArray(props.id)

function removeFromCart(id){
    Axios.post('http://localhost:5000/user/removeFromCart',{productId:id})
    window.location='/cart'
}

function cartToWishlist(id){
    Axios.post('http://localhost:5000/user/cartToWishlist',{productId:id})
    window.location='/cart'
}
    return(
    <div>
        <div className="./cartcomponent.css"></div>
            <br/>
            <br/>
                    <div className="row">
                    <Link to={`/product/${props.id}`}><div className="small"><img className="width" height="100px" width="100px" src={finalinfo.simgurl} alt={finalinfo.title}/></div></Link>
                        <div className="min-30"><h5 className="width-1">{finalinfo.title}</h5></div>
                        <div className="min-9"><h5 className="width-2">{props.qty}</h5></div>
                        <div className="min-9"><h5 className="width">$ {finalinfo.price*props.qty}</h5></div>
                        <div className="min-9"><button onClick={()=>removeFromCart(props.id)} className="btn btn-primary">Remove</button></div>
                        <div className="min-5"><button onClick={()=>cartToWishlist(props.id)} className="btn btn-secondary">Move to wishlist</button></div>
                    </div>
    </div>
    )
}