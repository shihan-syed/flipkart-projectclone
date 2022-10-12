const express = require("express");
const app = express();
const cors=require("cors");
const db = require("./models");

const homeData = require('./models/home')

const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const homeRoutes =require("./Routes/home");
const productData = require("./models/product");



app.use("/home" , homeRoutes);


app.post("/adddata" , (req,res)=>{
  data=req.body
  console.log(data)

  data={
  imageurl:data.imageurl ,
  Name:data.name11 ,
  Description: data.description,
  Category:data.category,
  Description: data.description,
  keywords: data.keywords,
  rating: data.rating,
  maxprice : data.maxprice,
  price: data.price,
  discount: data.discount
}

        
       

productData.create(data).then((data)=>{
  console.log("sucess")
  res.send("Success")
}).catch((err)=>{
  console.log(err)
  res.send(err)

})
   
})










  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
<<<<<<< HEAD
=======
  
>>>>>>> 3d75cd96221594954e2cb35de0033a55da9e020a
