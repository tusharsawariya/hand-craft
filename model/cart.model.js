import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Cart = sequelize.define("cart",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

sequelize.sync(()=>{
    console.log("Cart table synced..");
});

export default Cart;