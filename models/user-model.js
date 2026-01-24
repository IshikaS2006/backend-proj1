import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  cart: { type: Array, default: [] },
  profilePic: { type: String, default: "" },
  orders: { type: Array, default: [] },
});


export const User = mongoose.model("User", userSchema);