import React, { Component } from 'react';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './navbar.css'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login'
import { refreshTokenSetup } from './refreshToken'//Implemented Google SignIn and Out using https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del

export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={name:'',url:'',isLoggedin:false}
    this.responseGoogle=this.responseGoogle.bind(this)
    this.onSignOut=this.onSignOut.bind(this)
  }
  componentDidMount(){
    document.body.style.backgroundColor = "#fbeec1"
  }
  responseGoogle(res){
      this.setState({name:res.profileObj.givenName})
      this.setState({url:res.profileObj.imageUrl})
      this.setState({isLoggedin:true})
      //alert('You have successfully Signed In')
      refreshTokenSetup(res)
  }
  onSignOut(res){
      this.setState({isLoggedin:false})
      alert('You have successfully Signed Out')
  }
  render(){
    return (
      <div className="component">
        <div className="main">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">{/*Used these components from using bootstrap*/}
            <div className="./navbar.component.css"></div>
            <div className="navlogo"><a href="/"><img src="logo.png" width="30%" alt="JAS Logo"></img></a><p className="navlogotext">JAS</p></div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/cncs">Contact and Customer Support</a>{/*https://getbootstrap.com/docs/4.0/components/dropdowns/*/}
                      <a className="dropdown-item" href="/faqs">FAQs</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/feedback">Feedback</a>
                    </div>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/games">Games<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/books">Books<span class="sr-only">(current)</span></a>
              </li>
              </ul>

              {this.state.isLoggedin===true&&<ul className="navbar-nav ml-auto">
              <img src={this.state.url} alt="" height="50px"/>
                  <li className="nav-item dropdown active">
                  <a  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">Welcome {this.state.name}<span className="sr-only">(current)</span></a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={this.handleClick} href="/">
                        <GoogleLogout
                        clientId="938975649953-3ge11uotsdjfjhdhm4ud8ibgg7u3aeuh.apps.googleusercontent.com"
                        buttonText="Sign Out"
                        onLogoutSuccess={this.onSignOut}/>
                    </a>
                  </div>
                </li>
              </ul>}
            </div>
            {this.state.isLoggedin===false&&
            <GoogleLogin
    clientId="938975649953-3ge11uotsdjfjhdhm4ud8ibgg7u3aeuh.apps.googleusercontent.com"
    buttonText="Sign In"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />}
          </nav>
       </div>
      </div>
)
}
}