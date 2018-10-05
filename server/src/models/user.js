import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

// Model Definition
const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  createdPolls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
  votedInPolls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
});

// Password Encryption
UserSchema.pre('save', async function(next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Generate a password hash (salt + hash)
    const hash = await bcrypt.hash(this.password, salt);

    // Overwrite plain text password
    this.password = hash;
    next();
  } catch (error) {
    throw new Error(error);
  }
});

// Password Comparison
UserSchema.methods.comparePasswords = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model('User', UserSchema);

// Model Export
export default User;
