import React, { useState } from 'react'


import './Header.css' ;
import { Link } from "react-router-dom";



export const Header = () => 
{ 
const [login , setLogin]=useState(true)
  
  const handleLogin = ()=>{
    setLogin (false)
  }
  const handleSignup =()=>{
    setLogin (true)
  }
  return (
  
  
  
      <div className='topnav '>
       
        <div className='arrange'> <Link to='/'>
        <div className='logo-area'><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' className='flipkart-logo' alt="" />
        <div >
          <p className='explore '>Explore 
          <span className='plus-color'> plus</span>
          <img  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='img'  className='flipkart-plus-logo'/>
          </p> 
        </div> 

      </div></Link>

      <div className='qscqsc'>    
        <form className="shadow form-astf">
        <div className=' form22'>
        <input className="search22" type="search" placeholder="Search products, brands and more" aria-label="Search"/>
      <button className="btn22" type="submit"><i className="search-lens fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
      </div>

      <div className='login-astf'> <button className='login-class ' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" > Login </button></div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-content ">
          
            <div className='logboxx'>
              <div className='blue11'>
                { login ? 
                  <div>
                   <div className='login2'>Login</div>
                <div className='span55'>
                <span>Get access to your</span>       
                <span> Orders, Wishlist and </span>
                <span> Recommendations</span>
                </div>
               </div>
               :
               <div>
               <div className='login2'>Looks like you're new here!</div>
            <div className='span55'>
            <span>Sign up with your mobile number to get started</span>       
           
            </div>
           </div>
               }
        
               
                <div className='img78'> <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'/></div>
              </div>

         
              < div  className='white11'>
                   
              

            <div class="user-id user-data">
              <input type="email " name="" id="" required=""/>
              <label>Enter Email/Mobile Number</label>
            </div>

            <div class="user-id user-data">
              <input type="password" name="" id="" required=""/>
              <label>Enter Password</label>
            </div>
            
                
            {login ? 
              <div class="user-id button"> <input type="submit" name="" id="" value="Login" /> </div>
            :<div class="user-id button"> <input type="submit" name="" id="" value="Signup" /> </div>
            }

            <div class="user-id">
            
        </div>
           { login ? <div class="user-id button"> <input type="reset" name="" id="" value="Request OTP" /> </div>
           : <div class="user-id button" onClick={()=>{handleSignup()}}> <input type="reset" name="" id="" value="Existing User? Login" /> </div>}

           { login ? <div class="user-id" onClick={()=>{handleLogin()}}> <p class="footer"><a>New to Flipkart? Create an account</a></p> </div>
              : <div></div>}

          </div>
        </div>
      
              
         
    
            {/* ////// */}
        </div>
       </div> 

        <div className='p-div'><p className='p-class'>Become a Seller</p></div>

      <div className='more-div'>
        <p className='more-class'>More</p>
        <i className="arrow-class fa-sm fa-solid fa-chevron-down"></i>
      </div>

        <div className='cart-div'>
         <i className=" cart-icon fa-sm fa-solid fa-cart-shopping"></i>
         <Link to="/cart"><p  className='cart-class'>Cart</p></Link>
      </div> 
      </div>
      </div>   

          

     
  
  )
}






