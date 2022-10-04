const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('ccppjckr', 'ccppjckr', 'uFh6wxIfDkgvDLOfVEqEJCx0aWatB-vf', {
    host: 'arjuna.db.elephantsql.com',
    connectionLimit: 10,
    dialect: 'postgres'
}); 

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const homeData = db.sequel.define('homeData', {
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
      type: DataTypes.STRING,
      allowNull: false

    },
    Brand: {
        type: DataTypes.STRING,
        allowNull: false
  
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false

    }
  });
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = homeData;
