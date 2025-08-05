import express from "express";
import {getCategory,createCategory} from "./../Controllers/categoryController.js";
import { body } from "express-validator";


const route = express.Router();


route.get("/", getCategory);
route.post("/",
    body("name").
        trim().
        notEmpty().withMessage("the Category Name should not be Empty").
        isString().withMessage("the Name Field Should BE String").
        isLength({min:4,max:6}).withMessage("the Name length should be at least 4 and max 6 "),
        createCategory
    );

route.get("/:id",(req,res) =>{
    console.log(req);
    return res.send(req.headers)
})


export {route as categoryRoute};

