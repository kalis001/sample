import React from 'react'
import './Home.css'
import imgn from './images/author2.png'
import imgm from './images/author1.png'


export default function Home() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg">
        <div className='container-lg'>
  <a class="navbar-brand name me-5" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav gap-5 me-5">
      <a class="nav-item nav-link" href="#">Home</a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Service</a>
      <a class="nav-item nav-link" href="#">Portfolio</a>
      <a class="nav-item nav-link" href="#">Pages</a>
    </div>
    <input className='nav-search' type='search' />

  </div>
  </div>
</nav> 

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-25" src={imgn} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-25" src={imgm} alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}
