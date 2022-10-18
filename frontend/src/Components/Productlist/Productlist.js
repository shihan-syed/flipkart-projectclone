import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import './Productlist.css'
import axios from "axios";
import {baseurl} from '../Axios/constants'
import { useNavigate } from 'react-router-dom';

function Productlist() {

    var search = localStorage.getItem("item")
    const history = useNavigate();

    const [data1 , setData1] = useState("0")
    const [data , setData]= useState([]);

    const highttolow=()=>{
      setData1(1)
         
      }

    const lowtohigh=()=>{
        setData1(2)
           
    }

    const relevance=()=>{
        setData1(3)
             
    }

    const popularity=()=>{
          setData1(4)
               
    }
    const newest=()=>{
      setData1(5)
           
    }

    useEffect(()=>{
      axios.get(`${baseurl}/home/getdata${data1}/${search}`).then((data)=>{
      console.log(data.data)
      setData(data.data)
    
    })
  },[data1, search])

  const redirecttp=(itm)=>{
    localStorage.setItem("itms" , itm.id)
    history(`/product/${itm.Name}`)
  }

  return (
    <div>
        <Header/>
        <div className='ryrtgh bg-h'>
            <div className='sidebarqwe'>

                <div className='hhfjd'>Filters</div>

            </div>
            {/* Product list */}
            <div className='productlisting'>
                <div className='filters'>
                    <div style={{"font-weight":"600"}}>Sort By</div>
                    <div onClick={relevance} className='rtyghfgh'>Relevance</div>
                    <div onClick={popularity} className='rtyghfgh'>Popularity</div>
                    <div onClick={lowtohigh} className='rtyghfgh'>Price--Low to High</div>
                    <div onClick={highttolow} className='rtyghfgh'>Price--High to Low</div>
                    <div onClick={newest} className='rtyghfgh'>Newest First</div>
                </div>
                
                <div className='row'>
                {data.map((itm,k)=>
                    <div className='itemlist coloum' >
                        <div className='textcenter imghrt' onClick={()=>{redirecttp(itm)}}>
                           
                        <img src={itm.imageurl} alt="" style={{"width":"200px","height":"200px"}} />
                        </div>
                         <h6 className='hdding'>{itm.Name}</h6>
                         <p className='keyword'>{itm.keywords}</p>
                         <div >
                            <button className='rating'>{itm.rating} <i class="fa-solid fa-star fa-2xs"></i></button>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" style={{"width":'85px' }}/>
                         </div>

                         <div className='price'>
                            <p className='boldtext'>₹{itm.price}</p>
                            <p className='textlight'>₹{itm.maxprice}</p>
                            <p className='greentext'>{itm.discount}% Off</p>
                        
                         </div>
                         <div className='emi'><p>No Cost EMI from ₹459/month</p></div>
                    </div>
                  )}
            
                </div>

            </div>
        </div>

</div>
  )
}

export default Productlist