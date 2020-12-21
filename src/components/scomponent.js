import React from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './scomponent.css'
import Axios from 'axios'

export default function GameComp(props){
    return(
        <div>
            <div className="./game-component.css"></div>
            <div className="container arrange">
                <button className="button" onClick={()=>{
                    //window.location='/product'
                    console.log(props.id)
                    Axios.post("http://localhost:5000/product/getProduct",{"id":props.id})
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                  }}>
                <a href={props.limgurl}><img src={props.simgurl} alt={props.title} height="200px" width="200px"/></a>
                <br/>
                <h5>{props.title}</h5>
                <h6>{props.brand}</h6>
                <h6>{props.age}</h6>
                <h6>{props.genre}</h6>
                <h5>$&nbsp; {props.price}</h5>
                </button>
            </div>
        </div>
    )
    }
