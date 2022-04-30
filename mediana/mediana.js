/* Metodo SORT

var numeros = [2,4,1,5,3,10,20,"A"]
                
numeros.sort((a,b) => a - b)*/


function calcularMediana(lista){
    const ORDEN_LISTA = lista.sort((a,b) => a - b)
    const MITAD_LISTA = parseInt(lista.length / 2);
    let mediana;

    function esPar(numerito){
        if(numerito % 2 === 0){
        return true;
    
        }else{
        return false;
        }
    }
    function calcularMediaAritmetica(lista){
        const SUMA_LISTA = lista.reduce(
            //Arrow Function
            (acumulador, valorActual) => acumulador + valorActual
        )
    
    const PROMEDIO_LISTA = SUMA_LISTA / lista.length;
    return Math.round(PROMEDIO_LISTA)
    
    }

    if (esPar(lista.length)){
        const ELEMENTO_1 = lista[MITAD_LISTA - 1];
        const ELEMENTO_2 = lista[MITAD_LISTA];
    
        const PROMEDIO_ELEMENTOS = calcularMediaAritmetica([ELEMENTO_1,ELEMENTO_2]);
        mediana = PROMEDIO_ELEMENTOS;
    
    }else{
        mediana = lista[MITAD_LISTA]
    }
    console.log("La lista ordenada es de: " + ORDEN_LISTA)
    return mediana
    
}





