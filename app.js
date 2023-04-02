const http = require('http');

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost', user:'root',

    database:'fitnes'});
    connection.query('SELECT * FROM Студенты;',
    (err,result) => {
        if(err) {
                throw err;
            }
            console.log(result);
    }); 