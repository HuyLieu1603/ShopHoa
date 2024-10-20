import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema({
    nameProduct:{
        type: String,
        require:true,
    },
    price:{
        type: Number,
        require: true,
    },
    desc:{
        type: String,
    },
    Images:[
        {
            url:{
                type:String,
            },
            public_id:{
                type:String,
            }
        },
    ],
    Flowers:[
        {
            id:{
                type: String,
                required: true,
            },
            quantity:{
                type:Number,
                required: true,
            }
        }
    ],
    status:{
        type: Boolean,
        default:false,
    }
});