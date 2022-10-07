const express = require('express');
const homeData = require('../models/home');
const productData = require('../models/product');
const router = express.Router();



router.get("/getdetails1" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Best of Electronics"
          }}).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdetails2" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Top Deals On TVs & Appliances"
          }}).then((data)=>{
        res.send(data)
    })

})

router.get("/getdetails3" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Home & Kitchen Essentials"
          }}).then((data)=>{
        res.send(data)
    }) 

})

router.get("/topoffers" ,(req,res)=>{
    homeData.findAll({
        where: {
            Category: "Beauty, Food, Toys & more"
          }}).then((data)=>{
        res.send(data)
    }) 

});

router.get("/getdata0/:id" ,(req,res)=>{
    datas = req.params.id
    console.log(datas)
    productData.findAll({
        where: {
            Category: datas
          }}).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdata1/:id" ,(req,res)=>{
    datas = req.params.id
    console.log("done")
    productData.findAll({
        where: {
            Category: datas
          },
          order: [
            ['price', 'DESC'],
        ],
        }).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdata2/:id" ,(req,res)=>{
    datas = req.params.id
    console.log("done")
    productData.findAll({
        where: {
            Category: datas
          },
          order: [
            ['price', 'ASC'], 
        ],
        }).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdata3/:id" ,(req,res)=>{
    datas = req.params.id
    console.log("done")
    productData.findAll({
        where: {
            Category: datas
          },
          order: [
            ['discount', 'DESC'], 
        ],
        }).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdata4/:id" ,(req,res)=>{
    datas = req.params.id
    console.log("done")
    productData.findAll({
        where: {
            Category: datas
          },
          order: [
            ['rating', 'DESC'], 
        ],
        }).then((data)=>{
        res.send(data)
    })

}) 

router.get("/getdata5/:id" ,(req,res)=>{
    datas = req.params.id
    console.log("done")
    productData.findAll({
        where: {
            Category: datas
          },
          order: [
            ['createdAt', 'DESC'], 
        ],
        }).then((data)=>{
        res.send(data)
    })

}) 




module.exports=router;

