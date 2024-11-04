import Category from '../models/Category.model.js';

export const categoryService = {
  //add category
  addCategory: async (body) => {
    return await Category.create(body);
  },

  //delete category by Id
  deleteCategory: async (cateId) => {
    return await Category.findByIdAndDelete(cateId);
  },
  //get category by Id
  fetchCateById: async (cateId) => {
    return await Category.findById(cateId);
  },
  //get list category
  fetchListCategory: async () => {
    return await Category.find();
  },
  //update category by Id
  updateCateById: async (cateId, data) => {
    return await Category.findByIdAndUpdate(
      cateId,
      { $set: data },
      { new: true },
    );
  },
};
