var mysql = require('mysql'); 
var connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Password321',
    database: 'movie_review'
});
module.exports = connection;