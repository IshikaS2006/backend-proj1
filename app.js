import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import ownersRouter from "./routes/ownersRoutes.js";
import usersRouter from "./routes/usersRouter.js";
import productsRouter from "./routes/productsRouter.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import mongoose connection after dotenv config using dynamic import
await import("./config/mongoose-connection.js");

console.log("mongo uri is", process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
