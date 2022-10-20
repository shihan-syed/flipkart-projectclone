import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../Axios/constants';
import { Header } from '../Header/Header';
import './Productpage.css'
import { authaxios } from '../Axios/Axios';

function Productpage() {

    const [data , setData]= useState([]);
    var id = localStorage.getItem("itms")
    var token = localStorage.getItem("email")
    var history = useNavigate()


    useEffect(()=>{
        axios.get(`${baseurl}/home/indproduct/${id}`).then((data)=>{
        console.log(data.data)
        setData(data.data)
      })
    },[id]);

   const addproductsin=(itm)=>{
    if(!token){
      alert("You Need to login to Add Products")
    }else{
      authaxios.post(`/home/addcart/${token}`,itm ).then((data)=>{
        console.log(data)
        history("/cart")

      })
    }
   }
   const Buyproductsin=(itm)=>{
    if(!token){
      alert("You Need to login to Add Products")
    }else{
      authaxios.post(`/home/addcart/${token}`,itm ).then((data)=>{
        console.log(data)
        history("/buynow")

      })
    }
   }

  return (
    <div>
                <Header/>

            
    
    <div className='fnbcvjkfdh'>
            <div className='imagename'>
                <div className='dngjkhfd'>
              <img src={data.imageurl} alt=""  style={{"width":"400px" , "height":"400px"}}/>
              </div>
              <div className='bnvjkfdc'>
                <div><button  onClick={()=>{addproductsin({data})}} style={{"backgroundColor":"#ff9f00"}}><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button></div>
                <div><button onClick={()=>{Buyproductsin({data})}} style={{"backgroundColor":"#fb641b"}} ><i class="fa-solid fa-bolt"></i> BUY NOW</button></div>
              </div>
            </div>

               
                <div className='descriptionmath'>

                <div className='bnvhjdcgjd '>{data.Name}</div>

                <div >
                    <button className='rating'>{data.rating} <i class="fa-solid fa-star fa-2xs"></i></button>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" style={{"width":'85px' }}/>
                 </div>

                 <div style={{"margin-top":"15px", "font-weight":"400"}}>Extra ₹1300 off</div>

                 <div className='price'>
                    <p className='boldtext1'>₹{data.price}</p>
                    <p className='textlight1'>₹{data.maxprice}</p>
                    <p className='greentext1'>{data.discount}% Off</p>
                        
                 </div>

                 <div style={{"margin-bottom":"7px"}}><b>Coupons for you</b></div>

                 <div style={{"display":"flex"}}><span className='mnbv' style={{"color":"green"}}><i class="fa-solid fa-ticket"></i>  </span> <span className='mnbvc'>  Special Price  </span> <span className='mnbvcx'>  ₹100 off with cashback coupon on First Order</span><span className='mnbvcxz'>T&C</span> </div>

                 <div style={{"margin-bottom":"7px"}} className='fdgfdc'><b>Available offers</b></div>

                 <div style={{"display":"flex"}}><span className='mnbv' style={{"color":"green"}}><i class="fa-solid fa-tag"></i></span> <span className='mnbvc'>Special Price</span><span className='mnbvcx'>Get extra ₹1200 off (price inclusive of cashback/coupon)</span><span className='mnbvcxz'>T&C</span> </div>
                 <div style={{"display":"flex"}}><span className='mnbv' style={{"color":"green"}}><i class="fa-solid fa-tag"></i></span> <span className='mnbvc'>Bank Offer </span> <span className='mnbvcx'>10% off on HDFC Bank Credit and Debit Card Full Swipe Trxns,up to ₹500.On orders of ₹5,000 and above</span><span className='mnbvcxz'>T&C</span> </div>
                 <div style={{"display":"flex"}}><span className='mnbv' style={{"color":"green"}}><i class="fa-solid fa-tag"></i></span> <span className='mnbvc'>Bank Offer</span><span className='mnbvcx'>10% off on HDFC Bank Credit and Debit Card EMI Trxns, up to ₹1,000. On orders of ₹5,000 and above</span><span className='mnbvcxz'>T&C</span> </div>
                <div style={{"margin-top":"7px"}} className='fghudg'>View 7 more offers</div>

                 <div className='hgj'>
                    <img src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/d9dd99abf9d4b689430ea501381abd15df62f9d16e3c166864e79eac5d365ee6.jpg?q=90" style={{"width":"60px" , "height":"23px"}} alt="" />
                    <div >6 months Domestic Warranty on Manufacturing Defects <span style={{"color":"blue"}}>Know More</span></div>

                 </div>

                 <div className='descirpiov'>
                    <div className='a1122'>Description</div>
                    <div className='a2211'>{data.Description}</div>
                 </div>
 

                </div>
                </div>
         
   

    </div>
  )
}

export default Productpage