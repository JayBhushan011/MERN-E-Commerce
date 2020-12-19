import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar"
import HomePage from "./components/home-page"

function App() {
 return (
   <Router>
    <NavBar/>
    <Route path="/" exact component={HomePage}/>
   </Router>
 );
}

export default App;