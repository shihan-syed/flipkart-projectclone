import React, { useEffect, useState } from 'react'

import axios from "axios";
import {baseurl} from '../Axios/constants'
import './Header.css' ;
import { Link, useNavigate } from "react-router-dom";



export const Header = () => 
{ 
const history = useNavigate();
const [login , setLogin]=useState(true)
const [email , setEmail] =useState('')
const [password , setPassword] =useState('')
const [username , setUsername]= useState("")
const [logout , setLogout]=useState(false)
const [search , setSearch]=useState('')
const [searchdata ,setSearchData]=useState([])
  // const history = useNavigate();
const loggedIn =!!localStorage.getItem("email")
console.log(loggedIn);
  const handleLogin = ()=>{
    setLogin (false)
  }

useEffect(()=>{
  if(search===''){
    return;
  }else{ 
    axios.get(`${baseurl}/home/search/${search}`).then((data)=>{
    console.log(data.data)
     setSearchData(data.data)
  })
}
},[search])


  const handleLoginn = ()=>{
axios.post(`${baseurl}/b/signin` , {"email" : email , "password" : password}).then((res)=>{
  console.log(res.data);
  if(res.data.status){

    localStorage.setItem('email' , res.data.email)
       localStorage.setItem('username' , res.data.username) 
       localStorage.setItem("token" , res.data.jwtToken)
       window.location.reload();

  }
  else {
    alert("incorrect username")}
}).catch((err)=>{console.log(err)})
  }
  const handleSignup =()=>{
    axios.post(`${baseurl}/a/signup` , {"email" : email , "password" : password , "username" : username}).then((res)=>{
      console.log(res);
      setLogin(true)
    })
  }


const logoutuser=()=>{
  localStorage.clear()
  history('/')
}

const wishlistitm=()=>{
  history('/wishlist')
}
const redirecttp=(itm)=>{
  localStorage.setItem("itms" , itm.id)
  history(`/product/${itm.Name}`)
}


  return (
  
  
  
      <div onMouseLeave={()=>{setLogout(false)}} className='topnav '>
       
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
        <input className="search22" type="search" placeholder="Search products, brands and more"  name="search" onChange={(e)=>{setSearch(e.target.value)}}/>
      <button className="btn22" type="submit"><i className="search-lens fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
      {search?<div className='searchlist'>
        {searchdata.map((itm,k)=><div onClick={()=>{redirecttp(itm)}} className='searchquerty'>{itm.Name}</div>)}
        </div>:<div></div>}
      </div>
      

     {loggedIn ? <div className="namee"><div onMouseEnter={()=>{setLogout(true)}} ><h5>{localStorage.getItem("username")}</h5>

     {logout?<div className='logoutbtnnns'>
      <div onClick={()=>{wishlistitm()}}><button className='vbvbvv'><i class="iconss fa-solid fa-heart"></i> Wishlist</button></div>
      <div onClick={()=>{logoutuser()}}><button   className='vbvbvv'><i class="iconss fa-solid fa-power-off"></i> Logout</button></div>
     </div>:<div></div>}
     
     
     </div></div >: <div className='login-astf'> <button className='login-class ' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" > Login </button></div>}
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
        
               
                <div className='img78'> <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' alt=""/></div>
              </div>

         
              < div  className='white11'>
                   
             {login ?<div></div> : <div class="user-id user-data">
              <input  type="string" required name="username" onChange={(e)=>{setUsername(e.target.value)}} />
              <label>Username</label>
            </div>}

            <div class="user-id user-data">
              <input  type="email" required  name="email" onChange={(e)=>{setEmail(e.target.value)}} />
              <label>Enter Email/Mobile Number</label>
            </div>


            <div class="user-id user-data">
              <input type="password" required name="password" onChange={(e)=>{setPassword(e.target.value)}} />
              <label>Enter Password</label>
            </div>
            
                
            {login ? 
              <div class="user-id button" onClick={()=>{handleLoginn()}}> <input type="submit" name="" id="" value="Login" /> </div>
            :<div class="user-id button"  onClick={()=>{handleSignup()}}> <input type="submit" name="" id="" value="Signup" /> </div>
            }

            <div class="user-id">
            
        </div>
           { login ? <div class="user-id button"> <input type="reset" name="" id="" value="Request OTP" /> </div>
           : <div class="user-id button" onClick={()=>{setLogin(true)}} > <input type="reset" name="" id="" value="Existing User? Login" /> </div>}

           { login ? <div class="user-id" onClick={handleLogin} > <p class="footer"><div className='a'>New to Flipkart? Create an account</div></p> </div>
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





