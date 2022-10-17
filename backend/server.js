const express = require("express");
const app = express();
const cors=require("cors");





const homeData = require('./models/home')

const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const homeRoutes =require("./Routes/home");
const productData = require("./models/product");
const paymentRoutes = require("./Routes/payment");
const  signIn = require('./Routes/user')
const  signUp = require('./controllers/signup')





app.use("/home" , homeRoutes);
app.use("/payment" , paymentRoutes);

app.use('/a' ,signUp)
app.use('/b',signIn)

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
  
