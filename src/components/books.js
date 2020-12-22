import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import BookComp from './scomponent'
import BookData from './bookdata'

export default class Books extends Component {
  render() {
    return (
      <div>
        <div className="./home-page.component.css"></div>
        <br/>
        <br/>
        {BookData.map(book=><BookComp key={book.id} title={book.title} brand={book.brand} age={book.age} genre={book.genre} simgurl={book.simgurl} limgurl={book.limgurl} price={book.price} id={book.id}/>)}
      </div>
    )
  }
}