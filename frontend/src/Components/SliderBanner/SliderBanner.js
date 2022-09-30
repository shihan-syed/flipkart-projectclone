import React from 'react'
import "./SliderBanner.css"

const SliderBanner = () => {
  return (
    <div>
         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/87d54183319f5e60.jpg?q=50" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/a4/6b/4e/a46b4ef475e27837660cca8cadf48d2e.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="cbn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon caw" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" cbn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon caw" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default SliderBanner