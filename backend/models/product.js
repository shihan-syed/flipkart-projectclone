const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('ccppjckr', 'ccppjckr', 'uFh6wxIfDkgvDLOfVEqEJCx0aWatB-vf', {
    host: 'arjuna.db.elephantsql.com',
    connectionLimit: 10,
    dialect: 'postgres'
}); 

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const productData = db.sequel.define('productData', {
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
    Description: {
      type: DataTypes.STRING(1234),
      allowNull: false

    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false
 
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: false

  }, 
  rating: {
    type: DataTypes.DECIMAL(10, 1),
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

}

  });
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = productData;
