import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "./carousel"
import GameComp from './scomponent'
import Axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={finalbookinfo:[],finalgameinfo:[]}
  }
  componentDidMount(){
    Axios.get('http://localhost:5000/product/getGames').then(res=>this.setState({finalgameinfo:res.data}))
    Axios.get('http://localhost:5000/product/getBooks').then(res=>this.setState({finalbookinfo:res.data}))
  }
  render() {
    return (
      <div>
        <Carousel/>
        <h3>"Best sold games and books in the world at a price you never thought you could buy"-Times of India</h3>
        <h4 className="container">Games</h4>
        {this.state.finalbookinfo.length===0&&<h1>Loading ...</h1>}
        {this.state.finalgameinfo.length!==0&& this.state.finalgameinfo.map(game=><GameComp key={game.id} title={game.title} brand={game.brand} age={game.age} genre={game.genre} simgurl={game.simgurl} limgurl={game.limgurl} id={game.id} price={game.price}/>)}
        <h4 className="container">Books</h4>
        {this.state.finalgameinfo.length===0&&<h1>Loading ...</h1>}
        {this.state.finalbookinfo.length!==0&& this.state.finalbookinfo.map(book=><GameComp key={book.id} title={book.title} brand={book.brand} simgurl={book.simgurl} limgurl={book.limgurl} id={book.id} price={book.price}/>)}
      </div>
      
    )
  }
}