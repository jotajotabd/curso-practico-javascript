const SALARIO_COLOMBIA = colombia.map(

    function(persona){
        return persona.salary
    }
);

const SALARIO_COL_SORTED = SALARIO_COLOMBIA.sort((a,b) => a - b);

function esPar(numerito){
    return numerito %2 === 0
}

function calcularMediaAritmetica(lista){
    const SUMA_LISTA = lista.reduce(
        //Arrow Function
        (acumulador, valorActual) => acumulador + valorActual
    )

const PROMEDIO_LISTA = SUMA_LISTA / lista.length;
return Math.round(PROMEDIO_LISTA)

}

function medianaSalarios(lista){
    const MITAD = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const PERSONA_MITAD_1 = lista[MITAD - 1]; 
        const PERSONA_MITAD_2 = lista[MITAD];
        const MEDIANA =  calcularMediaAritmetica([PERSONA_MITAD_1, PERSONA_MITAD_2])
        return MEDIANA

    }else{
        const PERSONA_MITAD = lista[MITAD];
        return;
    }
}

console.log(medianaSalarios(SALARIO_COL_SORTED))
