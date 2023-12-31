const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/cats", (req, res) => {
    const cats = [
        "embul", "felix", "mio", "timi",
    ];

    res.render("cats", { cats });
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});