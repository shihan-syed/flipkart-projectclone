const JWT =require('jsonwebtoken');


const publicKey=`-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHpvMJWoqW/tfPCoRYvuk1HUQdGY
kmqyBdgwuoLcvg+K9nCdmELiELCX4rTW+bu2Hrtq5NB3ohuslYrKYknBlk7r5F0e
y+2h7NPC9BBCULBi2WDuFLtk7i3LkG69b3b+93ilfOxuplDN7GeWxTTSVULCmdRh
NP4bnF2Lp8jge0AHAgMBAAE=
-----END PUBLIC KEY-----`;

const admin= (req,res,next)=>{

    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(401).send('Authorization Required')
    console.log(authHeader);
    const token= authHeader.split(' ')[1] ;


    JWT.verify(token , publicKey ,(err,next)=>{
        if(err) {return res.status(403).send('wrong token') , next() }
    })

        next() }
  module.exports = admin;