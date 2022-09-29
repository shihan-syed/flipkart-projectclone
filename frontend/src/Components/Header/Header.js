import React from 'react'
import './Header.css' ;
export const Header = () => {
  return (
    <div>
      <div>
        <nav className='nav' > <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' className='flipkart-logo' />
        <p className='explore '>Explore 
          <span className='plus-color'> plus</span>
          <img  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='image'  className='flipkart-plus-logo'/>
          </p>
        </div>  
      </nav>
    </div>
  )
}
