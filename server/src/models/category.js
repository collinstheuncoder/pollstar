import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String },
  imgUrl: { type: String },
  polls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
