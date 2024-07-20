import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
export const signIn = async(request,response,next)=>{
    let {email,password} = request.body;
    try{
       let user = await User.findOne({where:{email},raw: true});
       console.log(user);
       if(user)
          return User.checkPassword(password,user.password) ? response.status(200).json({message: 'sign in success',user}):response.status(401).json({error: "Bad request | Invalid password"});
       return response.status(401).json({error: "Bad request | Invalid email id"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const signUp = async(request,response,next)=>{
   try{
      const errors =  validationResult(request);
      if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});

      let {username,email,password} = request.body;  
      let user = await User.create({username,email,password});
      return response.status(201).json({message: 'user saved',user}); 
   }
   catch(err){
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"});
   }
}