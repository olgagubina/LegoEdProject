var mysql = require('mysql');


var localConnection = {
    host: 'localhost',
    user: 'root', // < MySQL username >

    // password: '1234', // < MySQL password COOKIE and MC >
    // password: 'easyPass', // < MySQL password ANNA>
    password: '147258', // < MySQL password OLGA>
    database: 'lego' // <your database name>
}

var clearDBConnection = {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bbbb8310aa5c1c',
    password: 'f64edb0b',
    database: 'heroku_365eb437c5f937e'
}

var realKirillClearDBConection = {
    connectionLimit : 30,
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b13e4bf1011324',
    password: '0e2727fc',
    database: 'heroku_c2b8c232850b096'
}

var amazonDBConnection = {
    host: 'rds-legoproj-5dayhakathon.cflg4ssuo0rh.us-east-2.rds.amazonaws.com',
    user: 'oagubina',
    password: 'Ybyfhtubyf183',
    database: 'lego'
}

//DB SWITCHER
    // connection = mysql.createConnection(amazonDBConnection);
   var connection = mysql.createConnection(localConnection);
    var pool = mysql.createPool(localConnection);
    // connection = mysql.createConnection(clearDBConnection);
    // connection = mysql.createConnection(localConnection); // Recreate the connection, since
    // the old one cannot be reused.

// function handleDisconnect() {
//     //DB SWITCHER
//     // connection = mysql.createConnection(amazonDBConnection);
//     connection = mysql.createConnection(realKirillClearDBConection);
//     // connection = mysql.createConnection(clearDBConnection);
//     // connection = mysql.createConnection(localConnection); // Recreate the connection, since
//     // the old one cannot be reused.
     
//     connection.connect(function(err) { // The server is either down
//     if(err) { // or restarting (takes a while sometimes).
//     console.log('error when connecting to db:', err);
//     setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     } // to avoid a hot loop, and to allow our node script to
//     }); // process asynchronous requests in the meantime.
//     // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//     handleDisconnect(); // lost due to either server restart, or a
//     } else { // connnection idle timeout (the wait_timeout
//     throw err; // server variable configures this)
//     }
//     });
// }

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

     
//and then call this method
// handleDisconnect(); 


module.exports = connection;
module.exports = pool;