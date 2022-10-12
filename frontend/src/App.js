import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./Components/Home/Home";
import Productlist from "./Components/Productlist/Productlist";



function App() {
  return (
<BrowserRouter >

    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route path='/listproduct/:id' element={<Productlist/>}/>

    </Routes>
  </BrowserRouter >
  );
}
export default App;
