import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/home/img1.jpeg" class="d-block w-100" alt="..." height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="assets/images/home/img2.jpeg" class="d-block w-100" alt="..." height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="assets/images/home/img3.jpeg" class="d-block w-100" alt="..." height="600px"/>
    </div> 
     <div class="carousel-item">
      <img src="assets/images/home/img4.jpeg" class="d-block w-100" alt="..." height="600px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Products/>
    </div>
  )
}

export default Home