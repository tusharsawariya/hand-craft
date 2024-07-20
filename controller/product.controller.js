import Product from "../model/product.model.js"
import Reviews from "../model/reviews.model.js";

export const saveInBulk = (request,response,next)=>{
    Product.bulkCreate(request.body.products,{
        include:[Reviews]
    })
    .then(result=>{
        return response.status(201).json({message: "Product saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    });
}