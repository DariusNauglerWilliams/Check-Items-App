import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes"

const app = express();

app.use(cors());
app.use(express.json());




app.use("/products", productRoutes);


app.get("/test", (req, res) => {
    res.send("Backend working");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});