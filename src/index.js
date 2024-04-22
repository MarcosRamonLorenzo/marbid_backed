require("module-alias/register");
const express = require("express");
const cors = require("cors");

// Importing routes.

const categoriesRouter = require("./routes/category.routes.js");
const serviceRouter = require("./routes/service.routes.js");
const userRouter = require("./routes/user.routes.js");
const commentRouter = require("./routes/comment.routes.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/categories", categoriesRouter);
app.use("/api/service", serviceRouter);
app.use("/api/user", userRouter);
app.use("/api/comment", commentRouter);

app.listen(3000, (req, res) => console.log("Server is running on port 3000"));
