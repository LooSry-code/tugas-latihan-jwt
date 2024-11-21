import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  email: string;
  fullName: string;
  password: string;
  username: string;
  roles: string[];
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  roles: { type: [String], required: true, default: ['user'] },
}, { timestamps: true });

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
