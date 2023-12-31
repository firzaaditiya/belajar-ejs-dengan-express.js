const express = require("express");
const app = express();

const path = require("path");

// import data.json
const tagsData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/t/:tag", (req, res) => {
    // console.info(tagsData);

    // mendapatkan data dari paramater
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

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});