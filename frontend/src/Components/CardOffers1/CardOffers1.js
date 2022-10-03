import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardOffers.css';
import logo from "../../images/Screenshot 2022-10-03 145109.png"


function CardOffers1() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>

<div className='d-flex mt-3 '>

<div className='rtyfh'>
  <h3 className='text-center'>Best of </h3>
  <h3 className='text-center'>Electronics</h3>
<div className='text-center mt-4'>
  <button className='btn btn-primary'>VIEW ALL</button>
  </div>
   <div className='eriut'>
    <img src={logo} alt="" style={{ "width":"241px"}}/>
   </div>
</div>

<div className='dhgdf'>
  <Carousel responsive={responsive}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
  >
    <div><img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="" style={{"width":"230px", "height":"350px"}}/></div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
</Carousel>
</div>


</div>

    </div>
  )
}

export default CardOffers1