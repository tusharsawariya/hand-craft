import Category from "../model/category.model.js";

export const updateCategory = async(request,response,next)=>{
    try{
      let id = request.params.id;
      let category = await Category.findOne({where:{id}});
      //console.log(category);
      if(category){
        category.name = request.body.name;
        category.slug = request.body.slug;
        category.url = request.body.url;
        await category.save();
        return response.status(200).json({message: "updated successfully"});
      }
      return response.status(404).json({error: "Resource not found"});
    }
    catch(err){
      console.log(err);  
      return response.status(500).json({error: "Internal Server Error"});
    }
}

export const saveCategory = (request,response,next)=>{
    Category.create(request.body)
    .then(result=>{
        return response.status(201).json({message:"category saved",result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const deleteCategory = (request,response,next)=>{
    Category.destroy({where:{id: request.params.id}})
    .then(result=>{
        return response.status(200).json({message: "Category removed"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const getCategory = (request,response,next)=>{
    Category.findByPk(request.params.id)
    .then(result=>{
        return response.status(200).json({category: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const getCategoryList = (request,response,next)=>{
    Category.findAll()
    .then(result=>{
        return response.status(200).json({categories: result});
    }).catch(err=>{
       return response.status(500).json({error: "Internal Server Error"});
    });
}

export const saveInBulk = (request,response,next)=>{
    Category.bulkCreate(request.body)
      .then(result=>{
         return response.status(201).json({message: "Data saved",result});
      }).catch(err=>{
         return response.status(500).json({error: "Internal Server Error"});
      });
 }
 




