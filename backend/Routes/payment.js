const stripe = require('stripe')('sk_test_51LrbcMSAVeTWtD9I31Al7PZAn4AkgjebvxnFDSiCy1RGDavmJbm00ZDJFCuiaDx1JbCuIbSFYUcHwoLowbMD3lki00QMMWzz5T');
const express = require('express');
const cartData = require('../models/cart');
const router = express.Router();
const cors = require("cors");
const paymentData = require('../models/paymentdata');

router.use(cors());



const YOUR_DOMAIN = 'http://localhost:3000'; 

router.post('/create-checkout-session',async (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

try{
  // console.log(req.body.data[0].username)

  const session = await stripe.checkout.sessions.create({
    
    line_items: req.body.data.map((itm)=>{
      return{
         price_data: {
           currency: 'inr',
           unit_amount: itm.price*100,
           product_data: {
             name: itm.Name,
             description:itm.Category,
          },
         },
         quantity: itm.quantity,

      }}
     ),
    mode: 'payment',
    metadata: {
      username:req.body.data[0].username
    },
    success_url: `${YOUR_DOMAIN}/payment/3/sucess`,
    cancel_url: `${YOUR_DOMAIN}/error`,
  });
  // console.log(session)
  item={
    pid:session.id,
    username:req.body.data[0].username
  }
  paymentData.create(item).then((data)=>{
    console.log("sucess")
  })
  res.json({url: session.url})
 
}
catch(err){
  console.log(err)
}
})



// Stripe Webhook





const endpointSecret = "whsec_fa515386c60250c87cbfb2647898f617fea416d27505308a9648f0c6a7ed3378";

router.post('/webhook', express.raw({type: 'application/json'}), async(request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    // console.log(event.data.object.id)

  } catch (err) {
    // console.log(err)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log("get event")
    // console.log(event)


if(event.type==="checkout.session.completed"){
  console.log(event.data)
}


  // Handle the event
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntent = event.data.object.total_details;
  //     // console.log(paymentIntent)
  //     console.log("pAYMENT sUCE3SSDED")
  //     console.log('totaldetails' , event.data.object.metadata)

  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log("default");
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});



module.exports=router;
