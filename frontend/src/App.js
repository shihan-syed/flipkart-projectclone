import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./Components/Home/Home";



function App() {
  return (
<BrowserRouter >

    <Routes>
      
      <Route exact path='/' element={<Home/>}/>

    </Routes>
  </BrowserRouter >
  );
}
export default App;
