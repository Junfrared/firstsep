const path = require("path");

const product = (req, res) => {
    res.sendFile(
        path.join(__dirname, "../", "views", "product", "product.html")
    );
};
module.exports = { product };
