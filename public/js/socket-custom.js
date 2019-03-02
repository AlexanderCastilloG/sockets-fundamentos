var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});





// function() o callback() =>Retroalimentación de emisiones del cliente hacia el servidor
// Enviar información al Servidor
socket.emit('enviarMensaje', {
    usuario: 'Alexander',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('respuesta server: ',resp);
});


// Escuchar informacion del Servidor
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ',mensaje);
});
