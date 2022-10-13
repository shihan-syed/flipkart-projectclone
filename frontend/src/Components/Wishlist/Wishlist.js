import './Wishlist.css'

import React from 'react'
import { Header } from '../Header/Header'

export const Wishlist = () => {
  return (
    <div className='divwishlist' > 
<Header />
<div className='div20'>
    <div className='div21'><div> <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg' >
        </img><span className='hello'>Hello,</span></div>
         <div className='sidelogout'><div className='div78'></div>
          <div className='logbtnn'><i className="logbtn fa-solid fa-power-off"></i><p className='loggg'>Logout</p></div>
          </div>
    </div>
        
    <div className='div22'> 
     
    <div className='div23'> My Wishlist</div>
    <div className='wishlisitem'>
        
         
          <div><img className='itemimage' src='https://rukminim1.flixcart.com/image/832/832/ksxjs7k0/shoe/z/3/j/10-373108-10-puma-white-white-gray-violet-original-imag6dsukkzk5hxy.jpeg?q=70'/></div>

          <div className='div40'> <div className='div401'>Urban Terrain UT1001 MTB 27.5 T Mountain Cycle (21 Gear, Blue)</div>
          <div ><button className='starr' > <i class="fa-solid fa-star fa-2xs"></i></button>
          <img className='asrd' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" style={{"width":'85px' }}/>
          </div><div></div>
          <div className='pricee'>
          <div className='pricce'>₹3,999</div>
          <div><p className='strike'><s>₹9999</s></p></div>
          <div className='off'>40% off</div>
          </div>
          
          </div>
          

          <div className='deleteicon'><i className=" fa-solid fa-trash"></i></div>
          

          
     


    </div>
   </div>
</div>

    </div>
  )
}
  