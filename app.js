require("dotenv").config();
const express = require("express");
const cors = require("cors");

const startServer = () => {
    const app = express();
    const PORT = process.env.PORT;

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "Welcome to Docker Tutorial"
        });
    });

    app.listen(PORT, () => console.log(`App is running at ${PORT}`));
};

module.exports = startServer;