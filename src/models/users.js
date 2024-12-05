import mongoose from "mongoose";

const userShema = mongoose.Schema(
    {
        nameUser: {
        type:String,
        trim: true,
        require:true
    }, 
    password:{
        type:Number,
        trim: true,
        require:true
    },
    gmailUser:{
        type:String,
        trim:true,
        require:true
    }   
          
    }, {timestamps:true}  
)


const User = mongoose.model('users', userShema)

export default User