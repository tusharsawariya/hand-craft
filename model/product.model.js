import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Product = sequelize.define("product",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  categoryName: DataTypes.STRING,
  price: DataTypes.FLOAT,
  discountPercentage: DataTypes.FLOAT,
  rating: DataTypes.FLOAT,
  stocks: DataTypes.INTEGER,
  brand: DataTypes.STRING,
  sku: DataTypes.STRING,
  weight: DataTypes.FLOAT,
  warrantyInformation: DataTypes.STRING,
  shippingInformation: DataTypes.STRING,
  availabilityStatus: DataTypes.STRING,
  returnPolicy: DataTypes.STRING,
  minimumOrderQuantity: DataTypes.INTEGER,
  thumbnail: DataTypes.STRING
});

sequelize.sync(()=>{
  console.log("Product table sync..");
});
export default Product;