const express =require('express');
const signup =require('../models/signup')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')
const signupUser =require('../controllers/signup')
const userRouter=express.Router();


const privateKey=`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgHpvMJWoqW/tfPCoRYvuk1HUQdGYkmqyBdgwuoLcvg+K9nCdmELi
ELCX4rTW+bu2Hrtq5NB3ohuslYrKYknBlk7r5F0ey+2h7NPC9BBCULBi2WDuFLtk
7i3LkG69b3b+93ilfOxuplDN7GeWxTTSVULCmdRhNP4bnF2Lp8jge0AHAgMBAAEC
gYAb27DyXK4xCZikKaWpcV+T/vf6+PxXyqoJxwypOhEE+FmaxkEe9tFVXTn4a/Hn
BEl525i01oPMSDi+m85Begr5FcUMI/uBrjGIcXo1TowK7AkR+mlH+Nk+lg6a4PZF
cynYruXz+UT+e8ubGffH3Eyy4kN3j3IENdmeXoagzGOiAQJBAPEGHvBP7awo3Xp+
5jUrfL7RG5Ga6pqHBlGjdKniN7HnIMDbWx/ZWn7yoKGIUvz2BTF4tRoWay4fWrev
WraOVhUCQQCCCrU8ougr0mfytmvS4/DBWrVewTDkM6lpN/Kq4TBOcwYp35h2eZoA
yzz5TvrCV0nx+1KXtdvbZZdJ/wjBeMCrAkEAuU2tZ7Dr19qrPMxnjSVcCRCXk4B5
MkjxUL7MqPflPf+mrN941amz67n6SXaX5yf2oixdgCsQSCuPAX3tzkDsaQJAX6st
Bjz6/TI/0umtjWqv9i+beug55ciz+3pzho9AkJZClI+whIiVabwbUXZvOIYrGmDA
tGfQJSoqEQAVGvCRHQJAQUhwk3/u3xYsoPiyQlNcBmhcb//Xumqr0FRe12zTlBB5
+e0Ko1PaSssX9k4WySkrNk8F+hqJEnlZFJXxrWXhvQ==
-----END RSA PRIVATE KEY-----`;

userRouter.post('/signup', signupUser)


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
            const jwtToken=JWT.sign({email : email}, privateKey ,{algorithm : 'RS256'})
           res.send({ status: true, data: 'Success', email , username ,jwtToken})
            
          
        }
        else{
             res.send({ status: false, data: 'Incorrect Username or Password'})
         }
     });
      
   }


 }).catch((err)=>{console.log(err)})
})


module.exports=userRouter ;

