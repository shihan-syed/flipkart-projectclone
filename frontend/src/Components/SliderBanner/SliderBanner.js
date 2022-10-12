/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./SliderBanner.css"

const SliderBanner = () => {
  return (
    <div className='carouselqsc'>
       <div id="carouselExampleFade" className="carousel slide " data-bs-ride="carousel">


  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/27ef43b89056e751.jpg?q=50" className="d-block w-100" style={{"height":"270px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1fe43c2dc524501b.jpg?q=50" className="d-block w-100" style={{"height":"270px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/b66796849b310500.jpg?q=50" className="d-block w-100" style={{"height":"270px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/cae8d4a5b99d3365.jpg?q=50" className="d-block w-100" style={{"height":"270px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/75a15c3e19c3f7de.jpg?q=50" className="d-block w-100" style={{"height":"270px"}} alt="..."/>
    </div>
    </div>
    <a  className='active prvbtn bg-white'>
    <button className="prvbtn carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="prv" aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
  </button></a>
  <button className="nxtbtn carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="nxt" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
  </button>

</div>
    </div>
  )
}

export default SliderBanner