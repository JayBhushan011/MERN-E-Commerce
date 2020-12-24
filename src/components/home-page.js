import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "./carousel"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <h3>"Best sold games and books in the world at a price you never thought you could buy"-Times of India</h3>
      </div>
      
    )
  }
}