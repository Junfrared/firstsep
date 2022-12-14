const path = require("path");

const login = (req, res, next) => {
    console.log(`<h1>Please login</h1>`);
    next();
};
const dashboard = (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, "../", "views", "admin", "dashboard.html")
    );
};

const addproduct = (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, "../", "views", "admin", "add-product.html")
    );
};

const addcollection = (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, "../", "views", "admin", "add-collection.html")
    );
};
module.exports = { login, dashboard, addproduct, addcollection };
