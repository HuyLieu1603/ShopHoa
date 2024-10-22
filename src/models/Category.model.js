import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const categorySchema = new mongoose.Schema(
  {
    nameCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
categorySchema.plugin("Category");
const Category = mongoose.model("Category", categorySchema);

export default Category;
