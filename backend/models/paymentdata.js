const {Sequelize , DataTypes}  = require('sequelize');
<<<<<<< HEAD
const sequel = new Sequelize('flipkart', 'postgres', 'shihan@123', {
  host: 'localhost',
  dialect: 'postgres'
});
=======
const sequel = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
}); 
>>>>>>> b70cde2b9147a41522a86c536519672578dec9a4

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const paymentData = db.sequel.define('paymentData', {

    id: {
        type: DataTypes.INTEGER,  
         primaryKey: true,
         autoIncrement: true,
        
    }, 

    pid: {
         type: DataTypes.STRING, 
         allowNull: false 
    },
    

    username: {
         type: DataTypes.STRING,
         allowNull: false

    }, 

   

  },
  {    
     timestamps: false,
  }
);
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = paymentData; 