// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import cors from "cors";
import serverless from "serverless-http";
import router from "./routes/book.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/book", router);

// Wrap Express app with serverless
export default serverless(app);
