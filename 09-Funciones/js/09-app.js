const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');