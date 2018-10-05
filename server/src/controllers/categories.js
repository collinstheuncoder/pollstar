import Category from '../models/category';

export default {
  fetchAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({ categories });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  addNewCategory: async (req, res) => {
  	const { name, imgUrl } = req.body;

    try {
      const newCategory = await Category.create({ name, imgUrl });
      res.status(200).json({ newCategory });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  fetchSpecificCategory: async (req, res) => {
    const { categoryName } = req.params;

    try {
      const category = await Category.findOne({ name: categoryName }).populate(
        'polls'
      );
      res.status(200).json({ category });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};
