import React, { useState } from 'react'
import './cartcomponent.css'

export default function CartComp(props){
    return(
    <div>
        <div className="./cartcomponent.css"></div>
        <table>
            <br/>
            <br/>
            <tr>
                <td><img src={props.simgurl} width="100px" height="100px" alt={props.title}/></td>
                <td><h6>{props.title}</h6></td>
                <td>{props.qty}</td>
                <td><h6>$ {props.price}</h6></td>
                <td><button>Delete</button></td>
            </tr>
        </table>
    </div>
    )
}