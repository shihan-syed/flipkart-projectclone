const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('flipkart', 'postgres', 'shihan@123', {
    host: 'localhost',
    dialect: 'postgres'
}); 

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const cartData = db.sequel.define('cartData', {
    id: {
        type: DataTypes.INTEGER,  
         primaryKey: true,
         autoIncrement: true,
        
    }, 
    imageurl: {
      type: DataTypes.STRING, 
      allowNull: false 
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    Category: {
        type: DataTypes.STRING,
        allowNull: false
 
    },
   
 
maxprice: {
  type: DataTypes.INTEGER,
  allowNull: false

},
price: {
  type: DataTypes.INTEGER,
  allowNull: false

},
discount: {
  type: DataTypes.INTEGER,
  allowNull: false

},
quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  
  },
username: {
    type: DataTypes.STRING,
    allowNull: false

  }

  });
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = cartData;
