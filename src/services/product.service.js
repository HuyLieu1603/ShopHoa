import Product from '../models/product.model.js';
import typeFlower from '../models/typeFlower.model.js';

export const productService = {
  //add product
  addProduct: async (body) => {
    return await Product.create(body);
  },
  //get product by ID
  getProductById: async (id) => {
    return await Product.findById(id);
  },
  //get product by id cate
  getProductByCateId: async (cateId) => {
    return await Product.findOne({ id_category: cateId });
  },
  //get all product
  getProduct: async (option, query) => {
    return await Product.paginate(option, query);
  },
  fetchListProduct: async () => {
    return await Product.find();
  },
  //update status
  updateStatus: async (id, status) => {
    return await Product.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true },
    );
  },
  //update is deleted
  updateIsDeleted: async (id, isDel) => {
    return await Product.findByIdAndUpdate(
      { _id: id },
      { is_deleted: isDel },
      { new: true },
    );
  },
  //update product
  updateProduct: async (id, body) => {
    return await Product.findByIdAndUpdate({ _id: id }, body, { new: true });
  },
  //delete product
  deleteProduct: async (id) => {
    return await Product.findByIdAndDelete(id);
  },
  //update quantity product when order
  updateQuantity: async (id, FlowersId, quantity) => {
    return await Product.findOneAndUpdate(
      { _id: id, 'Flowers.id': FlowersId },
      { $set: { 'Flowers.$.quantity': quantity } },
      { new: true },
    );
  },
  //Update id category after delete category
  updateCateId: async (idCate) => {
    return await Product.updateMany(
      { id_category: idCate },
      { $set: { id_category: '' } },
    );
  },
};
