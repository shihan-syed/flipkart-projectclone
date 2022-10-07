import React from 'react'
import TextField from '@mui/material/TextField';
import './Header.css' ;
export const Header = () => 
{
  return (
   
      <div className='topnav '>
        
        <div className='arrange'>
        <div className='logo-area'><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' className='flipkart-logo' alt="" />
        <div ><p className='explore '>Explore 
          <span className='plus-color'> plus</span>
          <img  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='img'  className='flipkart-plus-logo'/>
          </p>
         
    
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      
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

      <div className='login-astf'> <button className='login-class ' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" > Login </button></div>

    {/* Modal   */}

<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className='modal-area'>

      <div className='modal-blue'>
        <h4 className='blue-line'> Login </h4>
        
        <p className='span-line'>Get access to your  </p>
        <p className='span-line'> Orders, Wishlist and  </p>
        <p className='span-line'> Recommendations </p>

        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' className='blue-image'></img>
      </div>
      <div className='modal-white'>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </div>
    
  
  </div>
</div>




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



//  Modal  

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


