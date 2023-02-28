// for( let i = 0; i <= 200; i++ ) {
//     console.log(`Numero: ${i}`)
// }


for(let i = 0; i <= 20; i++) {
    if( i % 2 === 0 ) {
        console.log(`Èl número ${i} es PAR`)
    } else {
        console.log(`El número ${i} es IMPAR`)
    }
}

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

console.log( carrito.length );

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre)
}