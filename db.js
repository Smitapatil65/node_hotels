const mongoose=require('mongoose');
//const mongoURL='mongodb://localhost:27017/hotels';
// import dotenv from 'dotenv';
// dotenv.config();
require('dotenv').config();

//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;


mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;


db.on('connected',()=>{
    console.log('connected to mongodb server');

});

db.on('error',(err)=>{
    console.error('mongodb connection error:',err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});


module.exports=db;



