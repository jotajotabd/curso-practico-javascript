// DEFINIENDO FÓRMULAS

const PRECIO_ORIGINAL = 120;
const DESCUENTO_PORCENTAJE = 15;

const PORCENTAJE_CON_DESCUENTO = 100 - DESCUENTO_PORCENTAJE;
const PRECIO_CON_DESCUENTO = PRECIO_ORIGINAL * PORCENTAJE_CON_DESCUENTO / 100;

console.log({
    PRECIO_ORIGINAL,
    DESCUENTO_PORCENTAJE,
    PORCENTAJE_CON_DESCUENTO,
    PRECIO_CON_DESCUENTO
})

console.log(`El precio del producto es de ${PRECIO_ORIGINAL}$`)
console.log(`El descuento es de ${DESCUENTO_PORCENTAJE}%`)
console.log(`El precio total a pagar es de ${PRECIO_CON_DESCUENTO}$`)

// CREANDO FUNCIONES

/* Como lo hice =')

function calcularPrecioConDescuento (precio,d1){
    const descuento = calcularPorcentajeConDescuento(d1)
    return (precio * descuento) / 100 

}

function calcularPorcentajeConDescuento(porcentaje){
    return 100 - porcentaje
}

*/

// Manera correcta y óptima de hacerla.

function precioConDescuento (precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioReal = (precio * porcentajeConDescuento) / 100 

    return (`${precioReal}$`)

}

//ENLAZAR HTML CON JS:

/* Función con Descuento

function calcularPrecioConDescuento(){
    const imputPrice = document.getElementById("InputPrice")
    const precio = imputPrice.value;

    const imputDiscount = document.getElementById("InputDiscount")
    const descuento = imputDiscount.value;

   const resultado = precioConDescuento(precio,descuento)

   const resultPrice = document.getElementById("ResultP")
   resultPrice.innerText = `El precio con descuento es de ${resultado}`
}
*/ 

// EJERCICIO #1 (implementar descuentos con cupones)

//Declaración de Cupones Arrays
const coupons = [
    "Cupon 10%",
    "Cupon 20%",
    "Cupon 50%",
]


// Funcion con Cupones de Descuento y Sentencia SWITCH
/*

function onClickButtonPriceDiscount(){
    const imputPrice = document.getElementById("InputPrice")
    const precio = imputPrice.value;

    const imputCoupon = document.getElementById("InputCoupon")
    const couponValue = imputCoupon.value;

    let descuento;

    switch (couponValue){
    case coupons[0]:
        descuento = 10
        break;
    case coupons[1]:
        descuento = 20
        break;
    case coupons[2]:
        descuento = 50
        break;

    }
    
    if (!coupons.includes(couponValue)){
        alert(`El cupón ${couponValue} no es válido`)
    }

    const resultado2 = precioConDescuento (precio, descuento);

    const resultPrice2 = document.getElementById("ResultP2")
    resultPrice2.innerText = `El precio con descuento es de ${resultado2}`

}
*/ 

/* Intento fallido x(

function seleccionarCupon (){
    const opcion1 = document.getElementById("Cupon1")
    const cupon1 = opcion1.value;

    const culo = document.getElementById("InputCoupon")
    culo.innerText = `Este es el ${cupon1}`

}
*/

// Funcion con Cupones de Descuento y Sentencia IF-ESLE

function onClickButtonPriceDiscount(){
    const imputPrice = document.getElementById("InputPrice")
    const precio = imputPrice.value;

    const imputCoupon = document.getElementById("InputCoupon")
    const couponValue = imputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)){
        alert(`El cupón ${couponValue} no es válido`)
    }else if (couponValue === "Cupon 10%"){
        descuento = 10;
    }else if (couponValue === "Cupon 20%"){
        descuento = 20;
    }else if (couponValue === "Cupon 50%"){
        descuento = 50;
    }

    const resultado2 = precioConDescuento (precio, descuento);

    const resultPrice2 = document.getElementById("ResultP2")
    resultPrice2.innerText = `El precio con descuento es de ${resultado2}`
}
