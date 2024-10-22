import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    nameProduct: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    id_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    desc: {
      type: String,
    },
    Images: [
      {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        },
      },
    ],
    Flowers: [
      {
        id: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    is_deleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model("Product", productSchema);
export default Product;
