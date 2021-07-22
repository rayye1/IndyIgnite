const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '35.190.142.152',
  user: 'root',
  password: '6LKb$KPd[UG,vTba',
  database: 'indyignitetest',    
  multipleStatements: true
});

connection.connect();
module.exports.connection = connection;