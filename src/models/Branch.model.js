import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const branchSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:false,
    },
    
})