import Cart from "./cart.model.js";
import CartItems from "./cartItems.model.js";
import Category from "./category.model.js";
import Product from "./product.model.js";
import Reviews from "./reviews.model.js";
import User from "./user.model.js";

Product.hasMany(Reviews,{foreignKey: "productId"});
Reviews.belongsTo(Product);

Category.hasMany(Product,{foreignKey: "categoryName"}); // categoryId
Product.belongsTo(Category,{
    foreignKey: "categoryName", targetKey:"name"
}); // id

User.hasOne(Cart); // foreignKey(userId)
Cart.belongsTo(User);// references User(id)

Cart.belongsToMany(Product,{through: CartItems});
Product.belongsToMany(Cart,{through: CartItems});

export {Product,Reviews,Category,CartItems,Cart};
