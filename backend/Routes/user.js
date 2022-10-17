const express =require('express');
const signup =require('../models/signup')
const bcrypt=require('bcrypt')
const signupUser =require('../controllers/signup')
const userRouter=express.Router();

userRouter.post('/signup', signupUser)
// userRouter.post('/signin',  signIn)

userRouter.post('/signin', (req,res)=>{
    console.log(req.body);
    signup.findOne({where:{
        email : req.body.email }})
 .then((data)=>{

   //console.log(data.id); 
   if(data===null){
       res.send({ status: false, data: 'Invalid Username and Password'})
   }else { 
     console.log(data.password)
       bcrypt.compare(req.body.password , data.password , function(err, result) {
         if (result) {
           console.log(result)
        
           var email = data.email;
           var username = data.username ;
           res.send({ status: true, data: 'Success', email , username})
           
        }
        else{
             res.send({ status: false, data: 'Incorrect Username or Password'})
         }
     });
      
   }


 }).catch((err)=>{console.log(err)})
})


module.exports=userRouter ;

