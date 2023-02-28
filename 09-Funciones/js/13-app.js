const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () =>console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}


reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');