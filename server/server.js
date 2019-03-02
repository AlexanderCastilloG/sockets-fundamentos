const express = require('express');
const socketIO = require('socket.io'); //socket
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//habilitar el middleware, para que la carpeta public puede ser accedida de donde sea 
app.use(express.static(publicPath));

//inicializar el socket.io,  IO = Esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});