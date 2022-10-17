const signup =require('../models/signup')
const bcrypt=require('bcrypt')





//signup
const signUp = async (req,res)=>{
try {
    const registeredUser = await signup.findOne({where:{
        email : req.body.email}})
    if(registeredUser)
    {return res.status(400).json({message:'user already exist'})}

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const result = await signup.create({
        email : req.body.email ,
        password : hashedPassword,
        username : req.body.username
    })

    res.status(201).json({user: result })

}
catch (error) {
    console.log(error);
 res.status(500).json({message : 'something went wrong'})
}
}


module.exports = signUp;