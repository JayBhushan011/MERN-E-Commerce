import React from 'react'
import './cartcomponent.css'

export default function CartComp(props){
    return(
    <div>
        <div className="./cartcomponent.css"></div>
        <table>
            <br/>
            <br/>
            <tr>
                <td><img className="width" src={props.simgurl} width="100px" height="100px" alt={props.title}/></td>
                <td><h5 className="width">{props.title}</h5></td>
                <td><h5 className="width">{props.qty}</h5></td>
                <td><h5 className="width">$ {props.price}</h5></td>
                <td><button className="btn btn-primary">Delete</button></td>
            </tr>
        </table>
    </div>
    )
}