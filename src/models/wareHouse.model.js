import mongoose from "mongoose";
import mongoosePaginate, { paginate } from "mongoose-paginate-v2";

const warehouseSchema = new mongoose.Schema(
  {
    nameWarehouse: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    id_branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
    Flowers: [
      {
        id_typeFlower: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "typeFlower",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

warehouseSchema.plugin(mongoosePaginate);

const Warehouse = mongoose.model("Warehouse", warehouseSchema);

export default Warehouse;
