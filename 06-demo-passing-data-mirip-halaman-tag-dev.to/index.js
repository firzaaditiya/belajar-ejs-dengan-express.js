const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/t/:tag", (req, res) => {
    // mendapatkan data dari paramater
    const { tag } = req.params;

    res.render("tag", {
        title: tag
    });
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});