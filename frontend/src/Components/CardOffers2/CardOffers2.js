import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CardOffers1/CardOffers.css';
import logo from "../../images/3.png"
import axios from "axios";
import {baseurl} from '../Axios/constants'

function CardOffers2() {
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

  const [data , setData]= useState([]);

  useEffect(()=>{
    axios.get(`${baseurl}/home/getdetails2`).then((data)=>{
      console.log(data.data)
      setData(data.data)
    })
  },[])

  return (
    <div>

<div className='d-flex mt-3 '>

<div className='rtyfh'>
  <h3 className='text-center'>Home &</h3>
  <h3 className='text-center'>Kitchen</h3>
  <h3 className='text-center'>Essentials </h3>
<div className='text-center mt-4'>
  <button className='btn btn-primary'>VIEW ALL</button>
  </div>
   <div className=''>
    <img src={logo} alt="" style={{ "width":"239px" , "height":"99px"}}/>
   </div>
</div>

<div className='dhgdf'>
  <Carousel responsive={responsive}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
  >
    {data.map((itm,k)=>
    <div className='egvwrg'>
            <div className='textcenter rthfhfdh'><img src={itm.imageurl} alt="" style={{"height":"250px"}}/></div>
            <div className='textcenter etre'> <p>{itm.Name}</p>
              <div className='textcenter dbhfj'><p>{itm.Description}</p></div>
              <div className='textcenter erter'>{itm.Brand}</div>
            </div>
          </div>
         )}
</Carousel>
</div>


</div>

    </div>
  )
}

export default CardOffers2