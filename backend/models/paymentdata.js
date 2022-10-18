const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
}); 

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