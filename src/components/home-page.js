import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "./carousel"
import GameData from './gamedata'
import BookData from './bookdata'
import GameComp from './scomponent'
import './home-page.css'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.onChangegame=this.onChangegame.bind(this)
    this.onChangebook=this.onChangebook.bind(this)
    this.state={searchgame:'',searchbook:''}
}
  onChangegame(e){
    this.setState({searchgame:e.target.value})
    }

  onChangebook(e){
    this.setState({searchbook:e.target.value})
  }
  render() {
    const {searchgame, searchbook}=this.state
    const filteredGames=GameData.filter(game=>{return game.title.toLocaleLowerCase().indexOf(searchgame.toLocaleLowerCase())!==-1 || game.age.toLocaleLowerCase().indexOf(searchgame.toLocaleLowerCase())!==-1 || game.brand.toLocaleLowerCase().indexOf(searchgame.toLocaleLowerCase())!==-1 || game.genre.toLocaleLowerCase().indexOf(searchgame.toLocaleLowerCase())!==-1})// Used https://www.youtube.com/watch?v=RM_nXOyHwN0
    const filteredBooks=BookData.filter(book=>{return book.title.toLocaleLowerCase().indexOf(searchbook.toLocaleLowerCase())!==-1 || book.brand.toLocaleLowerCase().indexOf(searchbook.toLocaleLowerCase())!==-1})
    return (
      <div>
        <Carousel/>
        <div className="./home-page.css"></div>
        <h3 className="container">Best sold games and books in the world at a price you never thought you could buy</h3>
        <br/>
          <h3>Search only for the best games and books in the world!</h3>
          <div className="form-group">
                <input onChange={this.onChangegame} value={this.state.searchgame} className="container form-control" type="search" placeholder="Search games, genres, age and brand"/>
                {filteredGames.map(game=><GameComp key={game.id} title={game.title} brand={game.brand} age={game.age} genre={game.genre} simgurl={game.simgurl} limgurl={game.limgurl} id={game.id} price={game.price}/>)}
        </div>
          <div className="form-group">
                <input onChange={this.onChangebook} value={this.state.searchbook} className="container form-control" type="search" placeholder="Search books and brand"/>
                {filteredBooks.map(book=><GameComp key={book.id} title={book.title} brand={book.brand} age={book.age} genre={book.genre} simgurl={book.simgurl} limgurl={book.limgurl} price={book.price} id={book.id}/>)}
        </div>
      </div>
      
    )
  }
}