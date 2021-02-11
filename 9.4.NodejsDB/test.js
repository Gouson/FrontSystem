var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS gouson DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log('创建数据库');
});
connection.query('use gouson')
connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    console.log('创建表')
    console.log(results);
});

connection.end();