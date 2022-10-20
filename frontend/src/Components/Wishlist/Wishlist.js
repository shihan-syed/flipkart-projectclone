import './Wishlist.css'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { authaxios } from '../Axios/Axios';

export const Wishlist = () => {

  var token = localStorage.getItem('email')
  
  const [data , setData]= useState([]);
  const [remove ,setRemove]=useState("0")
  
  
      useEffect(()=>{
         authaxios.get(`/home/wishlist/${token}`).then((data)=>{
         setData(data.data)
         console.log("hello")
          })
      },[token ,remove ]);

      const trash=(itm)=>{
        authaxios.delete(`/home/deletewishlist/${itm.id}`).then((data)=>{
            setRemove(remove+1)
            
            
             })
      }




  return (
    <div className='divwishlist' > 
<Header />
<div className='div20'>
    <div className='div21'><div> <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg' alt="">
        </img><span className='hello'>Hello,</span></div>
         <div className='sidelogout'><div className='div78'></div>
          <div className='logbtnn'><i className="logbtn fa-solid fa-power-off"></i><p className='loggg'>Logout</p></div>
          </div>
    </div>
        
    <div className='div22'> 
     
    <div className='div23'> My Wishlist</div>
    {data.map((itm)=>
    <div className='wishlisitem'>
    
         
          <div> <img className='itemimage' src={itm.imageurl} alt=""/></div>

          <div className='div40'> <div className='div401'>{itm.Name}</div>
          <div ><button className='starr' > <i class="fa-solid fa-star fa-2xs"></i></button>
          <img className='asrd' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" style={{"width":'85px' }}/>
          </div><div></div>
          <div className='pricee'>
          <div className='pricce'>₹{itm.price}</div>
          <div><p className='strike'><s>₹{itm.maxprice}</s></p></div>
          <div className='off'>{itm.discount}% Off</div>
          </div>
          
          </div>
          <div className='deleteicon' onClick={()=>{trash(itm)}} ><i className=" fa-solid fa-trash"   ></i></div>
          
    </div>)}
   </div>
</div>

    </div>
  )
}
  