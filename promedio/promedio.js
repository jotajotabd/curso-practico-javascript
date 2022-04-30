//Definiendo Fórmulas (Media Aritmética):
/*
let lista = [
    100,
    200,
    300,
    50
];

let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
}

const PROMEDIO_LISTA = sumaLista / lista.length;
console.log(`El promedio es de ${PROMEDIO_LISTA} $`)
*/

// Definiendo Funciones (Media Aritmética):
/*
function calcularMediaAritmetica(lista){
    let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
    }
const PROMEDIO_LISTA = sumaLista / lista.length;
return Math.round(PROMEDIO_LISTA)

}
*/

// Método Array.reduce():

function calcularMediaAritmetica(lista){
    const SUMA_LISTA = lista.reduce(
        //Arrow Funtction
        (acumulador, valorActual) => acumulador + valorActual
    )

const PROMEDIO_LISTA = SUMA_LISTA / lista.length;
return Math.round(PROMEDIO_LISTA)

}
