import express from 'express';

import { categoriesController } from '../controllers';

const categoriesRouter = express.Router();

// Request Polls Categories List
categoriesRouter
	.route('/')
	.get(categoriesController.fetchAllCategories);

// Request Individual Poll Category
categoriesRouter
  .route('/:categoryName')
  .get(categoriesController.fetchSpecificCategory);

// Create New Poll Category
categoriesRouter
	.route('/new')
	.post(categoriesController.addNewCategory);

export default categoriesRouter;
