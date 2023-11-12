const mongoose = require('mongoose')
const { Schema } = mongoose
const jwt=require('jsonwebtoken')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    tokens: [
        {
            token: {
                type:String,
                required:true
            }
        }
    ]
})


module.exports = mongoose.model('auth', userSchema)