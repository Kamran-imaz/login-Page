const mongoose=require('mongoose')
// import {schema} from 'Schema'
const connectToMongo=(()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/mongod?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2')
    .then(()=>{console.log("MongoDB connected Successfully!!!")})
    .catch((err)=>{console.log(err)})
})

module.exports=connectToMongo