import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const statisticalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Orders: [
      {
        id_Order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "order",
          required: true,
        },
      },
    ],
    note: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

statisticalSchema.plugin(mongoosePaginate);

const Statistical = mongoose.model("Statistical", statisticalSchema);
export default Statistical;
