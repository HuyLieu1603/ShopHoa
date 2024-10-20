import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const typeflowerSchema = new mongoose.Schema({
    typeName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    images: [
      {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        },
      },
    ],
    status: {
      type: Boolean,
      default: false,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps:true,
    versionKey:false,
  }
);

typeflowerSchema.plugin(mongoosePaginate);

const typeFlower = mongoose.model('typeFlower',typeflowerSchema);
export default typeFlower;