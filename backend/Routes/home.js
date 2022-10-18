const express = require('express');
const cartData = require('../models/cart');
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

});

router.get("/indproduct/:id" , (req,res)=>{
    data = req.params.id;
    console.log(data)

    productData.findByPk(data).then((data)=>{
        console.log(data)
        res.send(data)
    })
    }
)
 
router.post("/addcart/:id" , (req,res)=>{
    data= req.body.data
    console.log(data)
    id = req.params.id
    console.log(id)



    item={
        imageurl:data.imageurl ,
        Name:data.Name ,
        Category:data.Category,
        maxprice : data.maxprice,
        price: data.price,
        discount: data.discount,
        username:id,
        quantity:"1"
      }

      cartData.findOne({where:{Name:data.Name}}).then((data)=>{
        console.log(data)
      if(data===null){
      cartData.create(item).then((data)=>{
        console.log("sucess")
        res.send("Success")
      }).catch((err)=>{
        console.log(err)
        res.send(err)
      })}else{
        console.log("Product Already exist")
        res.send("Product Already exist")
      }
    }).catch((err)=>{
        console.log(err)
        res.send(err) 
    })



})


router.get("/cartlist/:id" , (req,res)=>{
    id = req.params.id
    console.log(id)

    cartData.findAll({where:
        {"username":id},
        order: [
        ['createdAt', 'DESC'], 
       ],
    }).then((data)=>{
       console.log(data)
        res.send(data)
    })
})


router.delete("/delete/:id" , (req,res)=>{
    id = req.params.id
    console.log(id)
    cartData.destroy({
        where: {
           id:id 
        }
    }).then((data)=>{
        res.send("Sucess")
     }).catch((err)=>{
        res.send(err)
     })
});


router.put("/update/:id" , (req,res)=>{
    id = req.params.id
    data =req.body
    console.log( data.numqnt)
    
     numqnt = data.numqnt


    cartData.findOne({where:{username:data.data, id:id}}).then((data)=>{
        cartData.update( { quantity: numqnt },{ where: {id: id}}).then((data)=>{
            res.send("Sucessfully Updated")
        })
    })
})


router.delete("/clearcart/:id" , (req,res)=>{
    id = req.params.id
    // console.log(id)
    cartData.destroy({
        where: {
           username:id 
        }
    }).then((data)=>{
        res.send("Sucess")
     }).catch((err)=>{
        res.send(err)
     })
});





module.exports=router;

