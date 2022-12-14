const connectToMongo = require('./db'); 
const express = require('express');
var cors =require('cors');
connectToMongo();
require("dotenv").config({path:'./config.env'});
const app = express() 
const port = 5000;

app.use(cors());
app.use(express.json())
app.use('/api/auth',require('./routes/auth')); 
app.use('/api/tasks',require('./routes/tasks')); 

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})