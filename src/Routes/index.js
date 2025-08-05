import { response, Router } from "express";
import {categoryRoute} from "./categoryRoute.js" 

const router  = Router();

router.get('/', (req, res) => {
    res.cookie('hello',"ahmad",{
        maxAge:60000 *60*24,
    })
    res.send(process.env.APP_PORT);
});

router.use('/api/v1/categories', categoryRoute);
router.use('/api/v1/test',(req,res)=>{
    console.log(req.cookies);
    return res.json(req.cookies).status(200);
})



export default router; 