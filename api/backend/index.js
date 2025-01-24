const express= require('express');
const cors= require('cors');
const { dbconnection } = require('./config/db');


const router = require('./router/product.router');
require('dotenv').config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(
    cors({
        origin: 'http://localhost:5173  ', 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.get('/',(req,res)=>{
    res.send("hello world!");
})
app.use("/", router)


let PORT=process.env.PORT


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnection()
})