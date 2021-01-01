import React, { Component } from 'react'
import Axios from 'axios'

export default class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state={address:[]}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
    }
    componentDidMount(){
        Axios.get('http://localhost:5000/user/getAddress')
        .then(res=>this.setState({address:res}))
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <label>Address 1:</label>
                <input type="text" required value={this.state.address} className="form-control"></input>
                <button type="submit" className="btn btn-primary" >Edit Address</button>
                </form>
            </div>
        )
    }
}