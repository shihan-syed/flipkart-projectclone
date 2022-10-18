import { BrowserRouter, Routes, Route, } from "react-router-dom";
import BuyNow from "./Components/BuyNow.css/BuyNow";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Cart/Error";
import Sucess from "./Components/Cart/Sucess";

import Home from "./Components/Home/Home";
// import Payment from "./Components/Payment/Payment";
import Productlist from "./Components/Productlist/Productlist";
import Productpage from "./Components/Productpage/Productpage";
import { Wishlist } from "./Components/Wishlist/Wishlist";
// import { Wishlist } from "./Components/Wishlist/Wishlist";




function App() {
  return (
<BrowserRouter >

    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route path='/listproduct/:id' element={<Productlist/>}/>
      <Route path='/product/:item' element={<Productpage/>}/>
      <Route path='/product/:item/:items' element={<Productpage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Checkout' element={<BuyNow/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/buynow' element={<BuyNow/>}/>
      <Route path='/payment/3/sucess' element={<Sucess/>}/>
      <Route path='/error' element={<Error/>}/>

      </Routes>
  
  </BrowserRouter >





  
  )
}
export default App;
