// A socket io module
module.exports = function(server) {

    // bind the http/server module to socket io
    var io = require('socket.io').listen(server);

    // set CORS
    io.origins('*:*');

    // define and declare the sockets binding - handshake for our C.R.U.D operations
    io.sockets.on('connection', function(socket) {
        socket.on('objChange', function(data) {
            socket.broadcast.emit('broadcast_objChange', data);
        });
    });
    return io;
};