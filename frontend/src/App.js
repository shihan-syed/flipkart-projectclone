import { BrowserRouter, Routes, Route, } from "react-router-dom";
import BuyNow from "./Components/BuyNow/BuyNow";
import Cart from "./Components/Cart/Cart";

import Home from "./Components/Home/Home";
// import Payment from "./Components/Payment/Payment";
import Productlist from "./Components/Productlist/Productlist";
import Productpage from "./Components/Productpage/Productpage";
import { Wishlist } from "./Components/Wishlist/Wishlist";



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

      </Routes>
  
  </BrowserRouter >





  
  )
}
export default App;
