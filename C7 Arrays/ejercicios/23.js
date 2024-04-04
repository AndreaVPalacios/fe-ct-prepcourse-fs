function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  var array = [];
  var suma = num;

  for ( var i = 0; i < 10; i++ ){
    suma = suma + 2;

    if ( suma === i ) break;
    else {
      array.push(suma);
    }
    console.log(array);

    if ( i < 10){
      console.log("Se interrumpió la ejecución");
    }
  }
}
breakStatement(5)
module.exports = breakStatement;
