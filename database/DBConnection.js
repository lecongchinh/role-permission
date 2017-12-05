const mysql  = require('mysql');
const config = require('../config');

let mysqlDbConfig = config.mysqlDbConfig;
let DBConnection  = mysql.createConnection(mysqlDbConfig);

module.exports = DBConnection;