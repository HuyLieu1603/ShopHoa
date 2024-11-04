import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const categorySchema = new mongoose.Schema(
  {
    nameCategory: {
      type: String,
      required: true,
    },
    is_Delete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
categorySchema.plugin(mongoosePaginate);

const Category = mongoose.model('Category', categorySchema, 'Category');

export default Category;
