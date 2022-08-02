const express=require('express');
const cors=require('cors');
const user=require('./Routes/UserRoutes')

const app=express();

app.use(cors())
app.use(express.json())
require('dotenv').config();

app.use('/api/',user);

module.exports=app;
