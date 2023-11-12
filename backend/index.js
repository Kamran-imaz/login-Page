const express=require('express')
const app=express()
const port=80;
const cors=require('cors')
const connectToMongo=require('./connect')

//connected to mongodb 
connectToMongo();
app.use(cors())
app.use(express.json())
//routes code
app.use('/api/routes/register',require('./routes/registerAuth'))
app.use('/api/routes/login',require('./routes/loginAuth'))
app.use('/api/routes/secret',require('./routes/Secret'))
//listening at port 80
app.listen(port,()=>{
    console.log(`The app is listening at port ${port}`)
})