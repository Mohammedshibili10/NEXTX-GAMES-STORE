import mongoose from 'mongoose'

const userSchema= mongoose.Schema({
      email: {type:String,required:true},
    country: {type:String,required:true},
    firstName:{type:String,required:true},
    name:{type:String,required:true},
    displayName:{type:String,required:true},
    password:{type:Number,required:true},
    agreed: false,
})

export const user= mongoose.model('users',userSchema)