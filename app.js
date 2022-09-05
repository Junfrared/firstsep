const express = require("express");
const adminRouter = require("./router/adminRouter");
const collectionRouter = require("./router/collectionRouter");
const productRouter = require("./router/productRouter");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "homepage.html"));
});

app.use("/admin", adminRouter);
app.use("/collection", collectionRouter);
app.use("/product", productRouter);
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "views", "pageNotFound.html")
    );
});

app.listen(3000);
