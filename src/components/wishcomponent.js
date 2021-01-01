import React, { useEffect, useState } from 'react'
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
                        <div className="min-10"><button className="btn btn-primary">Delete</button></div>
                    </div>
                    
                </tbody>
    </div>
    )
}