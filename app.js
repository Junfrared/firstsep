const express = require("express");
const adminRouter = require("./router/adminRouter");
const collectionRouter = require("./router/collectionRouter");
const productRouter = require("./router/productRouter");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Hello Express</h1>`);
});

app.use("/admin", adminRouter);
app.use("/collection", collectionRouter);
app.use("/product", productRouter);
//app.use(pageNotFound);

app.listen(3000);
