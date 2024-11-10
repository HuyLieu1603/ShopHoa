import mongoose, { version } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const cartSchema = mongoose.Schema(
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
