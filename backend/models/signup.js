const {Sequelize , DataTypes}  = require('sequelize');
const sequelize = new Sequelize('flipkart', 'postgres', 'shihan@123', {
  host: 'localhost',
  dialect: 'postgres'
});

const db={}
 db.Sequelize=Sequelize;
 db.sequelize=sequelize;

 const signup = sequelize.define("login", {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false
  }

})

db.sequelize.sync().then(()=>{
  console.log("sync")}
)
module.exports = signup;


