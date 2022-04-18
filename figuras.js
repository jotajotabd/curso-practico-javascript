//Código del cuadrado

console.group("Cuadrados");

const LADOS_CUADRADOS = 5;
console.log(`Los lados del cuadradro son ${LADOS_CUADRADOS}cm`)

const PERIMETRO_CUADRADOS = LADOS_CUADRADOS * 4;
console.log(`El perímetro del cuadro es de ${PERIMETRO_CUADRADOS}cm`)

const AREA_CUADRADOS = LADOS_CUADRADOS * LADOS_CUADRADOS;
console.log(`El área del cuadrado es de ${AREA_CUADRADOS}cm`)

console.groupEnd();

//Código del triágunlo

console.group("Triángulos");

const LADO_1TRIANGULO = 6;
const LADO_2TRIANGULO = 6;
const BASE_TRIANGULO = 4;
console.log(`Los lados del triángulo miden: ${LADO_1TRIANGULO}cm, ${LADO_2TRIANGULO}cm, ${BASE_TRIANGULO} cm`)

const ALTURA_TRIANGUL0 = 5.5;
console.log(`La altura del triágulo es de: ${ALTURA_TRIANGUL0}cm`)

const PERIMETRO_TRIANGULO = LADO_1TRIANGULO + LADO_2TRIANGULO + BASE_TRIANGULO;
console.log(`El perímetro del triángulo es de: ${PERIMETRO_TRIANGULO}cm`)

const AREA_TRIANGULO = (BASE_TRIANGULO * ALTURA_TRIANGUL0) / 2;
console.log(`El área del triángulo es de: ${AREA_TRIANGULO}cm^2`)

console.groupEnd();

//Código del Círculos

console.group("Círculos");

const RADIO_CÍRCULO = 4;
console.log(`El radio del círculo es de: ${RADIO_CÍRCULO}cm`)

const DIAMETRO_CÍRCULO = RADIO_CÍRCULO * 2;
console.log(`El diametro del círculo es de: ${DIAMETRO_CÍRCULO}cm`)

const PI = Math.PI;
console.log(`PI es: ${PI}`)

const PERIMETRO_CIRCULO = DIAMETRO_CÍRCULO * PI;
console.log(`El perímetro del círculo es: ${PERIMETRO_CIRCULO}`)

const AREA_CIRCULO = (RADIO_CÍRCULO * RADIO_CÍRCULO) * PI;
console.log(`El area del círculo es de: ${AREA_CIRCULO}cm^2`)

console.groupEnd();

//////////////////// FUNCIONES //////////////////////   

// Cuadrado:

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}

//Triángulo:

function perimetroTriangulo(l1,l2,base){
    return (Number(l1) + Number(l2) + Number (base));
}

function areaTriangulo(base,h){
    return (base * h) / 2
}

//Círculo:

function diametroCirculo(radio){
    return radio * 2
}

function perimetroCirculo(radio){
    const diametro =  diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio) * PI
}

//Conexión con HTML y JS:

//CUADRADO:

function calcularPerimetroCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}

//TRIÁNGULO:

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTrianguloL1")
    const l1 = input.value;

    const input1 = document.getElementById("InputTrianguloL2")
    const l2 = input1.value;

    const input2 = document.getElementById("InputTrianguloB")
    const base = input2.value;

    const perimetro = perimetroTriangulo(l1, l2, base); 
    alert(perimetro);
}

function calcularAreaTriangulo(){
  
    const input = document.getElementById("InputTrianguloB")
    const base = input.value;

    const input1 = document.getElementById("InputTrianguloA")
    const altura = input1.value;

    const area = areaTriangulo(base, altura); 
    alert(area);
}

// CÍRCULO:

function calcularDiametroCirculo(){

    const input = document.getElementById("InputCirculo")
    const radio = input.value;

    const diametro = diametroCirculo(radio)
    alert(diametro)
}

function calcularPerimetroCirculo(){

    const input = document.getElementById("InputCirculo")
    const radio = input.value;

    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
}

function calcularAreaCirculo(){

    const input = document.getElementById("InputCirculo")
    const radio = input.value;

    const area = areaCirculo(radio)
    alert(area)
}

// Reto: matemáticas con JavaScript (Triángulo Isósceles)

function alturaTrianguloIsosceles(l1,l2,b){

    if (l1 === l2 && l1 != b){
        const altura = Math.sqrt(l1**2 - (b**2)/4)
        alert(`La altura es: ${altura}`)

    }else{
        alert("No es un triángulo isósceles")
    }
}