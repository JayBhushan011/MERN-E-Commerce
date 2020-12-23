import React, { useState } from 'react'
import Axios from 'axios'

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
        <div className="container">
            
        </div>
    )
}