import mongoose from "mongoose";


const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  products: { type: Array, default: [] },
  profilePic: { type: String, default: "" },
  gstNumber: { type: String, required: true },
});


export const User = mongoose.model("owner", ownerSchema);