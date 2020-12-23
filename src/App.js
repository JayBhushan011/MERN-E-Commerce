import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar"
import HomePage from "./components/home-page"
import Games from "./components/games"
import Books from "./components/books"
import Product from "./components/product"
import Cart from "./components/cart"
import Profile from "./components/profile"

function App() {
 return (
   <Router>
    <NavBar/>
    <Route path="/" exact component={HomePage}/>
    <Route path="/games" exact component={Games}/>
    <Route path="/books" exact component={Books}/>
    <Route path="/product/:id" component={Product}/>
    <Route path="/cart/:id/:qty" component={Cart}/>
    <Route path="/profile" exact component={Profile}/>
   </Router>
 );
}

export default App;