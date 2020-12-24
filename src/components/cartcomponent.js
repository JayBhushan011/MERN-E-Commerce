import React, { useState } from 'react'

export default function CartComp(props){
    const [qty,setqty]=useState(props.qty)
    function qtyhandle(e){
        let quantity={ ...qty }
        quantity = e.target.value
        setqty(quantity)
      }
    return(
    <div>
        <table>
            <h1>Shopping Cart</h1>
            <br/>
            <br/>
            <tr>
                <th><img src={props.simgurl} width="100px" height="100px" alt={props.title}/></th>
                <th><h3>{props.title}</h3></th>
                <th><input onChange={qtyhandle} type="number" maxLength="2" min="1" max="20" value={qty} required></input></th>
                <th><h3>$ {props.price}</h3></th>
            </tr>
        </table>
    </div>
    )
}