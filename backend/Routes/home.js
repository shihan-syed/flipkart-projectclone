const express = require('express');
const homeData = require('../models/home');
const router = express.Router();



router.get("/getdetails1" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Best of Electronics"
          }}).then((data)=>{
        res.send(data)
    })

}) 

// router.get("/getdetails2" ,(req,res)=>{
//     homeData.findAll({
//         where: {
//             Category: "Top Deals On TVs & Appliances"
//           }}).then((data)=>{
//         res.send(data)
//     })

// })

// router.get("/getdetails3" ,(req,res)=>{
//     homeData.findAll({
//         where: {
//             Category: "Home & Kitchen Essentials"
//           }}).then((data)=>{
//         res.send(data)
//     }) 

// })

router.get("/topoffers" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Beauty, Food, Toys & more"
          }}).then((data)=>{
        res.send(data)
    }) 

});






module.exports=router;

