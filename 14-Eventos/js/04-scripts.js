const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormuario);

function validarFormuario(e) {
    e.preventDefault();

    console.log('Buscando...')

    console.log(e.target.action);
}

