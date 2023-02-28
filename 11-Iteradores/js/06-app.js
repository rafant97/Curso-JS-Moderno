// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`)
})

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

const nuevoArreglo = carrito.forEach( (producto) => producto.nombre);

const nuevoArreglo2 = carrito.map( (producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
