import mongoose, { mongo } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    note: {
      type: String,
      default: "",
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["cod", "payment"],
      default: "cod",
    }, // cod, payment
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    inforOrderShipping: [infoSchema],
    status: {
      type: String,
      required: true,
      enum: ["pending", "confirmed", "delivery", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model("Order", orderSchema);

export default Order;
