import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Cart.css'



function Error() {
    const history = useNavigate()
    const gotohome=()=>{
      history('/cart')
    }
  return (
    <div className='hfkjgdshg'>
        <Header/>
        <div className='paymentconfirmed'>
        <div className='itembox'>
            <div className="tggdfgtfg mt-3">
                <img src="https://www.statuscake.com/cdn-cgi/image/width=736,quality=80,format=auto/wp-content/uploads/2021/07/iStock-1288486076.jpg" style={{"width":"150px" ,"height":"100px"}} alt="" />
            </div>
            <p className="tggdfgtfg gdfdfg">Error Payment Failed</p>
            <div className='text-center'><button onClick={()=>{gotohome()}} className="btn btn-danger mt-3">Try Again</button></div>
            
        </div>
        </div>
    </div>
  )
}

export default Error