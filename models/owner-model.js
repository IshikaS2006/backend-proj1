import mongoose from "mongoose";


const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  products: { type: Array, default: [] },
  profilePic: { type: String, default: "" },
  gstNumber: { type: String, default: "" },
});

const Owner = mongoose.model("owner", ownerSchema);
export default Owner;