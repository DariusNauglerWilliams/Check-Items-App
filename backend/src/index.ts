import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/test", (req, res) => {
    res.send("Backend working");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});