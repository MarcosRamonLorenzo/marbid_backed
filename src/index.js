require("module-alias/register");

const express = require("express");
const categoriesRouter = require("./routes/category.routes.js");
const serviceRouter = require("./routes/service.routes.js");

const app = express();

app.use(express.json());

app.use("/api/categories", categoriesRouter);
app.use("/api/service", serviceRouter);

app.listen(3000, (req, res) => console.log("Server is running on port 3000"));
