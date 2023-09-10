// const express= require('express')
import { generateToken } from "../utils.js  ";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import Expression from "../models/historyModel.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router=express.Router()

console.log(__dirname)

const htmlFilePath = `${__dirname}/index.html`
router.use('/static', express.static(__dirname));

function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

router.get('/',(req,res)=>{
    
    // res.send(__dirname +"/index.html");
    res.sendFile(htmlFilePath);
})


router.post('/signup',(req,res)=>{
    console.log(req.body);

    res.send({
        name: req.body.name,
        email:req.body.email,
        token:generateToken(req.body)
    })
    
});

router.get('/history',async(req,res)=>{
    const expression=await Expression.find();
    res.send(expression);
})

router.post('/calculate',async(req,res)=>{

    try{
        console.log(req.body);
        const expression=req.body.expression;
        const result=eval(expression);

        const newExpression=new Expression({
            expression:expression+"="+result
        })

        const savedExpression=await newExpression.save();
        console.log(savedExpression);
        res.status(200).send({result});

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    // console.log(req.body);

    // const expression=req.body.expression;
    // console.log(req.body)
    // const result=eval(expression);
    // console.log(expression+"="+result);
    
})



export default router;