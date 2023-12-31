/*
    ada sebuah cara dimana kita tidak perlu menambahkan sebuah navbar ataupun footer secara berulang pada setiap file ejs
    yang kita miliki dan ini lebih disarankan dibandingkan kita membuat setiap navbar dan footer disetiap file ejs yang
    kita miliki atau sesuatu hal yang berulang ulang bisa kita lakukan hanya satu kali saja, jadi bisa dibilang layout
    yang dinamis

    https://ejs.co/

    pada docs nya dibagian "includes", jadi kita menyertakan file ejs lain didalam file ejs saat ini

    dengan menggunakan "<%- %>" dan method bernama "include()"

    jadi kita bisa membagi bagi hal hal yang bisa di slice untuk mempermudah kita agar tidak melakukan sesuatu hal yang
    berulang disetiap file template
*/

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