import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const branchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
branchSchema.plugin(mongoosePaginate);

const Branch = mongoose.model('Branch', branchSchema, 'Branch');

export default Branch;
