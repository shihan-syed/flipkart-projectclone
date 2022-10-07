import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Topoffers.css'
import axios from "axios";
import {baseurl} from '../Axios/constants'
import { useNavigate } from 'react-router-dom';


const TopOffers = () => {

  const history = useNavigate();

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
    axios.get(`${baseurl}/home/topoffers`).then((data)=>{
    console.log(data.data)
    setData(data.data)
  })
},[]);

const redirecttp=(itm)=>{
  localStorage.setItem("item" , itm.item)
  history(`/listproduct/${itm.item}`)
}


  return (
    <div className='d-flex'>

      <div className='qwsaaswq'>
        <Carousel responsive={responsive}
                  containerClass="carousel-container"
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
        >
          {data.map((itm,k)=>
    <div className='egvwrg'  onClick={()=>{redirecttp(itm)}}>
            <div className='textcenter rthfhfdh'><img src={itm.imageurl} alt="" style={{"height":"250px"}}/></div>
            <div className='textcenter etre'> <p>{itm.Name}</p>
              <div className='textcenter dbhfj'><p>{itm.Description}</p></div>
              <div className='textcenter erter'>{itm.Brand}</div>
            </div>
          </div>
         )}
      </Carousel>
      </div>
      
      <div className='dfgdfg'>
        <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="" style={{"width":"100%", "height":"350px"}} />
      </div>
    </div>
  )
}

export default TopOffers