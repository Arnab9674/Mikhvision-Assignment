const express=require('express');
const cors=require('cors');
const product=require('./Routes/UserRoutes')

const app=express();

app.use(cors())
app.use(express.json())
require('dotenv').config();

app.use('/api/',product);

module.exports=app;