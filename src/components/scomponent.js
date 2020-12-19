import React from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './scomponent.css'

export default function GameComp(props){
    return(
        <div>
            <div className="./game-component.css"></div>
            <div className="container arrange">
                <a href={props.limgurl}><img src={props.simgurl} alt={props.title} height="200px" width="200px"/></a>
                <br/>
                <h5>{props.title}</h5>
                <h6>{props.brand}</h6>
                <h6>{props.age}</h6>
                <h6>{props.genre}</h6>
                <h5>$&nbsp; {props.price}</h5>
            </div>
        </div>
    )
    }