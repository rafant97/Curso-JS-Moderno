iniciarApp();

function iniciarApp() {
    console.log('Iniciando app..');

    segundaFunction();
}

function segundaFunction() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}` );
}

