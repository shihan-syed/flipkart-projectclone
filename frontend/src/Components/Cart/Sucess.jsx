import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../Axios/constants';
import { Header } from '../Header/Header';
import './Cart.css'
import { authaxios } from '../Axios/Axios';

function Sucess() { 
  const token = localStorage.getItem("email")
  const history = useNavigate()
  const gotohome=()=>{
    history('/')
  }

  useEffect(()=>{
    authaxios.delete(`/home/clearcart/${token}`).then((data)=>{
    console.log("hello")
     })
 },[token]);

  return (
    <div className='backgroundsucess'>
     <Header/>

     <div className='paymentconfirmed'>
      <div className='itembox'>
        <div className='text-center mt-4'>
      <img src="https://www.pngitem.com/pimgs/m/509-5099390_check-green-check-list-icon-hd-png-download.png" style={{"width":"70px" ,"height":"50px"}} alt="" />
      <div className='txttxtx'>Payment Sucess</div>
      </div>

      <div className='suscscsf'>
        <p>Your Order has been Sucessfully placed and we will try to deliver your product with in next 5-7 days.</p>
      </div>

      <div className='tggdfgt'><button onClick={()=>{gotohome()}}>Go to Home</button></div>

      </div>

     </div>

    </div>
  )
}

export default Sucess