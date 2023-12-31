/*
    bagaimana cara kita membuat suatu folder static yang akan menyimpan assets website kita, assets ini biasanya seperti
    file (css, javascript, image, icon) atau untuk keperluan user interface

    jadi kita perlu melakukan suatu konfigurasi untuk menentukan dimana folder assets kita atau folder static kita, agar
    ketika kita akses melalui URL nya, folder static itu tidak dianggap sebagai "routing" maka kita perlu menentukan
    folder static ini
*/

const express = require("express");
const app = express();
const path = require("path");

// konfigurasi folder static
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});