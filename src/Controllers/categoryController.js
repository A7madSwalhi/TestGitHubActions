import {PrismaClient} from "@prisma/client"
import {Result, validationResult} from "express-validator"

const prisma = new PrismaClient()

export const createCategory = async (req, res) => {
    try{
        const Result = validationResult(req);
        console.log(Result)

        if (!Result.isEmpty()) {
            res.status(422).json({errors: Result.array()})
        }
        const category = await prisma.category.create({
            data: {
                name: req.body.name,
            }
        })
        res.status(201).json({data: category})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getCategory = (req,res) => {
    res.status(200).json({message: "Get Category"})
}