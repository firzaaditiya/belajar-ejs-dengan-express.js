const express = require("express");
const app = express();

const path = require("path");
const tagsData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/t/:tag", (req, res) => {
    const { tag } = req.params;
    const data = tagsData[tag];

    if (data) {
        res.render("tag", {
            data
        });
    } else {
        res.render("notfound", {
            title: tag
        });
    }
});

app.get("/rand", (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1;

    res.render("random", { number });
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});