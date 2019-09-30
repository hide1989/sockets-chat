var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre la sala necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit("entrarChat", usuario, function(res) {
        console.log('usuarios conectados', res);
        renderizarUsuarios(res);
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');


});


// Enviar información
socket.emit('crearMensaje', {
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    renderizarMensajes(mensaje, false);
    scrollBottom();
});

//cuando un usuario entra o sale del chat
socket.on('listaPersonas', function(personas) {

    renderizarUsuarios(personas);

});

//mensajes privados
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado', mensaje);
})