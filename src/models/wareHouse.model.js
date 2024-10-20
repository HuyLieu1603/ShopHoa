import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const typeflowerSchema= new mongoose.Schema({
    typeName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
    },
    images:[
        {
            url:{
                type:String,
            },
            public_id:{
                type:String,
            },
        }
    ],
    status:{
        type:Boolean,
        default:false,
    },
    is_deleted:{
        type:Boolean,
        default:false,
    },
})

const warehouseSchema = new mongoose.Schema({
    nameWarehouse:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    id_branch:{
        type:mongoose.Schema.Branch.ObjectId,
    },
    Flowers:[typeflowerSchema],
    is_deleted:{
        type:Boolean,
        default:false,
    },
})