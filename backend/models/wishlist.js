const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const wishList = db.sequel.define('wishData', {
    id: {
        type: DataTypes.INTEGER,  
         primaryKey: true,
         autoIncrement: true,
        
    }, 
    pid: {
        type: DataTypes.INTEGER,  
        allowNull : false,
         
        
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

username: {
    type: DataTypes.STRING,
    allowNull: false

  }

  });
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = wishList;