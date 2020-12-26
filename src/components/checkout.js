import React from 'react'

export default function Checkout(props){
    return(
        <div>
            Amount Payable: $ {props.match.params.total}
            Credit Card, debit card etc., payment confirmation!
        </div> 
        )
}