import { boolean } from 'joi';
import mongoose, { version } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const cartSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    Products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        is_selected: {
          type: Boolean,
          default: false,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    Timestamp: true,
    versionKey: false,
  },
);
cartSchema.plugin(mongoosePaginate);
const cart = mongoose.model('Cart', cartSchema, 'Cart');
export default cart;
