const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    user: "sql12839449",
    password: "K36mslFHRV",
    host: "sql12.freesqldatabase.com",
    database: "sql12839449"
});

app.post("/save", (req, res) => {
    let sql = "insert into ssstudent(name, company, ctc) values (?, ?, ?)";
    let data = [req.body.na, req.body.co, req.body.ct];

    con.execute(sql, data, (error, response) => {
        if (error)
            res.send(error);
        else
            res.send(response);
    });
});

app.listen(9002, () => {
    console.log("ready @ 9002");
});
