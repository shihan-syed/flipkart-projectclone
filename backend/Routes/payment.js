const stripe = require('stripe')('sk_test_51LrbcMSAVeTWtD9I31Al7PZAn4AkgjebvxnFDSiCy1RGDavmJbm00ZDJFCuiaDx1JbCuIbSFYUcHwoLowbMD3lki00QMMWzz5T');
const express = require('express');
const cartData = require('../models/cart');
const router = express.Router();
const cors = require("cors");

router.use(
  cors({
    origin: ["http://localhost:3000", "https://checkout.stripe.com"],
  })
);

const YOUR_DOMAIN = 'http://localhost:3000'; 

router.post('/create-checkout-session',async (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   
  const session = await stripe.checkout.sessions.create({
    line_items: [
                {
                  price_data: {
                    currency: 'inr',
                    unit_amount: 2000*100,
                    product_data: {
                      name: 'T-shirt',
                      description: 'Comfortable cotton t-shirt',
                    },
                  },
                  quantity: 1,
             } ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/sucess`,
    cancel_url: `${YOUR_DOMAIN}/error`,
  });

  res.redirect(303, session.url )
});


// router.post("/create-checkout-session", async (req, res) => {
//     //  console.log(req.body.data)

//     // try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         mode: "payment",

//         line_items: [
//           {
//             price_data: {
//               currency: 'inr',
//               unit_amount: 2000,
//               product_data: {
//                 name: 'T-shirt',
//                 description: 'Comfortable cotton t-shirt',
//               },
//             },
//             quantity: 1,
//        } ],
    

//         success_url: `http://localhost:3000/success.html`,
//         cancel_url: `http://localhost:3000/cancel.html`,
//       })

//        console.log("sucess")
//       res.json({ url: session.url })
//     // } catch (e) {
//     //   res.status(500).json({ error: e.message })
//     // }
//   })

module.exports=router;
