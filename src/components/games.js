import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import GameComp from './scomponent'
import GameData from './gamedata'

export default class Games extends Component {
  render() {
    return (
      <div>
        <div className="./home-page.component.css"></div>
        <br/>
        <br/>
        {GameData.map(game=><GameComp key={game.id} title={game.title} brand={game.brand} age={game.age} genre={game.genre} simgurl={game.simgurl} limgurl={game.limgurl} id={game.id} price={game.price}/>)}
      </div>
    )
  }
}