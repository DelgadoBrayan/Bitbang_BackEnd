import mongoose from "mongoose";

const contactShema = mongoose.Schema(
    {
        name: {
        type:String,
        trim: true,
        require:true
    }, 
    number:{
        type:Number,
        trim: true,
        require:true
    },
    gmail:{
        type:String,
        trim:true,
        require:true
    }   
          
    }, {timestamps:true}  
)


const Contact = mongoose.model('contacts', contactShema)

export default Contact