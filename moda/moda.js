/* Método Object.entries
const OBJ = {
   name: "Jhoander",
   apellido: "Berroteran",
   edad: 30,
   alias: "JJ"

}

const nuevoArray =  Object.entries(OBJ);
console.log(nuevoArray)*/


function calcularModa(lista){

    const CONTADOR = {}

    lista.map(

        function(elemento){
            if(CONTADOR[elemento]){

                CONTADOR[elemento] += 1;
            }else{
                CONTADOR[elemento] = 1;
            }
        }
    )
    const LISTA_2 = Object.entries(CONTADOR).sort((a,b) => a[1] - b[1]);
   
    const MODA = LISTA_2[LISTA_2.length - 1]

    return MODA;
}
