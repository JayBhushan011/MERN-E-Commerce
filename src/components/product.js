import React,{ useState } from 'react'
import Axios from 'axios'
import './product.css'

export default function Product(props){
    const [finalinfo,setfinalinfo]=useState([])
    const [qty,setqty]=useState(1)

    function qtyhandle(e){
      let quantity={ ...qty }
      quantity = e.target.value
      setqty(quantity)
    }
    const  addToCart=(qty)=>{
      Axios.get('http://localhost:5000/user/checkLogIn').then(res=>{
        if(res.data==='User is logged out'){
          alert('We need you to sign in to proceed to add to cart')
          window.location='/'
        }
        if(res.data==='User is logged in'){
          Axios({
            method: "POST",
            data: {productId : props.match.params.id,quantity:qty},
          url: "http://localhost:5000/user/addToCart"
          })
          window.location=`/cart/${props.match.params.id}/${qty}`
        }
      })
    };
    if(finalinfo.length===0){
    Axios.post('http://localhost:5000/product/getProduct',{"id":props.match.params.id})
    .then(res=>setfinalinfo(res.data))
    .catch()
    }
    return(
        <div>
            <br/>
            <div className="./product.css"></div>
            <a href={finalinfo.limgurl}><img className="img" src={finalinfo.limgurl} alt={finalinfo.title} align="left" height="600px" width="650px"/></a>
            <h5>{finalinfo.title}</h5>
            <p className="p">{finalinfo.ranking!==0&&'Ranking: '+finalinfo.ranking}</p>
            <p className="p">{finalinfo.model!==''&&'Model: '+finalinfo.model}</p>
            <p className="p">{finalinfo.genre!==''&&'Genre: '+finalinfo.genre}</p>
            <p className="p">Price: {finalinfo.price}</p>
            <p className="p">Brand: {finalinfo.brand}</p>
            <p className="p">{finalinfo.warranty!==''&&'Warranty: '+finalinfo.warranty}</p>
            <p className="p">{finalinfo.feature1}</p>
            <p className="p">{finalinfo.feature2}</p>
            <p className="p">{finalinfo.feature3}</p>
            <p>Availability: Available</p>
            <label>Quantity:&nbsp; &nbsp;</label>
            <form onSubmit={()=>addToCart(qty)}>
            <input onChange={qtyhandle} type="number" maxLength="2" min="1" max="20" value={qty} required></input>
            <button className="btn btn-primary" id="shift" >Add to cart</button>
            <button className="btn btn-primary" id="shift1">Add to wishlist</button>
            </form>
        </div>
    )
}