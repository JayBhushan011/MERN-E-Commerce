import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout(props){
    return(
        <div className="container" align="center">
            <br/>
            <br/>
            <p>Amount Payable: $ {props.match.params.total}</p>
            <br/>
            <h1>Select Payment Mode</h1>
            <br/>
            <Link to={`/credit/${props.match.params.total}`}><button className="btn btn-primary">Credit Card</button></Link>
            <br/>
            <br/>
            <Link to={`/debit/${props.match.params.total}`}><button className="btn btn-primary">Debit Card</button></Link>
            <br/>
            <br/>
            <Link to={`/net/${props.match.params.total}`}><button className="btn btn-primary">Net Banking</button></Link>
        </div> 
        )
}