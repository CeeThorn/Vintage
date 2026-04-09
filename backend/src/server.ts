import "dotenv/config";

import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products";


console.log(" SERVER FILE STARTED");
console.log("SUPABASE_URL =", process.env.SUPABASE_URL);

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend is running " });
});

//  routes
app.use("/products", productsRoutes);


app.listen(5000, () => {
  console.log(" Backend running on http://localhost:5000");
});