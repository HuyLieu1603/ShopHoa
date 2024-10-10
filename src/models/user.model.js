import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            require:true,
        },
        password{
            type:String,
            require:true,
        }
    }
);

userSchema.plugin(mongoosePaginate);

const User = mongoose.model