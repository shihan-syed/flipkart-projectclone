const express = require("express");
const app = express();
const cors=require("cors");
const db = require("./models");

const homeData = require('./models/home')

const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const homeRoutes =require("./Routes/home")



app.use("/home" , homeRoutes);


app.post("/adddata" , (req,res)=>{
  data=req.body
  console.log(data)

  data={
  imageurl:data.imageurl ,
  Name:data.name11 ,
  Description: data.description,
  Brand: data.brand,
  Category:data.category,
}

homeData.create(data).then((data)=>{
  res.send("Success")
}).catch((err)=>{
  console.log(err)
  res.send(err)
})
   
})









db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});