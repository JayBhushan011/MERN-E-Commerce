import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './cartcomponent.css'
import "bootstrap/dist/css/bootstrap.min.css";
var toadd=0
export default function CartComp(props){
    const [finalinfo,setfinalinfo]=useState([])
    const [priceofproduct,setpriceofproduct]=useState('')

    function total(qty,price){
        toadd=toadd+qty*price
        setpriceofproduct(toadd/6)
    }    

    async function getArray(id){
        if(finalinfo.length===0){
        const res = await Axios.post('http://localhost:5000/product/getProduct',{"id":id})
        await setfinalinfo(res.data)
        await total(props.qty,res.data.price)
        
        }
        //useEffect(total(props.qty,finalinfo.price),[])
    Axios.post('http://localhost:5000/product/priceCalculate',{"total":priceofproduct})
}


getArray(props.id)
    return(
    <div>
        <div className="./cartcomponent.css"></div>
            <br/>
            <br/>
                <tbody>
                    <div className="row">
                        <div className="small"><img className="width" height="100px" width="100px" src={finalinfo.simgurl} alt={finalinfo.title}/></div>
                        <div className="min-30"><h5 className="width-1">{finalinfo.title}</h5></div>
                        <div className="min-10"><h5 className="width-2">{props.qty}</h5></div>
                        <div className="min-10"><h5 className="width">$ {finalinfo.price*props.qty}</h5></div>
                        <div className="min-10"><button className="btn btn-primary">Remove</button></div>
                        <div className="min-10"><h5 className="width">$ {priceofproduct}</h5></div>
                    </div>
                    
                </tbody>
    </div>
    )
}