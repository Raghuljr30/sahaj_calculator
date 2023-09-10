import express from 'express';
const app= express();
import router from './routes/apiRoutes.js';
import dotenv from 'dotenv';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
import mongoose from 'mongoose';
// const router= require('./routes/apiRoutes');
dotenv.config();
app.use('/',router);

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Successfully connected to db");
})
.catch((err)=>{
    console.log(err.message);
})

// app.get('/',(req,res)=>{
//     res.send("hi server.js")
// })

// app.post('/add',(req,res)=>{
//     const firstnum=req.body.firstnum;
//     const secondnum=req.body.secondnum;
//     if (isNaN(firstnum) || isNaN(secondnum)) {
//         res.status(400).send('Invalid input. Please provide valid numbers.');
//     } else {
//         const ans = firstnum + secondnum;
//         res.send(ans.toString()); // Sending the result as a string
//     }

// })

// app.post('/sub',(req,res)=>{

//     const firstnum=req.body.firstnum;
//     const secondnum=req.body.secondnum;
//     if (isNaN(firstnum) || isNaN(secondnum)) {
//         res.status(400).send('Invalid input. Please provide valid numbers.');
//     } else {
//         const ans = firstnum - secondnum;
//         res.send(ans.toString()); // Sending the result as a string
//     }

// })


app.listen(3000,()=>console.log("Server running on port 3000"));