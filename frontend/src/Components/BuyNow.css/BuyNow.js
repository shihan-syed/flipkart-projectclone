import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { baseurl } from '../Axios/constants';
import './Buynow.css'
import { authaxios } from '../Axios/Axios';

function BuyNow()
{
var token = localStorage.getItem('email')
const [remove ,setRemove]=useState("0")
const [data , setData]= useState([]);
const [quantity , setQuantity]= useState('0');


  const addmoreproduct=(itm)=>{
    var qny = itm.quantity+1
   if(itm.quantity<=4){
    authaxios.put(`/home/update/${itm.id}`, {data:token , numqnt:qny}).then((data)=>{
       console.log(data)
       setQuantity(quantity+1)
    })
   }
   else{
    alert("Cannt add more than 5 items")
   }
  }

  const removeproduct=(itm)=>{
    var qny = itm.quantity-1
   if(itm.quantity>1){
    authaxios.put(`/home/update/${itm.id}`, {data:token , numqnt:qny}).then((data)=>{
       console.log(data)
       setQuantity(quantity+1)
    })
   }
   else{
    alert("Cannt Remove item")
   }
  }
  const totalamount=()=>{
    const x = data.map((itm,k)=>itm.price*itm.quantity)
   console.log(x)
     let total_sum = 0;
    x.forEach(eachVal => {
        total_sum += eachVal;
    });

    return total_sum 
}
const redirecttp=(itm)=>{
  authaxios.delete(`/home/delete/${itm.id}`).then((data)=>{
      setRemove(remove+1)
      
      alert("Sucessfully Removed")
       })
}

const savings=()=>{
  
  const y = data.map((itm,k)=>itm.maxprice*itm.quantity)
  let total_sums = 0;
 y.forEach(eachVal => {
     total_sums += eachVal;
 });

 const x = data.map((itm,k)=>itm.price*itm.quantity)
console.log(x)
  let total_sum = 0;
 x.forEach(eachVal => {
     total_sum += eachVal;
 });


 return(total_sums-total_sum)

}


  useEffect(()=>{
    authaxios.get(`/home/cartlist/${token}`).then((data)=>{
    setData(data.data)
    console.log("hello")
     })
 },[token , remove , quantity]);

const Payment = ()=>{
  
  axios.post(`${baseurl}/payment/create-checkout-session`, {data}).then(res => {
    window.location.href = res.data.url
       
   })
   .catch(e => {
     console.error(e.error)
   })
}

  return (
    <div className='buynow1'>
     <Header/> 
     <div>
     <div className='bn2'>
          <div className='bn3'>
            <div className='bn3a'>
          
                <div className='bn42'>LOGIN <i className="fa-solid fa-check bn34"></i></div>
                <div className='bn45'> {localStorage.getItem("username")}</div>
            </div>
          <div className='bn3b'> 
           <div className='div98'> ORDER SUMMARY </div>
          {data.map((itm,k)=>
                <div className='khkhjkhj'>
                    <div className='dfjkhdk'>
                        <div className='ghfdugd'><img src={itm.imageurl} alt="" style={{"width":"150px"}}/></div>
                        <div className='dfgdsuyfug'>
                            <h6>{itm.Name}</h6>
                            <div style={{"display":"flex"}}>
                                <p style={{"margin-right":"10px", "color":"grey"}}>Sold By: Flipkart</p>
                                <img  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" style={{"width":"60px","height":"18px","margin-top":"4px"}} />
                            </div>
                            <div className='priceq'>
                                <p className='q1'>₹{itm.maxprice}</p>
                                <p className='q2'>₹{itm.price}</p>
                                <p className='q3'>{itm.discount}% Off</p>
                                <p className='q3'>2 Offers Applied</p>

                            </div>
                           
                        </div>

                        

                    </div>
                    <div className='vcxccvnm'>
                            <div>
                                <button onClick={()=>{removeproduct(itm)}} className='btnnqsx'>-</button>
                                <input className='inputqsx' type="number" style={{"width":"50px"}} required name="quantity" value={itm.quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                <button onClick={()=>{addmoreproduct(itm)}} className='btnnqsx'>+</button>
                            </div>
                            <div className='yrtyrtyt'><p>SAVE FOR LATER</p></div>
                            <div onClick={()=>{redirecttp(itm)}} className='yrtyrtyt'><p>REMOVE</p></div>
                     </div>
                    </div>
                )}




          </div>
       <div className='div91' >
        
         <div className='div654'>Order Confirmation will be sent to {localStorage.getItem('email')}</div>
        <div className='div67'><button  style={{"backgroundColor":"#fb641b"}}  onClick={()=>Payment()} > CONTINUE</button></div> 
         </div>

          </div>

    
       
           


        
      <div>
      
      <div className='bn4'>
      
            <div className=''>
                <div><h6 className='textprice'>PRICE DETAILS</h6></div>

                <div style={{"padding":"20px"}}>
                    <div className='dfgjhhfdg'>
                        <p>Price ({data.length} item)</p>
                        <p >₹{totalamount()}</p>
                    </div>

                    {/* <div className='dfgjhhfdg'>
                        <p>Discount</p>
                        <p className='colorty'>-₹{netdiscount()}</p>
                    </div> */}

                    <div className='dfgjhhfdg'>
                        <p>Delivery Charges</p>
                        <p className='colorty'>FREE</p>
                    </div>
                </div>
                <div className='hgjkdf'></div>

                 <div>
                 <div className='gfdgfd'>
                    <p>Total Amount</p>
                    <p >₹{totalamount()}</p>
                </div>
                 </div>

                <div className='hgjkdf'></div>

                <div className='discounterty'>
                     You will save ₹{savings()} on this order
                </div>




            </div>


            









      </div>
      <div className='bn4a'> <img  src='https://rukminim1.flixcart.com/lockin/720/480/images/promotion_banner_v2_active1.png?q=50' alt="" style={{ "width" : "353px"}}/>
      </div>
      </div>
      </div>
      </div>
     </div>
    
  )
}

export default BuyNow