var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "pwd123"
});

connection.query('create database if not exists test', function (err) {
    if (err) throw err;

    connection.query("use test", function (err) {
        if (err) throw err;
        connection.query("create table if not exists users(" +
            "id INT not NULL AUTO_INCREMENT," +
            "PRIMARY KEY(id)," +
            "name VARCHAR(30)" +
            ")",
            function (err) {
                if (err) throw err;
            });
    });
});