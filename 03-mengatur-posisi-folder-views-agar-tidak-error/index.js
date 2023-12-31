/*
    terkadang kita akan mengalami sebuah error pada directory folder "views" dimana ketika kita menjalankan sebuah project
    tidak didalam 1 folder yang seharusnya maka akan terjadi error, jadi kita perlu mengatur directory dari folder "views"
    agar tidak terjadi error dan project bisa dijalankan dari directory manapun, juga ini bermanfaat ketika kita ingin
    membuat suatu folder khusus untuk meletakan assets assets
*/

const express = require("express");
const app = express();

// module bawaan nodejs : https://nodejs.org/dist/latest-v20.x/docs/api/path.html
const path = require("path");

// setup ejs with express.js
app.set("view engine", "ejs");

// setup directory "views", agar bisa dijalankan dimanapun dan directory apapun, karena sudah diset absolute path nya
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});