/*
    kita bisa mengirim data dari index.js ke template yang kita ingin kirimkan
*/

const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/rand", (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1;

    /*
        mengirim data ke template, menggunakan object dan diisi pada argument kedua method "render()", cara mengaksesnya
        kita bisa menggunakan nama dari "key/property" dari object yang dibuat misalnya didalam kasus ini adalah "random"
        itu nama property dan cara menggunakan nya cukup panggil nama property nya seperti nama variable pada template
        karena otomatis akan menjadi suatu variable yang memiliki nilai, atau otomatis di desructuring, jadi kita hanya
        perlu memanggil nama variable nya di template
    */
    // res.render("random", {
    //     random: number
    // });

    // atau juga bisa langsung tanpa harus membuat nama property baru, jadi langsung saja kirim data lewat variable nya
    res.render("random", {
        number
    });
});

app.listen(8080, () => {
    console.info(`Server running on http://localhost:8080`);
});