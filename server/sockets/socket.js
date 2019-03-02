
const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    // Emitir información al Cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback)=>{
        // console.log('Servidor: ', mensaje);
        console.log(data);

        // enviamos información a todos los usuarios que están conectados a nuestra aplicación
        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //    callback({
        //        resp: 'TODO SALIO BIEN!'
        //    });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }

    });

});

