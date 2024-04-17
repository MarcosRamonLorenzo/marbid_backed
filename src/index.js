import express from "express";
import categoriesRouter from "./routes/category.routes.js";
import serviceRouter from "./routes/service.routes.js";

const app = express();

app.use(express.json());

app.use("/api", categoriesRouter);
app.use("/api/service", serviceRouter);

app.listen(3000, (req, res) => console.log("Server is running on port 3000"));
