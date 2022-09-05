const path = require("path");

const collection = (req, res) => {
    res.sendFile(
        path.join(__dirname, "../", "views", "collection", "collection.html")
    );
};

module.exports = { collection };
