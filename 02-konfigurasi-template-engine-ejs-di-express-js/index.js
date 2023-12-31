/*
    untuk menginstall ejs pada npm kita hanya perlu mengetikan perintah "npm install ejs"

    https://ejs.co/#install
*/

const express = require("express");
const app = express();

/*
    kita tidak perlu memanggilnya menggunakan "require()" karena express.js memiliki cara tersendiri dimana dia bisa membaca
    bahwa kita menggunakan template engine EJS

    website : https://expressjs.com/en/5x/api.html#app.set

    kita bisa cek pada website diatas dan property bernama "app.set()", disana ada property yang membantu kita contohnya
    "view engine" ini, pada argument method "app.set()" kita sesuaikan saja seperti diwebsite yaitu "view engine" lalu pada
    argument kedua diikuti dengan nama template engine yang kita gunakan yaitu "EJS"

    dan juga kita harus membua folder "views" yang mana ini akan berisi file file template yang akan kita gunakan, sesuai
    dengan aturan yang ada di express js property "views" pada app.set()

    dan file template nya berekstensi ".ejs" karena kita menggunakan EJS
*/
app.set("view engine", "ejs");

// route
app.get("/", (req, res) => {
    /*
        disini kita tidak menggunakan method "server.send()" melainkan kita menggunakan "server.render()" karena kita akan
        melakukan render dari file template

        dan kita tidak perlu menuliskan absolute path karena secara otomatis Express js akan membaca folder "views", kecuali
        kita mengubah directori lokasi folder views ke tempat lain, maka kita perlu menuliskan absolute path nya dan juga
        kita tidak perlu menuliskan ekstensi format file ".ejs" nya juga bisa
    */
    res.render("home");
});

app.listen(8080, () => {
    console.info(`listening on host http://localhost:8080`);
});