import React from 'react'
import './Header.css' ;
export const Header = () => 
{
  return (
   
      <div className='topnav'>
        <div className='arrange'>
        <div className='logo-area'><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' className='flipkart-logo' alt="" />
        <div ><p className='explore '>Explore 
          <span className='plus-color'> plus</span>
          <img  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='img'  className='flipkart-plus-logo'/>
          </p>
        </div>  
      </div>

      <div className='qscqsc'>    
        <form className="shadow form-astf">
        <div className=' form22'>
        <input className="search22" type="search" placeholder="Search products, brands and more" aria-label="Search"/>
      <button className="btn22" type="submit"><i className="search-lens fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
      </div>

      <div className='login-astf'><button className='login-class'> Login </button></div>

      <div className='p-div'><p className='p-class'>Become a Seller</p></div>

      <div className='more-div'>
        <p className='more-class'>More</p>
        <i className="arrow-class fa-sm fa-solid fa-chevron-down"></i>
      </div>

        <div className='cart-div'>
         <i className=" cart-icon fa-sm fa-solid fa-cart-shopping"></i>
          <p  className='cart-class'>Cart</p>
        </div>
     
      
      </div>
  </div>
  )
}


