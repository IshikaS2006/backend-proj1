import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String, required: true },
    textColor: { type: String, required: true, default: "#000000" },
    panelColor: { type: String, required: true , default: "#FFFFFF" },
    bgColor: { type: String, required: true, default: "#FFFFFF" },
});

export const Product = mongoose.model("Product", productSchema);
