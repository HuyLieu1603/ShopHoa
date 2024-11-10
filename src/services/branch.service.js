import branch from '../models/Branch.model.js';

export const branchService = {
  //CREATE BRANCH
  addBranch: async (body) => {
    return await branch.create(body);
  },
  //GET BRANCH
  getBranch: async (branchId) => {
    return await branch.findById(branchId);
  },
  //FETCH LIST BRANCH
  fetchListBranch: async () => {
    return await branch.find();
  },
  //delete branch by id
  deleteBranchById: async (branchId) => {
    return await branch.findByIdAndDelete(branchId);
  },
  //update branch by id
  updateBranchById: async (branchId, data) => {
    return await branch.findByIdAndUpdate(
      branchId,
      { $set: data },
      { new: true },
    );
  },
  //Add warehouse to branch

  //Add staff to branch
};
