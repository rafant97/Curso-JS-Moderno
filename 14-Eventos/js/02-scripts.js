const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo en la navegacion');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegacion');
    nav.style.backgroundColor = 'white';
})

//mousedown - similar al click
//click
//dblclick - doble click
//mouseeup - cuando sueltas el mouse
