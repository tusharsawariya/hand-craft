import sequelize from "../db/dbConfig.js";
import Cart from "../model/cart.model.js";
import CartItems from "../model/cartItems.model.js";

export const addToCart = async (request,response,next)=>{
   let transaction = await sequelize.transaction();
   try{
     let {userId,productId} = request.body;
     let cart = await Cart.findOne({where:{userId},raw: true});
     if(cart){
        // User second time performing add to cart
        let cartItems = await CartItems.findOne({where:{productId,cartId: cart.id},raw: true});
        if(cartItems)
          return response.status(200).json({message: "Product already added in cart"});
        cartItems = await CartItems.create({cartId: cart.id,productId});  
        return response.status(201).json({message: "Item successfully added in cart"});
     }
     else{
        // User firt performing add to cart operation
       cart = await Cart.create({userId},{transaction});
       await CartItems.create({cartId:cart.id,productId},{transaction});
       await transaction.commit();
       return response.status(201).json({message: "Item added in cart"}); 
    }

   }
   catch(err){
    await transaction.rollback();
    return response.status(500).json({error: "Internal Server Error"});
   }
}