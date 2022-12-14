import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header'
import './Cart.css' 
import { authaxios } from '../Axios/Axios';
// import StripeCheckout from 'react-stripe-checkout'; 


function Cart() {
const history = useNavigate();
var token = localStorage.getItem('email')
const [remove ,setRemove]=useState("0")
const [data , setData]= useState([]);
const [quantity , setQuantity]= useState('0');

// const [pay , setPay]= useState(false);

    useEffect( ()=>{
        if(token===null){
            return
        }else{ 
            
  try{
    const  getcartdata = async ()=>{
     const response =  await authaxios.get(`/home/cartlist/${token}`)
       setData(response.data)
    }
    getcartdata()
    } 
    catch(err) {
        console.log(err)
    } 
        
    }
    },[token,remove,quantity]);

    const maxp=()=>{
       const x = data.map((itm,k)=>itm.maxprice*itm.quantity)
       console.log(x)
         let total_sum = 0;
        x.forEach(eachVal => {
            total_sum += eachVal;
        });

        return total_sum      
    
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

    const netdiscount=()=>{

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

    const redirecttp=(itm)=>{
        authaxios.delete(`/home/delete/${itm.id}`).then((data)=>{
            setRemove(remove+1)
            
            alert("Sucessfully Removed")
             })
      }

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

      const buynow=()=>{
       history('/buynow')
      }

    
    

  return (
    <div className='ureiyfd'>
        <Header/>
        {token ? <div className='chome'>
            <div className='leftcart'>
                <div className='cartbox'>
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
                                <p className='q1'>???{itm.maxprice}</p>
                                <p className='q2'>???{itm.price}</p>
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
                <div className='hgjkjkhjh'>
               
                    <button onClick={()=>{buynow()}}  style={{"backgroundColor":"#fb641b"}}>PLACE ORDER</button>



          </div>
               
          </div>
            <div className='rightcart'>
            <div className='pricebox'>
                <div><h6 className='textprice'>PRICE DETAILS</h6></div>

                <div style={{"padding":"20px"}}>
                    <div className='dfgjhhfdg'>
                        <p>Price ({data.length} item)</p>
                        <p >???{maxp()}</p>
                    </div>

                    <div className='dfgjhhfdg'>
                        <p>Discount</p>
                        <p className='colorty'>-???{netdiscount()}</p>
                    </div>

                    <div className='dfgjhhfdg'>
                        <p>Delivery Charges</p>
                        <p className='colorty'>FREE</p>
                    </div>
                </div>
                <div className='hgjkdf'></div>

                 <div>
                 <div className='gfdgfd'>
                    <p>Total Amount</p>
                    <p >???{totalamount()}</p>
                </div>
                 </div>

                <div className='hgjkdf'></div>

                <div className='discounterty'>
                     You will save ???{netdiscount()} on this order
                </div>




            </div>


            </div>

        </div>: 
        <div> 
            <div className='text-center jhdgkdfjkhg'>
            <div><img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" style={{"height":"200px", "width":"300px"}} alt="" /></div>
           <div className='mt-1'>Missing Cart items?</div>
           <div>Login to see the items you added previously</div>
           {/* <div><button Link="#exampleModal" className='bvhjefdgh' style={{"backgroundColor":"#fb641b"}}>Login</button></div> */}
            </div>
        </div>
        }

    </div>
  )
}

export default Cart