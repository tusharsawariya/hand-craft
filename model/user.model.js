import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";
const User = sequelize.define("user",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   username:{
    type: DataTypes.STRING,
    allowNull: false
   },
   password:{
    type: DataTypes.STRING,
    allowNull: false,
    set(v){
      let saltKey = bcrypt.genSaltSync(12);
      let encryptedPassword = bcrypt.hashSync(v,saltKey);
      this.setDataValue("password",encryptedPassword);
    }
   },
   email:{  
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   }
});
sequelize.sync()
.then(result=>{
    console.log("user table created....");
}).catch(err=>{
    console.log("Something wrong...");
})

User.checkPassword = (password,encryptedPassword)=>{
   let status = bcrypt.compareSync(password,encryptedPassword);
   console.log(password,encryptedPassword);
   console.log(status);
   return status;
}
export default User;
/*
  Sequelize model define the structure of table
  It is blueprint of database table

  Sequelize model turn into model class and it also
  provide interface to interact with database

  create()
  findAll()
  update()
  .........
*/