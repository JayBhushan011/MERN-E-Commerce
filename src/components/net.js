import React from 'react'

export default function Net(props){

    function handleClick(e){
        e.preventDefault()
        alert('You will shortly be taken to the payment gateway. Please wait')
        alert('Your payment has been successful. We truly appreciate your trust with Just A Second. Your order id is ORDIN93784995')
        window.location='/'
    }
    return(
        <div className="container">
            <br/>
            <br/>
            <h3>Net Banking Details</h3>
            <br/>
            <form onSubmit={handleClick}>
                <label>Name of the bank *</label>
                <input required type="text" maxLength="35" className="form-control" placeholder="Hong Kong and Shanghai Banking Corporation"/>
                <label>IFSC Code *</label>
                <input required type="text" maxLength="11" className="form-control" placeholder="HSBC1111111"/>
                <label>Account Number *</label>
                <input required type="number" maxLength="16" className="form-control" placeholder="1111 1111 1111 1111"/>
                <br/>
                <label>Amount: $ {props.match.params.total}</label>
                <br/>
                <button type="submit" className="btn btn-primary">Pay</button>
            </form>
        </div>
    )
} 