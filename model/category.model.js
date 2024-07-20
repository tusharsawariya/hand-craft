import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Category = sequelize.define("category",{
  slug:{
    type: DataTypes.STRING,
    allowNull: false
   },
   url:{
    type: DataTypes.STRING
   },
   name:{
    type:DataTypes.STRING,
    allowNull: false,
    trim: true,
    primaryKey: true
   }
});
sequelize.sync(()=>{
   console.log("Category table synced...");
})
export default Category; 