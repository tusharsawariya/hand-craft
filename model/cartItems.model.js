import sequelize from "../db/dbConfig.js";

const CartItems = sequelize.define("cartItem",{});

sequelize.sync(()=>{
    console.log("CartItems table synced");
});
export default CartItems;